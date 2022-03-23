import Flag from '../shared/Flag';
import { useNavigate } from 'react-router-dom';
import teamColors from '../../utils/teamColors';
import TeamLogo from '../shared/TeamLogo';
import { Fragment } from 'react';

const TeamItem = ({ team }) => {
  const navigate = useNavigate();

  return (
    <div
      className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px w-full cursor-pointer hover:scale-[1.02] duration-200 group col-span-4 sm:col-span-4 md:col-span-6 xl:col-span-4 flex flex-row items-center h-[84px]'
      onClick={() => navigate(`/teams/${team.id.replace(/_/gi, '-')}`)}
    >
      <div
        className={`${teamColors(
          team.id
        )} rounded-l relative shadow-2px flex flex-row items-end h-full aspect-square`}
      >
        <TeamLogo team={team.id} />
      </div>
      <div className='flex flex-row gap-x-4 w-full px-4 md:px-6 items-center'>
        <div className='flex flex-col font-openSans w-full'>
          <span className='font-semibold text-sm'>{team.name}</span>
          <div>
            {team.drivers.map((driver, index) =>
              team.drivers.length - 1 === index ? (
                <span key={index} className='text-xs'>
                  {driver.name}
                </span>
              ) : (
                <Fragment key={index}>
                  <span className='text-xs'>{`${driver.name} | `}</span>
                </Fragment>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamItem;
