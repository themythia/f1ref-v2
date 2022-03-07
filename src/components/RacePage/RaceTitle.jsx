import Flag from '../shared/Flag';

const RaceTitle = ({ countryCode, name }) => {
  return (
    <div className='flex flex-row items-center mt-4 col-span-4 sm:col-span-8 sm:justify-center md:col-start-1 md:col-end-7'>
      <Flag size='40' country={countryCode} />
      <span className='font-poppins text-xl ml-4 md:ml-6'>{name}</span>
    </div>
  );
};
export default RaceTitle;
