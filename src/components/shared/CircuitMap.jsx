import clsx from 'clsx';
import circuitData from '../../utils/circuitData';

const CircuitMap = ({ circuit }) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center col-span-4',
        'sm:col-span-8',
        'md:col-start-3 md:col-end-11'
      )}
      data-testid='circuit-map'
    >
      <img
        src={circuitData[circuit].circuitMap}
        alt={`Track Map of ${circuit}`}
        className={clsx(
          'max-w-lg w-full col-span-4 aspect-4/3 fill-bg-800',
          'dark:fill-bg-50',
          'sm:col-span-8',
          'md:col-start-3 md:col-end-11'
        )}
      />
    </div>
  );
};
export default CircuitMap;
