import clsx from 'clsx';
import InfoItem from '../DriverPage/InfoItem';

const TeamBio = ({ team }) => {
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
        Team Info:
      </span>
      <div
        className={clsx(
          'grid grid-cols-4 gap-x-2 gap-y-2',
          'sm:grid-cols-8',
          'md:grid-cols-12 md:gap-x-3 md:gap-y-3'
        )}
      >
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
