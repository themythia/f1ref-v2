import RaceResultItem from './RaceResultItem';

const RaceResults = ({ results }) => {
  return (
    <div className='flex flex-col gap-y-2 md:col-span-12'>
      <span className='hidden md:block font-poppins text-lg text-bg-800 dark:text-bg-50 mb-1'>
        Race Results:
      </span>
      {results.map((driver, index) => (
        <RaceResultItem key={index} driver={driver} />
      ))}
    </div>
  );
};
export default RaceResults;
