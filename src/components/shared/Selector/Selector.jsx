import SelectorButton from './SelectorButton';
import { useState } from 'react';

const Selector = () => {
  const [activeButton, setActiveButton] = useState(0);

  const dataSet = {
    sessionSelector: ['FP1', 'FP2', 'FP3', 'Quali', 'Race'],
    sprintSessionSelector: ['FP1', 'Quali', 'FP2', 'Sprint', 'Race'],
  };
  return (
    <div className='flex gap-x-2 justify-center my-4'>
      {dataSet.sessionSelector.map((session, index) => (
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
