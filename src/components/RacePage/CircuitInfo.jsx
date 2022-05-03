import CircuitInfoItem from './CircuitInfoItem';
import circuitData from '../../utils/circuitData';
import React from 'react';

const CircuitInfo = ({ race }) => {
  const { stats } = circuitData[race.circuitId];
  const location = `${race.locality}, ${race.country}`;
  const record =
    stats.record + ' - ' + stats.recordHolder + ' (' + stats.recordYear + ')';

  return (
    <div className='flex flex-col gap-y-2 md:gap-y-3 sm:flex-row sm:flex-wrap gap-x-2 md:col-start-1 md:col-end-7'>
      <span className='hidden md:block font-poppins text-lg text-bg-800 dark:text-bg-50'>
        Circuit Info:
      </span>
      <CircuitInfoItem title='Circuit' info={race.circuitName} />
      <CircuitInfoItem title='Location' info={location} />
      <CircuitInfoItem title='Lap Length' info={stats.length} />
      <CircuitInfoItem title='Laps' info={stats.laps} />
      <CircuitInfoItem title='Race Distance' info={stats.distance} />
      <CircuitInfoItem title='Lap Record' info={record} />
    </div>
  );
};
export default CircuitInfo;
