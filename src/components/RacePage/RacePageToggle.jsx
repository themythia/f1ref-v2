import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Selector from '../shared/Selector/Selector';
import SwitchTransitionWrapper from '../shared/SwitchTransitionWrapper';
import CircuitInfo from './CircuitInfo';
import RaceResults from './RaceResults';
import RaceSchedule from './RaceSchedule';

const RacePageToggle = ({ race, resultsOnly }) => {
  const activeButton = useSelector((store) => store.settings.selector.racePage);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // check type
    if (resultsOnly) {
      // check if its sprint weekend
      if (race.schedule.sprint) {
        // check if sprint results available
        if (race.sprintResults.length > 0) setOptions(['Sprint']);
        // check if race results available
        if (race.results.length > 0) setOptions(['Sprint', 'Race']);
      } else {
        if (race.results.length > 0) setOptions(['Race']);
      }
    } else {
      setOptions(['Schedule', 'Circuit']);
      if (race.schedule.sprint) {
        if (race.sprintResults.length > 0)
          setOptions(['Schedule', 'Circuit', 'Sprint']);
        if (race.results.length > 0) setOptions(['Circuit', 'Sprint', 'Race']);
      } else {
        if (race.results.length > 0) setOptions(['Circuit', 'Race']);
      }
    }
  }, [
    race.results.length,
    race.schedule.sprint,
    race.sprintResults.length,
    resultsOnly,
  ]);

  return (
    <div
      className={clsx('col-span-4 -mt-4', 'sm:col-span-8', 'md:col-span-12', {
        'md:-mt-3': options.length > 1,
        'md:mt-3': options.length <= 1,
      })}
    >
      {options.length > 1 && <Selector options={options} type='racePage' />}
      <SwitchTransitionWrapper state={activeButton}>
        <div>
          {options[activeButton] === 'Sprint' ? (
            <RaceResults results={race.sprintResults} type='sprint' />
          ) : options[activeButton] === 'Race' ? (
            <RaceResults results={race.results} type='race' />
          ) : options[activeButton] === 'Schedule' ? (
            <RaceSchedule schedule={race.schedule} />
          ) : options[activeButton] === 'Circuit' ? (
            <CircuitInfo race={race} />
          ) : null}
        </div>
      </SwitchTransitionWrapper>
    </div>
  );
};
export default RacePageToggle;
