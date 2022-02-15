import { useEffect } from 'react';
import { getLastRace } from '../../../utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { addLastRace } from '../../../slices/scheduleSlice';
import Flag from '../../shared/Flag';
import LastRaceResult from './LastRaceResult';
import SpoilerOverlay from './SpoilerOverlay';

const LastRace = () => {
  const lastRace = useSelector((store) => store.schedule.lastRace);
  const dispatch = useDispatch();
  const hideLastRace = useSelector((store) => store.settings.hideLastRace);

  useEffect(() => {
    getLastRace().then((data) => dispatch(addLastRace(data)));
  }, [dispatch]);

  return (
    <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 md:p-6 w-full col-span-full sm:col-span-4 md:col-span-6 mb-4 md:mb-6'>
      <p className='font-poppins text-lg text-bg-800 dark:text-bg-50 mb-4 md:mb-6'>
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
        <div className='flex flex-col mt-4 md:mt-6 gap-y-2 md:gap-y-3 relative'>
          <div
            className={`flex flex-col gap-y-2 md:gap-y-3 relative ${
              hideLastRace && 'blur-md'
            }`}
          >
            {lastRace?.results?.map((driver, index) => (
              <LastRaceResult key={index} data={driver} />
            ))}
          </div>
          <SpoilerOverlay />
        </div>
      </div>
    </div>
  );
};
export default LastRace;
