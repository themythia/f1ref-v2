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
        sessions = { fp1, quali, fp2, sprint, race };
        setSelectorOptions(['FP1', 'Quali', 'FP2', 'Sprint', 'Race']);
      }

      const activeSession = selectorOptions[activeButton].toLowerCase();

      setActiveSessionTime(sessions[activeSession]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeButton, activeSessionTime, nextRace.circuitId, nextRace]);

  return (
    <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 md:p-6 w-full col-span-full sm:col-span-4 md:col-span-6 mb-4 md:mb-6'>
      <p className='font-poppins text-lg text-bg-800 dark:text-bg-50 mb-4 md:mb-6'>
        Next Race:
      </p>
      {error && <Error />}
      {loading ? (
        <div className='relative top-[calc(50% - 44px)] md:top-[calc(50%-52px)]'>
          <LoadingSpinner />
        </div>
      ) : (
        <React.Fragment>
          <div className='flex'>
            <Flag country={nextRace.countryCode} size='36' />
            <div className='flex flex-col font-openSans text-bg-800 dark:text-bg-50 ml-4'>
              <span className='font-semibold text-sm'>{nextRace.raceName}</span>
              <span className='text-xs'>{nextRace.circuitName}</span>
            </div>
          </div>
          <Selector options={selectorOptions} type='nextRace' />
          <SwitchTransitionWrapper state={activeButton}>
            <Countdown time={activeSessionTime} />
          </SwitchTransitionWrapper>
        </React.Fragment>
      )}
    </div>
  );
};
export default NextRace;
