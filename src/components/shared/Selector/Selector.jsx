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
  };

  return (
    <div className='flex gap-x-2 justify-center my-4'>
      {labels[props.type].map((session, index) => (
        <SelectorButton
          key={index}
          text={session}
          active={activeButton === index}
          setActive={setActiveButton}
          index={index}
        />
      ))}
    </div>
  );
};
export default Selector;
