import CircuitInfoItem from './CircuitInfoItem';
import circuitData from '../../utils/circuitData';

const CircuitInfo = ({ race }) => {
  const { stats } = circuitData[race.circuitId];
  const location = `${race.locality}, ${race.country}`;
  return (
    <div className='flex flex-col gap-y-2'>
      <CircuitInfoItem title='Circuit' info={race.circuitName} />
      <CircuitInfoItem title='Location' info={location} />
      <CircuitInfoItem title='Lap Length' info={stats.length} />
      <CircuitInfoItem title='Laps' info={stats.laps} />
      <CircuitInfoItem title='Race Distance' info={stats.distance} />
    </div>
  );
};
export default CircuitInfo;
