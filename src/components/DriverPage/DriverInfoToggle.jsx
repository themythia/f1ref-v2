import { useSelector } from 'react-redux';
import Selector from '../shared/Selector/Selector';

const DriverInfoToggle = ({ seasons }) => {
  const activeButton = useSelector(
    (store) => store.settings.selector.driverPage
  );

  return (
    <div className='col-span-4 sm:col-span-8'>
      <Selector options={['Achievements', ...seasons]} type='driverPage' />
    </div>
  );
};
export default DriverInfoToggle;
