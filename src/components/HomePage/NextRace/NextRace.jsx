import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNextRace } from '../../../slices/scheduleSlice';
import Flag from '../../shared/Flag';
import Selector from '../../shared/Selector/Selector';
import Countdown from './Countdown';
import SwitchTransitionWrapper from '../../shared/SwitchTransitionWrapper';
import useFetch from '../../../utils/useFetch';
import { shapeScheduleData } from '../../../utils/api/shapeScheduleData';
import Error from '../../shared/Error';
import LoadingSpinner from '../../shared/LoadingSpinner';
import clsx from 'clsx';

const NextRace = () => {
  const nextRace = useSelector((store) => store.schedule.nextRace);
  const dispatch = useDispatch();
  const activeButton = useSelector((store) => store.settings.selector.nextRace);
  const [activeSessionTime, setActiveSessionTime] = useState(null);
  const [selectorOptions, setSelectorOptions] = useState([
    'FP1',
    'FP2',
    'FP3',
    'Quali',
    'Race',
  ]);

  const { response, error, loading } = useFetch(
    'https://ergast.com/api/f1/current/next.json',
    [],
    shapeScheduleData,
    Object.keys(nextRace).length > 0
  );

  useEffect(() => {
    if (response) dispatch(addNextRace(response));
  }, [dispatch, response]);

  useEffect(() => {
    if (Object.keys(nextRace).length > 0) {
      const { fp1, fp2, fp3, quali, race, sprint } = nextRace.schedule;
      let sessions = { fp1, fp2, fp3, quali, race };

      if (nextRace.schedule.sprint) {
        sessions = { fp1, quali, sprint, race };
        setSelectorOptions(['FP1', 'Quali', 'Sprint', 'Race']);
      }

      const activeSession = selectorOptions[activeButton].toLowerCase();

      setActiveSessionTime(sessions[activeSession]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeButton, activeSessionTime, nextRace.circuitId, nextRace]);

  return (
    <div
      className={clsx(
        'bg-bg-50 rounded shadow-2px p-4 w-full col-span-full',
        'dark:bg-bg-800 dark:shadow-2px-dark',
        'sm:col-span-4',
        'md:p-6 md:col-span-6 mb-4 md:mb-6'
      )}
    >
      <p
        className={clsx(
          'font-poppins text-lg text-bg-800',
          'dark:text-bg-50',
          'mb-4 md:mb-6'
        )}
      >
        Next Race:
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
            <Flag country={nextRace.countryCode} size='36' />
            <div
              className={clsx(
                'flex flex-col ml-4 font-openSans text-bg-800',
                'dark:text-bg-50'
              )}
            >
              <span className='text-sm font-semibold'>{nextRace.raceName}</span>
              <span className='text-xs'>{nextRace.circuitName}</span>
            </div>
          </div>
          <Selector options={selectorOptions} type='nextRace' />
          <SwitchTransitionWrapper state={activeButton}>
            <Countdown time={activeSessionTime} />
          </SwitchTransitionWrapper>
        </>
      )}
    </div>
  );
};
export default NextRace;
