import clsx from 'clsx';
import DriverItem from '../DriversPage/DriverItem';

const Drivers = ({ drivers }) => {
  return (
    <div
      className={clsx(
        'col-span-4 flex flex-col gap-y-2',
        'sm:col-span-8',
        'md:col-span-12'
      )}
    >
      <span
        className={clsx(
          'text-lg font-poppins text-bg-800',
          'dark:text-bg-50',
          'md:mb-1'
        )}
      >
        Drivers:
      </span>
      <div
        className={clsx(
          'grid grid-cols-4 gap-x-2 gap-y-2',
          'sm:grid-cols-8',
          'md:grid-cols-12 md:gap-x-3 md:gap-y-3'
        )}
      >
        {drivers.map((driver, index) => (
          <DriverItem key={index} driver={driver} forTeamPage={true} />
        ))}
      </div>
    </div>
  );
};
export default Drivers;
