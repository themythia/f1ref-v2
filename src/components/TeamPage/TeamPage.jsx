import { Navigate, useParams } from 'react-router-dom';
import TeamLogo from '../shared/TeamLogo';
import teamColors from '../../utils/teamColors';
import RaceTitle from '../RacePage/RaceTitle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTeams, addTeamStats } from '../../slices/teamsSlice';
import TeamBio from './TeamBio';
import TeamInfoToggle from './TeamInfoToggle';
import { shapeTeamRaceStats } from '../../utils/api/shapeRaceStats';
import { useFetch } from '../../utils/useFetch';
import { shapeTeamData } from '../../utils/api/shapeTeamData';
import { shapeDriverData } from '../../utils/api/shapeDriverData';
import { addDrivers } from '../../slices/driversSlice';
import { setSelector } from '../../slices/settingsSlice';
import Error from '../shared/Error';
import LoadingSpinner from '../shared/LoadingSpinner';
import Drivers from './Drivers';
import clsx from 'clsx';

const TeamPage = () => {
  const { teamId } = useParams();
  const teamCode = teamId.replace(/-/gi, '_'); // restores slugged strings
  const dispatch = useDispatch();
  const teams = useSelector((store) => store.teams);
  const team = useSelector((store) =>
    store.teams.find((team) => team.id === teamCode)
  );
  const drivers = useSelector((store) => store.drivers);
  const [loading, setLoading] = useState(true);

  const { response: statsResponse, error: statsError } = useFetch(
    `https://ergast.com/api/f1/constructors/${teamCode}/results.json`,
    [],
    shapeTeamRaceStats
  );

  const { response: tResponse, error: tError } = useFetch(
    'https://ergast.com/api/f1/current/constructors.json',
    [],
    shapeTeamData
  );

  const { response: dResponse, error: dError } = useFetch(
    'https://ergast.com/api/f1/current/drivers.json',
    [],
    shapeDriverData,
    drivers.length > 0
  );

  useEffect(() => {
    dispatch(setSelector({ type: 'teamPage', index: 0 }));
  }, [dispatch]);

  useEffect(() => {
    if (drivers.length === 0 && dResponse) dispatch(addDrivers(dResponse));
    if (!team) {
      if (dResponse && tResponse) {
        const updatedTeam = tResponse.map((team) => ({
          ...team,
          drivers: dResponse.filter((driver) => driver.teamCode === team.id),
        }));
        dispatch(addTeams(updatedTeam));
      }
    }
  }, [dResponse, dispatch, drivers.length, tResponse, team]);

  useEffect(() => {
    if (team && !team.stats && statsResponse) {
      dispatch(addTeamStats({ stats: statsResponse, id: team.id }));
      setLoading(false);
    }
    if (team && team.stats && statsResponse) setLoading(false);
  }, [team, dispatch, statsResponse]);

  if (teams.length > 0 && !teams.find((team) => team.id === teamCode)) {
    return <Navigate to='/teams' />;
  }

  return (
    <main
      className={clsx(
        'p-4 row-start-2 row-end-3',
        'sm:p-8',
        'md:p-6',
        'lg:px-[200px]',
        'xl:px-[calc((100vw-1128px)/2)]'
      )}
    >
      {(statsError || dError || tError) && <Error />}
      {loading ? (
        <div className='flex flex-row items-center justify-center w-full h-full'>
          <LoadingSpinner />
        </div>
      ) : (
        <div
          className={clsx(
            'bg-bg-50 rounded shadow-2px p-4 w-full h-min grid grid-cols-4 gap-x-4 gap-y-4 animate__animated animate__fadeIn',
            'dark:bg-bg-800 dark:shadow-2px-dark',
            'sm:grid-cols-8',
            'md:p-6 md:grid-cols-12 md:gap-x-6 md:gap-y-6'
          )}
        >
          <div
            className={clsx(
              'w-full col-span-4 aspect-16/9 overflow-hidden rounded shadow-2px',
              'dark:shadow-2px-dark',
              'sm:col-span-8',
              'md:col-span-12',
              teamColors(teamCode)
            )}
          >
            <TeamLogo type='big' team={teamId} />
          </div>
          <RaceTitle countryCode={team.countryCode} name={team.name} />
          <TeamBio team={team} />
          <Drivers drivers={team.drivers} />
          <TeamInfoToggle
            seasons={Object.keys(team.stats.seasons).sort((a, b) => b - a)}
            stats={team.stats}
          />
        </div>
      )}
    </main>
  );
};
export default TeamPage;
