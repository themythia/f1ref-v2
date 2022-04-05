import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNextRace } from '../../../utils/api';
import { addNextRace } from '../../../slices/scheduleSlice';
import Flag from '../../shared/Flag';
import Selector from '../../shared/Selector/Selector';
import Countdown from './Countdown';
import circuitData from '../../../utils/circuitData';
import SwitchTransitionWrapper from '../../shared/SwitchTransitionWrapper';

const NextRace = () => {
  const nextRace = useSelector((store) => store.schedule.nextRace);
  const dispatch = useDispatch();
  const activeButton = useSelector((store) => store.settings.selector.nextRace);
  const [loading, setLoading] = useState(true);
  const [activeSessionTime, setActiveSessionTime] = useState(null);

  useEffect(() => {
    getNextRace()
      .then((data) => dispatch(addNextRace(data)))
      .then(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      const raceSchedule = circuitData[nextRace.circuitId]?.schedule;
      const activeSession = Object.keys(raceSchedule)[activeButton];
      setActiveSessionTime(raceSchedule[activeSession]);
    }
  }, [loading, activeButton, activeSessionTime, nextRace.circuitId]);

  return (
    <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 md:p-6 w-full col-span-full sm:col-span-4 md:col-span-6 mb-4 md:mb-6'>
      <p className='font-poppins text-lg text-bg-800 dark:text-bg-50 mb-4 md:mb-6'>
        Next Race:
      </p>
      <div className='flex'>
        <Flag country={nextRace.countryCode} size='36' />
        <div className='flex flex-col font-openSans text-bg-800 dark:text-bg-50 ml-4'>
          <span className='font-semibold text-sm'>{nextRace.raceName}</span>
          <span className='text-xs'>{nextRace.circuitName}</span>
        </div>
      </div>
      <Selector
        options={['FP1', 'FP2', 'FP3', 'Quali', 'Race']}
        type='nextRace'
      />
      <SwitchTransitionWrapper state={activeButton}>
        <Countdown time={activeSessionTime} />
      </SwitchTransitionWrapper>
    </div>
  );
};
export default NextRace;
