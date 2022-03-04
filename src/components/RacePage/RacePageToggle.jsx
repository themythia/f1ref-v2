import { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Selector from '../shared/Selector/Selector';
import CircuitInfo from './CircuitInfo';
import RaceResults from './RaceResults';
import RaceSchedule from './RaceSchedule';

const RacePageToggle = ({ race }) => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className='col-span-4 sm:col-span-8'>
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
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};
export default RacePageToggle;
