import SelectorButton from './SelectorButton';
import { useState } from 'react';

const Selector = (props) => {
  const [activeButton, setActiveButton] = useState(0);

  const labels = {
    normalSession: ['FP1', 'FP2', 'FP3', 'Quali', 'Race'],
    sprintSession: ['FP1', 'Quali', 'FP2', 'Sprint', 'Race'],
    race: ['Schedule', 'Circuit'],
    afterRace: ['Circuit', 'Results'],
    driver: ['Achievements', 'Stats'],
    standings: ['Drivers', 'Constructors'],
  };

  return (
    <div className='flex gap-x-2 justify-center my-4'>
      {labels[props.type].map((session, index) => (
        <SelectorButton
          key={index}
          text={session}
          active={props.active === index}
          setActive={props.setActive}
          index={index}
        />
      ))}
    </div>
  );
};
export default Selector;
