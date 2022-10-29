import clsx from 'clsx';
import RaceResultItem from './RaceResultItem';

const RaceResults = ({ results, type }) => {
  return (
    <div className={clsx('flex flex-col gap-y-2', 'md:gap-y-3 md:col-span-12')}>
      {results.map((driver, index) => (
        <RaceResultItem key={index} driver={driver} />
      ))}
    </div>
  );
};
export default RaceResults;
