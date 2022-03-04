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
    <div className='flex flex-row rounded shadow-2px bg-bg-200 dark:bg-bg-900 p-2 text-sm items-center'>
      <span className='font-poppins text-lg w-6 text-center'>{position}</span>
      <div className='flex flex-row'>
        <TeamBar team={driver.teamCode} />
        <span className='font-openSans font-semibold text-left'>
          {driver.name}
        </span>
      </div>
      <span className='ml-auto text-right'>{status}</span>
    </div>
  );
};
export default RaceResultItem;
