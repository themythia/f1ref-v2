import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRaceResults, getScheduleAndResults } from '../../utils/api';
import { addResults, addSchedule } from '../../slices/scheduleSlice';
import CircuitMap from '../shared/CircuitMap';
import Flag from '../shared/Flag';
import Selector from '../shared/Selector/Selector';

const RacePage = () => {
  const { round } = useParams();
  const dispatch = useDispatch();
  const schedule = useSelector((store) => store.schedule.schedule);
  const race = useSelector((store) => store.schedule.schedule[round - 1]);
  console.log('race', race);

  useEffect(() => {
    if (Object.keys(schedule).length > 0 && !race.hasOwnProperty('results')) {
      getRaceResults(round)
        .then((results) => {
          dispatch(addResults({ round, results }));
        })
        .catch((e) => console.log('failed fetch in useeffect', e));
    } else if (Object.keys(schedule).length === 0) {
      getScheduleAndResults(round).then((data) => dispatch(addSchedule(data)));
    }
  }, [round, dispatch, race, schedule]);

  if (Object.keys(schedule).length === 0) return <p>Loading...</p>;

  return (
    <main className='mt-14 p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 md:gap-x-6'>
      <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 md:p-6 w-full col-span-full flex flex-col gap-y-4'>
        <CircuitMap circuit={race.circuitId} />
        <div className='flex flex-row items-center'>
          <Flag size='40' country={race.countryCode} />
          <span className='font-poppins text-xl ml-4 md:ml-6'>
            {race.raceName}
          </span>
        </div>
        {/* <Selector type='' /> */}
      </div>
    </main>
  );
};
export default RacePage;
