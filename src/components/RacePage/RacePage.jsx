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

const RacePage = () => {
  const { round } = useParams();
  const dispatch = useDispatch();
  const schedule = useSelector((store) => store.schedule.schedule);
  const race = useSelector((store) => store.schedule.schedule[round - 1]);
  console.log('race', race);
  const [activeButton, setActiveButton] = useState(0);

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

  if (!race) return <p>Loading...</p>;

  return (
    <main className='p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 md:gap-x-6 row-start-2 row-end-3'>
      <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 md:p-6 w-full col-span-full flex flex-col h-min'>
        <CircuitMap circuit={race.circuitId} />
        <div className='flex flex-row items-center mt-4'>
          <Flag size='40' country={race.countryCode} />
          <span className='font-poppins text-xl ml-4 md:ml-6'>
            {race.raceName}
          </span>
        </div>
        <Selector
          type={race.results.length === 0 ? 'race' : 'afterRace'}
          active={activeButton}
          setActive={setActiveButton}
        />
        <SwitchTransition mode='out-in'>
          <CSSTransition
            key={activeButton}
            classNames={{
              enterActive: 'animate__animated animate__fadeIn animate__faster',
              exitActive: 'animate__animated animate__fadeOut animate__faster',
            }}
            timeout={200}
          >
            <div>
              {race.results.length === 0 && activeButton === 0 ? (
                <RaceSchedule circuitId={race.circuitId} />
              ) : null}
              {race.results.length === 0 && activeButton === 1 ? (
                <CircuitInfo race={race} />
              ) : null}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </main>
  );
};
export default RacePage;
