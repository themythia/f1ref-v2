import InfoItem from '../DriverPage/InfoItem';

const TeamBio = ({ team }) => {
  return (
    <div className='col-span-4 sm:col-span-8 md:col-span-12 flex flex-col gap-y-2'>
      <span className='font-poppins text-lg text-bg-800 dark:text-bg-50 md:mb-1'>
        Team Info:
      </span>
      <div className='grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-2 md:gap-x-3 gap-y-2 md:gap-y-3'>
        <InfoItem title='Full Name' info={team.fullName} />
        <InfoItem title='Base' info={team.base} />
        <InfoItem title='Team Principal' info={team.teamChief} />
        <InfoItem title='Chassis' info={team.chassis} />
        <InfoItem title='Power Unit' info={team.powerUnit} />
      </div>
    </div>
  );
};
export default TeamBio;
