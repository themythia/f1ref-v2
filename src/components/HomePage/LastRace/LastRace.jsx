import Container from '../Container';
import { useEffect } from 'react';
import { getLastRace } from '../../../utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { addLastRace } from '../../../slices/scheduleSlice';
import Flag from '../../shared/Flag';
import LastRaceResult from '../NextRace/LastRaceResult';
import { IoMdEyeOff } from 'react-icons/io';
import { toggleLastRace } from '../../../slices/settingsSlice';
import SpoilerOverlay from './SpoilerOverlay';

const LastRace = () => {
  const lastRace = useSelector((store) => store.schedule.lastRace);
  const dispatch = useDispatch();

  useEffect(() => {
    getLastRace().then((data) => dispatch(addLastRace(data)));
  }, []);
  return (
    <Container>
      <p className='font-poppins text-lg text-bg-800 dark:text-bg-50 mb-4'>
        Last Race:
      </p>
      <div className='flex'>
        <Flag country={lastRace.countryCode} size='36' />
        <div className='flex flex-col font-openSans text-bg-800 dark:text-bg-50 ml-4'>
          <span className='font-semibold text-sm'>{lastRace.raceName}</span>
          <span className='text-xs'>{lastRace.circuitName}</span>
        </div>
      </div>
      <div>
        <div className='flex flex-col mt-4 gap-y-2 relative'>
          {lastRace?.results?.map((driver, index) => (
            <LastRaceResult key={index} data={driver} />
          ))}
          <SpoilerOverlay />
        </div>
      </div>
    </Container>
  );
};
export default LastRace;
