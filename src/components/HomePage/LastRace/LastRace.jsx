import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLastRace } from '../../../slices/scheduleSlice';
import Flag from '../../shared/Flag';
import LastRaceResult from './LastRaceResult';
import SpoilerOverlay from './SpoilerOverlay';
import useFetch from '../../../utils/useFetch';
import { shapeScheduleData } from '../../../utils/api/shapeScheduleData';
import Error from '../../shared/Error';
import LoadingSpinner from '../../shared/LoadingSpinner';
import clsx from 'clsx';

const LastRace = () => {
  const lastRace = useSelector((store) => store.schedule.lastRace);
  const dispatch = useDispatch();
  const hideLastRace = useSelector((store) => store.settings.hideLastRace);

  const { loading, response, error } = useFetch(
    'https://ergast.com/api/f1/current/last/results.json',
    [],
    shapeScheduleData,
    Object.keys(lastRace).length > 0
  );

  useEffect(() => {
    if (response) dispatch(addLastRace(response));
  }, [dispatch, response]);

  return (
    <div
      className={clsx(
        'w-full p-4 mb-4 rounded bg-bg-50 shadow-2px col-span-full',
        'dark:bg-bg-800 dark:shadow-2px-dark',
        'sm:col-span-4',
        'md:p-6 md:col-span-6 md:mb-6'
      )}
    >
      <p
        className={clsx(
          'mb-4 text-lg font-poppins text-bg-800',
          'dark:text-bg-50',
          'md:mb-6'
        )}
      >
        Last Race:
      </p>
      {error && <Error />}
      {loading ? (
        <div
          className={clsx(
            'relative top-[calc(50% - 44px)]',
            'md:top-[calc(50%-52px)]'
          )}
        >
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className='flex'>
            <Flag country={lastRace.countryCode} size='36' />
            <div
              className={clsx(
                'flex flex-col ml-4 font-openSans text-bg-800',
                'dark:text-bg-50'
              )}
            >
              <span className='text-sm font-semibold'>{lastRace.raceName}</span>
              <span className='text-xs'>{lastRace.circuitName}</span>
            </div>
          </div>
          <div>
            <div
              className={clsx(
                'relative flex flex-col mt-4 gap-y-2',
                'md:mt-6 md:gap-y-3'
              )}
            >
              <div
                className={clsx(
                  'flex flex-col gap-y-2 relative',
                  'md:gap-y-3',
                  { 'blur-md': hideLastRace }
                )}
              >
                {lastRace?.results?.map((driver, index) => (
                  <LastRaceResult key={index} data={driver} />
                ))}
              </div>
              <SpoilerOverlay />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default LastRace;
