import { useParams } from 'react-router-dom';
import TeamLogo from '../shared/TeamLogo';
import teamColors from '../../utils/teamColors';
import RaceTitle from '../RacePage/RaceTitle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTeams, addTeamStats } from '../../slices/teamsSlice';
import TeamBio from './TeamBio';
import TeamInfoToggle from './TeamInfoToggle';
import { shapeTeamRaceStats } from '../../utils/api/shapeRaceStats';
import useFetch from '../../utils/useFetch';
import { shapeTeamData } from '../../utils/api/shapeTeamData';
import { shapeDriverData } from '../../utils/api/shapeDriverData';
import { addDrivers } from '../../slices/driversSlice';
import { setSelector } from '../../slices/settingsSlice';
import Error from '../shared/Error';
import LoadingSpinner from '../shared/LoadingSpinner';
import Drivers from './Drivers';

const TeamPage = () => {
  const { teamId } = useParams();
  const teamCode = teamId.replace(/-/gi, '_'); // restores slugged strings
  const dispatch = useDispatch();
  const team = useSelector((store) =>
    store.teams.find((team) => team.id === teamCode)
  );
  const drivers = useSelector((store) => store.drivers);
  const [loading, setLoading] = useState(true);

  console.log('team', team);
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

  return (
    <main className='p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] row-start-2 row-end-3'>
      {(statsError || dError || tError) && <Error />}
      {loading ? (
        <div className='h-full w-full flex flex-row justify-center items-center'>
          <LoadingSpinner />
        </div>
      ) : (
        <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px dark:shadow-2px-dark p-4 md:p-6 w-full h-min grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 gap-y-4 md:gap-x-6 md:gap-y-6'>
          <div
            className={`w-full col-span-4 sm:col-span-8 md:col-span-12 aspect-16/9 overflow-hidden rounded shadow-2px dark:shadow-2px-dark ${teamColors(
              teamCode
            )}`}
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
