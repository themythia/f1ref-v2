import clsx from 'clsx';
import InfoItem from './InfoItem';

const DriverBio = ({ driver }) => {
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
          'font-poppins text-lg text-bg-800',
          'dark:text-bg-50',
          'md:mb-1'
        )}
      >
        Driver Info:
      </span>
      <div
        className={clsx(
          'grid grid-cols-4 gap-x-2 gap-y-2',
          'sm:grid-cols-8',
          'md:grid-cols-12 md:gap-x-3 md:gap-y-3'
        )}
      >
        <InfoItem title='Team' info={driver.team} />
        <InfoItem title='No' info={driver.no} />
        <InfoItem title='Date of Birth' info={driver.dateOfBirth} />
        <InfoItem title='Nationality' info={driver.nationality} />
        <InfoItem title='Birth Place' info={driver.birthPlace} />
      </div>
    </div>
  );
};
export default DriverBio;
