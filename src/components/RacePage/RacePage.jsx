import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRaceResults, getScheduleAndResults } from '../../utils/api';
import { addResults, addSchedule } from '../../slices/scheduleSlice';
import CircuitMap from '../shared/CircuitMap';
import RaceSchedule from './RaceSchedule';
import CircuitInfo from './CircuitInfo';
import 'animate.css';
import RaceResults from './RaceResults';
import RacePageToggle from './RacePageToggle';
import useWindowSize from '../../utils/useWindowSize';
import RaceTitle from './RaceTitle';

const RacePage = () => {
  const { round } = useParams();
  const dispatch = useDispatch();
  const schedule = useSelector((store) => store.schedule.schedule);
  const race = useSelector((store) => store.schedule.schedule[round - 1]);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    if (Object.keys(schedule).length > 0 && !race.hasOwnProperty('results')) {
      getRaceResults(round)
        .then((results) => {
          dispatch(addResults({ round, results }));
        })
        .then(() => setLoading(false))
        .catch((e) => console.warn('failed fetch in useeffect', e));
    } else if (Object.keys(schedule).length === 0) {
      getScheduleAndResults(round)
        .then((data) => dispatch(addSchedule(data)))
        .then(() => setLoading(false));
    } else if (race.hasOwnProperty('results')) {
      setLoading(false);
    }
  }, [round, dispatch, race, schedule]);

  if (loading) return <p>Loading...</p>;

  return (
    <main className='p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] row-start-2 row-end-3'>
      <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 md:p-6 w-full h-min grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 md:gap-x-6 md:gap-y-6'>
        <CircuitMap circuit={race.circuitId} />
        <RaceTitle countryCode={race.countryCode} name={race.raceName} />
        {width < 905 && <RacePageToggle race={race} />}
        {width >= 905 && (
          <React.Fragment>
            <CircuitInfo race={race} />
            <RaceSchedule circuitId={race.circuitId} />
            {race.results.length > 0 && <RaceResults results={race.results} />}
          </React.Fragment>
        )}
      </div>
    </main>
  );
};
export default RacePage;
