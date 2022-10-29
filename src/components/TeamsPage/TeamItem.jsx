import { Link } from 'react-router-dom';
import teamColors from '../../utils/teamColors';
import TeamLogo from '../shared/TeamLogo';
import clsx from 'clsx';

const TeamItem = ({ team }) => {
  return (
    <Link
      className={clsx(
        'bg-bg-50 rounded shadow-2px w-full cursor-pointer duration-200 group col-span-4 flex flex-row items-center h-[84px]',
        'dark:bg-bg-800 dark:shadow-2px-dark',
        'hover:scale-[1.02]',
        'sm:col-span-4',
        'md:col-span-6',
        'xl:col-span-4'
      )}
      to={`/teams/${team.id.replace(/_/gi, '-')}`}
    >
      <div
        className={clsx(
          'rounded-l relative shadow-2px flex flex-row items-end h-full aspect-square',
          'dark:shadow-2px-dark',
          teamColors(team.id)
        )}
      >
        <TeamLogo team={team.id} type='round' />
      </div>
      <div
        className={clsx(
          'flex flex-row items-center w-full px-4 gap-x-4',
          'md:px-6'
        )}
      >
        <div className='flex flex-col w-full font-openSans'>
          <span className='text-sm font-semibold'>{team.name}</span>
          <div>
            {team.drivers.map((driver, index) =>
              team.drivers.length - 1 === index ? (
                <span key={index} className='text-xs'>
                  {driver.name}
                </span>
              ) : (
                <span
                  key={index}
                  className='text-xs'
                >{`${driver.name} | `}</span>
              )
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default TeamItem;
