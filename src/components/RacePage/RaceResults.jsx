import RaceResultItem from './RaceResultItem';

const RaceResults = ({ results }) => {
  return (
    <div className='flex flex-col gap-y-2'>
      {results.map((driver, index) => (
        <RaceResultItem key={index} driver={driver} />
      ))}
    </div>
  );
};
export default RaceResults;
