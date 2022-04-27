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
      : ['Circuit', 'Results'];

  return (
    <div className='col-span-4 sm:col-span-8 -mt-4'>
      <Selector options={selectorOptions} type='racePage' />
      <SwitchTransitionWrapper state={activeButton}>
        <div>
          {/* if pre-race and selector button is schedule */}
          {race.results.length === 0 && activeButton === 0 ? (
            <RaceSchedule circuitId={race.circuitId} />
          ) : null}
          {/* if pre-race and selector button is circuit info OR if post-race and selector button is circuit info */}
          {(race.results.length === 0 && activeButton === 1) ||
          (race.results.length > 0 && activeButton === 0) ? (
            <CircuitInfo race={race} />
          ) : null}
          {/* if post-race and selector button is race results */}
          {race.results.length > 0 && activeButton === 1 ? (
            <RaceResults results={race.results} />
          ) : null}
        </div>
      </SwitchTransitionWrapper>
    </div>
  );
};
export default RacePageToggle;
