import CircuitInfoItem from './CircuitInfoItem';
import circuitData from '../../utils/circuitData';
import React from 'react';
import clsx from 'clsx';

const CircuitInfo = ({ race }) => {
  const { stats } = circuitData?.[race.circuitId];
  if (!stats) return null;
  const location = `${race.locality}, ${race.country}`;
  const record =
    stats.record + ' - ' + stats.recordHolder + ' (' + stats.recordYear + ')';

  return (
    <div
      className={clsx(
        'flex flex-col gap-y-2 gap-x-2',
        'sm:flex-row sm:flex-wrap',
        'md:gap-y-3 md:col-start-1 md:col-end-7'
      )}
      data-testid='circuit-info'
    >
      <span
        className={clsx(
          'hidden text-lg font-poppins text-bg-800',
          'dark:text-bg-50',
          'md:block'
        )}
      >
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
