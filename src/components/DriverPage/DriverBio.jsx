import InfoItem from './InfoItem';

const DriverBio = ({ driver }) => {
  return (
    <div className='col-span-4 sm:col-span-8 md:col-span-12 flex flex-col gap-y-2'>
      <span className='font-poppins text-lg text-bg-800 dark:text-bg-50 md:mb-1'>
        Driver Info:
      </span>
      <div className='grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 md:gap-x-6 gap-y-2'>
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
