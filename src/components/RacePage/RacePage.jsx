import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRaceResults, getScheduleAndResults } from '../../utils/api';
import { addResults, addSchedule } from '../../slices/scheduleSlice';
import CircuitMap from '../shared/CircuitMap';
import Flag from '../shared/Flag';
import Selector from '../shared/Selector/Selector';
import RaceSchedule from './RaceSchedule';
import CircuitInfo from './CircuitInfo';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import 'animate.css';
import RaceResults from './RaceResults';
import RacePageToggle from './RacePageToggle';

const RacePage = () => {
  const { round } = useParams();
  const dispatch = useDispatch();
  const schedule = useSelector((store) => store.schedule.schedule);
  const race = useSelector((store) => store.schedule.schedule[round - 1]);
  console.log('race', race);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(schedule).length > 0 && !race.hasOwnProperty('results')) {
      getRaceResults(round)
        .then((results) => {
          dispatch(addResults({ round, results }));
          setLoading(false);
        })
        .catch((e) => console.log('failed fetch in useeffect', e));
    } else if (Object.keys(schedule).length === 0) {
      getScheduleAndResults(round)
        .then((data) => dispatch(addSchedule(data)))
        .then(() => setLoading(false));
    }
  }, [round, dispatch, race, schedule]);

  if (loading) return <p>Loading...</p>;

  return (
    <main className='p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] row-start-2 row-end-3'>
      <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 md:p-6 w-full h-min grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 md:gap-x-6'>
        <CircuitMap circuit={race.circuitId} />
        <div className='flex flex-row items-center mt-4 col-span-4 sm:col-span-8 sm:justify-center'>
          <Flag size='40' country={race.countryCode} />
          <span className='font-poppins text-xl ml-4 md:ml-6'>
            {race.raceName}
          </span>
        </div>
        <RacePageToggle race={race} />
      </div>
    </main>
  );
};
export default RacePage;
