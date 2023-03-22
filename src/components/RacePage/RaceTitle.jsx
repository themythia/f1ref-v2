import clsx from 'clsx';
import Flag from '../shared/Flag';

const RaceTitle = ({ countryCode, name }) => {
  return (
    <div
      className={clsx(
        'flex flex-row items-center col-span-4',
        'sm:col-span-8 sm:justify-center',
        'md:col-span-12'
      )}
      data-testid='race-title'
    >
      <Flag size='40' country={countryCode} />
      <span className='ml-4 text-xl font-poppins md:ml-6'>{name}</span>
    </div>
  );
};
export default RaceTitle;
