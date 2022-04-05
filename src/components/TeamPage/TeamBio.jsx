import InfoItem from '../DriverPage/InfoItem';

// const InfoItem = ({ title, info }) => {
//   return (
//     <div className='flex flex-col rounded shadow-2px bg-bg-200 dark:bg-bg-900 p-2 font-openSans text-sm text-left w-full h-min col-span-4'>
//       <span className='font-semibold'>{title}</span>
//       <span className='text-xs'>{info}</span>
//     </div>
//   );
// };

const TeamBio = ({ team }) => {
  return (
    <div className='col-span-4 sm:col-span-8 md:col-span-12 flex flex-col gap-y-2'>
      <span className='font-poppins text-lg text-bg-800 dark:text-bg-50 md:mb-1'>
        Team Info:
      </span>
      <div className='grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 md:gap-x-6 gap-y-2'>
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
