import clsx from 'clsx';
import InfoItem from './InfoItem';

const DriverStats = ({ season, showChamp }) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-4 gap-x-2 gap-y-2',
        'sm:grid-cols-8',
        'md:grid-cols-12 md:gap-x-3 md:gap-y-3'
      )}
    >
      {showChamp && <InfoItem title='Championships' info={season.champ} />}
      <InfoItem title='Wins' info={season.wins} />
      <InfoItem title='Podiums' info={season.podiums} />
      <InfoItem title='Points Finishes' info={season.pointFinishes} />
      <InfoItem title='Points' info={season.points} />
      <InfoItem title='Pole Positions' info={season.poles} />
      <InfoItem title='Grands Prix entries' info={season.gpCount} />
      <InfoItem title='Retirements' info={season.retirements} />
      <InfoItem title='Disqualified' info={season.dsq} />
    </div>
  );
};
export default DriverStats;
