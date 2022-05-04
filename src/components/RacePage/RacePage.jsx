import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addResults,
  addSchedule,
  addSprintResults,
} from '../../slices/scheduleSlice';
import CircuitMap from '../shared/CircuitMap';
import RaceSchedule from './RaceSchedule';
import CircuitInfo from './CircuitInfo';
import 'animate.css';
import RacePageToggle from './RacePageToggle';
import useWindowSize from '../../utils/useWindowSize';
import RaceTitle from './RaceTitle';
import useFetch from '../../utils/useFetch';
import { shapeRaceResults } from '../../utils/api/shapeRaceResults';
import { shapeScheduleData } from '../../utils/api/shapeScheduleData';
import Error from '../shared/Error';
import LoadingSpinner from '../shared/LoadingSpinner';
import { setSelector } from '../../slices/settingsSlice';

const RacePage = () => {
  const { round } = useParams();
  const dispatch = useDispatch();
  const schedule = useSelector((store) => store.schedule.schedule);
  const race = useSelector((store) => store.schedule.schedule[round - 1]);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowSize();

  const { response: resultsRes, error: resultsError } = useFetch(
    `https://ergast.com/api/f1/2022/${round}/results.json`,
    [],
    shapeRaceResults,
    race?.hasOwnProperty('results')
  );

  const { response: scheduleRes, error: scheduleError } = useFetch(
    'https://ergast.com/api/f1/current.json',
    [],
    shapeScheduleData,
    schedule.length > 0
  );

  const { response: sprintRes, error: sprintError } = useFetch(
    `https://ergast.com/api/f1/2022/${round}/sprint.json`,
    [],
    shapeRaceResults,
    race?.hasOwnProperty('sprint')
  );

  useEffect(() => {
    dispatch(setSelector({ type: 'racePage', index: 0 }));
  }, [dispatch]);

  useEffect(() => {
    // if schedule data already fetched
    if (Object.keys(schedule).length > 0) {
      // race results not dispatched to state, but result data fetched & ready
      if (!race.hasOwnProperty('results') && resultsRes)
        dispatch(addResults({ round, results: resultsRes }));
      // sprint results not dispatched to state, but result data fetched & ready
      if (!race.hasOwnProperty('sprintResults') && sprintRes)
        dispatch(addSprintResults({ round, results: sprintRes }));
    }
    // if schedule data not fetched yet
    else if (Object.keys(schedule).length === 0) {
      if (scheduleRes && resultsRes && sprintRes)
        dispatch(
          addSchedule(
            scheduleRes.map((race, index) =>
              index === round - 1
                ? { ...race, results: resultsRes, sprintResults: sprintRes }
                : race
            )
          )
        );
    }

    // if sprint & race results data already dispatched
    if (race?.results && race?.sprintResults) {
      setLoading(false);
    }
  }, [round, dispatch, race, schedule, resultsRes, scheduleRes, sprintRes]);

  return (
    <main className='p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] row-start-2 row-end-3'>
      {(resultsError || scheduleError || sprintError) && <Error />}
      {loading ? (
        <div className='h-full w-full flex flex-row justify-center items-center'>
          <LoadingSpinner />
        </div>
      ) : (
        <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px dark:shadow-2px-dark p-4 md:p-6 w-full h-min grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 gap-y-4 md:gap-x-6 md:gap-y-6 animate__animated animate__fadeIn'>
          <CircuitMap circuit={race.circuitId} />
          <RaceTitle countryCode={race.countryCode} name={race.raceName} />
          {width < 905 && <RacePageToggle race={race} resultsOnly={false} />}
          {width >= 905 && (
            <React.Fragment>
              <CircuitInfo race={race} />
              <RaceSchedule schedule={race.schedule} />
              {(race.results.length > 0 || race.sprintResults.length > 0) && (
                <div className='md:col-span-12'>
                  <span className='hidden md:block font-poppins text-lg text-bg-800 dark:text-bg-50'>
                    {race.results.length === 0
                      ? 'Sprint Results:'
                      : race.sprintResults.length === 0
                      ? 'Race Results:'
                      : 'Results:'}
                  </span>
                  <RacePageToggle race={race} resultsOnly={true} />
                </div>
              )}
            </React.Fragment>
          )}
        </div>
      )}
    </main>
  );
};
export default RacePage;
