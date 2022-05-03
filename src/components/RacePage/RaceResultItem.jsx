import TeamBar from '../HomePage/Standings/TeamBar';

const RaceResultItem = ({ driver }) => {
  const status = /(^\+)|(^\d)/gi.test(driver.time) ? driver.time : 'DNF';
  const position =
    driver.positionText === 'D'
      ? 'DSQ'
      : driver.positionText === 'R'
      ? 'NC'
      : driver.positionText;
  return (
    <div className='flex flex-row rounded shadow-2px dark:shadow-2px-dark bg-bg-200 dark:bg-bg-900 p-2 text-sm items-center'>
      <span className='font-poppins text-lg w-6 text-center'>{position}</span>
      <div className='flex flex-row justify-between w-full'>
        <div className='flex flex-row'>
          <TeamBar team={driver.teamCode} />
          <span className='font-openSans font-semibold text-left w-32'>
            {driver.name}
          </span>
        </div>
        <span className='ml-auto text-left font-openSans w-32'>{status}</span>
        <div className='hidden sm:block ml-auto font-openSans text-right w-20'>
          <span className='font-semibold'>{driver.points}</span>
          <span className='text-xs'> PTS</span>
        </div>
      </div>
    </div>
  );
};
export default RaceResultItem;
