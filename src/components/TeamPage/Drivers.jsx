import DriverItem from '../DriversPage/DriverItem';

const Drivers = ({ drivers }) => {
  return (
    <div className='col-span-4 sm:col-span-8 md:col-span-12 flex flex-col gap-y-2'>
      <span className='font-poppins text-lg text-bg-800 dark:text-bg-50 md:mb-1'>
        Drivers:
      </span>
      <div className='grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-2 md:gap-x-3 gap-y-2 md:gap-y-3'>
        {drivers.map((driver, index) => (
          <DriverItem key={index} driver={driver} forTeamPage={true} />
        ))}
      </div>
    </div>
  );
};
export default Drivers;
