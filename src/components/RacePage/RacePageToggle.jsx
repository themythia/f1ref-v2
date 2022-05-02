import { useSelector } from 'react-redux';
import Selector from '../shared/Selector/Selector';
import SwitchTransitionWrapper from '../shared/SwitchTransitionWrapper';
import CircuitInfo from './CircuitInfo';
import RaceResults from './RaceResults';
import RaceSchedule from './RaceSchedule';

const RacePageToggle = ({ race }) => {
  const activeButton = useSelector((store) => store.settings.selector.racePage);

  const selectorOptions =
    race.results.length === 0
      ? ['Schedule', 'Circuit']
      : race.results.length > 0 && race?.sprintResults?.length > 0
      ? ['Circuit', 'Sprint', 'Results']
      : ['Circuit', 'Results'];

  return (
    <div className='col-span-4 sm:col-span-8 -mt-4'>
      <Selector options={selectorOptions} type='racePage' />
      <SwitchTransitionWrapper state={activeButton}>
        <div>
          {race.results.length === 0 &&
            (activeButton === 0 ? (
              <RaceSchedule schedule={race.schedule} />
            ) : (
              <CircuitInfo race={race} />
            ))}
          {race.results.length > 0 &&
            (race?.sprintResults?.length > 0 ? (
              activeButton === 0 ? (
                <CircuitInfo race={race} />
              ) : activeButton === 1 ? (
                <RaceResults results={race.sprintResults} />
              ) : activeButton === 2 ? (
                <RaceResults results={race.results} />
              ) : null
            ) : activeButton === 0 ? (
              <CircuitInfo race={race} />
            ) : activeButton === 1 ? (
              <RaceResults results={race.results} />
            ) : null)}
        </div>
      </SwitchTransitionWrapper>
    </div>
  );
};
export default RacePageToggle;
