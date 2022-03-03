import TeamBar from '../HomePage/Standings/TeamBar';

const RaceResultItem = ({ driver }) => {
  return (
    <div className='flex flex-row rounded shadow-2px bg-bg-200 dark:bg-bg-900 p-2 text-sm items-center'>
      <span className='font-poppins text-lg w-6 text-center'>
        {driver.positionText}
      </span>
      <div className='flex flex-row'>
        <TeamBar team={driver.teamCode} />
        <span className='font-openSans font-semibold text-left'>
          {driver.name}
        </span>
      </div>
      <span className='ml-auto text-right'>{driver.time}</span>
    </div>
  );
};
export default RaceResultItem;
