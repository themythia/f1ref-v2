import { useState } from 'react';
import Selector from '../shared/Selector/Selector';

const DriverInfoToggle = ({ seasons }) => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className='col-span-4 sm:col-span-8'>
      <Selector
        options={['Achievements', ...seasons]}
        active={activeButton}
        setActive={setActiveButton}
      />
    </div>
  );
};
export default DriverInfoToggle;
