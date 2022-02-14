import Flag from '../shared/Flag';
const DriverItem = ({ driver }) => {
  const color =
    driver.teamCode === 'red_bull'
      ? 'bg-redbull'
      : driver.teamCode === 'mercedes'
      ? 'bg-mercedes'
      : driver.teamCode === 'mclaren'
      ? 'bg-mclaren'
      : driver.teamCode === 'ferrari'
      ? 'bg-ferrari'
      : driver.teamCode === 'alphatauri'
      ? 'bg-alphatauri'
      : driver.teamCode === 'aston_martin'
      ? 'bg-astonmartin'
      : driver.teamCode === 'alpine'
      ? 'bg-alpine'
      : driver.teamCode === 'alfa'
      ? 'bg-alfaromeo'
      : driver.teamCode === 'williams'
      ? 'bg-williams'
      : driver.teamCode === 'haas' && 'bg-haas-900 dark:bg-haas-50';

  return (
    <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 lg:p-6 max-w-full md:w-[calc((100%-16px)/2)] lg:w-[calc(50%-12px)] xl:w-[calc((100%-48px)/3)] 2xl:w-[calc((100%-72px)/4)] cursor-pointer hover:scale-[1.02] hover:shadow-8px duration-200 group flex flex-col items-center'>
      <div className={`${color} rounded relative shadow-2px `}>
        <img src={driver.image} alt={driver.name} />
      </div>
      <div className='flex flex-row  gap-x-4 items-center mt-4 lg:mt-4 w-full'>
        <span className='text-3xl font-poppins inline-block min-w-[36px] text-center'>
          {driver.no}
        </span>
        <div className='flex flex-col font-openSans text-center w-full'>
          <span className='font-semibold text-sm'>{driver.name}</span>
          <span className='text-xs'>{driver.team}</span>
        </div>
        <Flag size='36' country={driver.countryCode} />
      </div>
    </div>
  );
};
export default DriverItem;
