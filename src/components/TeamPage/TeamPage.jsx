import { useParams } from 'react-router-dom';
import TeamLogo from '../shared/TeamLogo';
import teamColors from '../../utils/teamColors';
import RaceTitle from '../RacePage/RaceTitle';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamRaceStats, getTeamsAndDrivers } from '../../utils/api';
import { addTeams } from '../../slices/teamsSlice';

const TeamPage = () => {
  const { teamId } = useParams();
  const teamCode = teamId.replace(/-/gi, '_'); // restores slugged strings
  const dispatch = useDispatch();
  const team = useSelector((store) =>
    store.teams.find((team) => team.id === teamCode)
  );

  useEffect(() => {
    if (!team) {
      getTeamsAndDrivers().then((data) => {
        dispatch(addTeams(data));
      });
    }
  }, [team, dispatch]);

  useEffect(() => {
    if (team && !team.stats) {
      getTeamRaceStats(teamCode).then((data) => console.log('data:', data));
    }
  }, [team, teamCode]);

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
      </div>
    </main>
  );
};
export default TeamPage;
