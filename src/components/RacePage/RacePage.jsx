import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
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
import clsx from 'clsx';

const RacePage = () => {
  const { round } = useParams();
  const dispatch = useDispatch();
  const schedule = useSelector((store) => store.schedule.schedule);
  const race = useSelector((store) => store.schedule.schedule[round - 1]);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowSize();

  const { response: resultsRes, error: resultsError } = useFetch(
    `https://ergast.com/api/f1/current/${round}/results.json`,
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
    `https://ergast.com/api/f1/current/${round}/sprint.json`,
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

  if (Number(round) < 0 || Number(round) > 24 || isNaN(Number(round))) {
    return <Navigate to='/calendar' />;
  }

  return (
    <main
      className={clsx(
        'p-4 row-start-2 row-end-3',
        'sm:p-8',
        'md:p-6',
        'lg:px-[200px]',
        'xl:px-[calc((100vw-1128px)/2)]'
      )}
    >
      {(resultsError || scheduleError || sprintError) && <Error />}
      {loading ? (
        <div className='flex flex-row items-center justify-center w-full h-full'>
          <LoadingSpinner />
        </div>
      ) : (
        <div
          className={clsx(
            'grid w-full grid-cols-4 p-4 rounded bg-bg-50 shadow-2px h-min gap-x-4 gap-y-4 animate__animated animate__fadeIn',
            'dark:bg-bg-800 dark:shadow-2px-dark',
            'sm:grid-cols-8',
            'md:p-6 md:grid-cols-12 md:gap-x-6 md:gap-y-6'
          )}
        >
          <CircuitMap circuit={race.circuitId} />
          <RaceTitle countryCode={race.countryCode} name={race.raceName} />
          {width < 905 && <RacePageToggle race={race} resultsOnly={false} />}
          {width >= 905 && (
            <>
              <CircuitInfo race={race} />
              <RaceSchedule schedule={race.schedule} />
              {(race.results.length > 0 || race.sprintResults.length > 0) && (
                <div className='md:col-span-12'>
                  <span className='hidden text-lg md:block font-poppins text-bg-800 dark:text-bg-50'>
                    {race.results.length === 0
                      ? 'Sprint Results:'
                      : race.sprintResults.length === 0
                      ? 'Race Results:'
                      : 'Results:'}
                  </span>
                  <RacePageToggle race={race} resultsOnly={true} />
                </div>
              )}
            </>
          )}
        </div>
      )}
    </main>
  );
};
export default RacePage;
