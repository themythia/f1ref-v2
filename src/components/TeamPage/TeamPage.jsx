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

const TeamPage = () => {
  const { teamId } = useParams();
  const teamCode = teamId.replace(/-/gi, '_'); // restores slugged strings
  const dispatch = useDispatch();
  const team = useSelector((store) =>
    store.teams.find((team) => team.id === teamCode)
  );

  const [loading, setLoading] = useState(true);

  const {
    status: statsStatus,
    response: statsResponse,
    error: statsError,
  } = useFetch(
    `https://ergast.com/api/f1/constructors/${teamCode}/results.json`,
    [],
    shapeTeamRaceStats
  );

  const {
    status: tStatus,
    response: tResponse,
    error: tError,
  } = useFetch(
    'https://ergast.com/api/f1/current/constructors.json',
    [],
    shapeTeamData
  );

  const {
    status: dStatus,
    response: dResponse,
    error: dError,
  } = useFetch(
    'https://ergast.com/api/f1/current/drivers.json',
    [],
    shapeDriverData
  );

  useEffect(() => {
    if (!team) {
      if (dResponse && tResponse) {
        const updatedTeam = tResponse.map((team) => ({
          ...team,
          drivers: dResponse.filter((driver) => driver.teamCode === team.id),
        }));
        dispatch(addTeams(updatedTeam));
      }
    }
  }, [dResponse, dispatch, tResponse, team]);

  useEffect(() => {
    if (team && !team.stats && statsResponse) {
      dispatch(addTeamStats({ stats: statsResponse, id: team.id }));
      setLoading(false);
    }
  }, [team, dispatch, statsResponse]);

  if (loading) return <p>Loading...</p>;

  return (
    <main className='p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] row-start-2 row-end-3'>
      <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 md:p-6 w-full h-min grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 gap-y-4 md:gap-x-6 md:gap-y-6'>
        <div
          className={`w-full col-span-4 sm:col-span-8 md:col-span-12 aspect-16/9 overflow-hidden rounded shadow-2px ${teamColors(
            teamCode
          )}`}
        >
          <TeamLogo type='big' team={teamId} />
        </div>
        <RaceTitle countryCode={team.countryCode} name={team.name} />
        <TeamBio team={team} />
        <TeamInfoToggle
          seasons={Object.keys(team.stats.seasons).sort((a, b) => b - a)}
          stats={team.stats}
        />
      </div>
    </main>
  );
};
export default TeamPage;
