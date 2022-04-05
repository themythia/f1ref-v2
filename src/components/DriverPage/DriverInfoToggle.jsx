import { useSelector } from 'react-redux';
import Selector from '../shared/Selector/Selector';
import SwitchTransitionWrapper from '../shared/SwitchTransitionWrapper';
import DriverStats from './DriverStats';

const DriverInfoToggle = ({ seasons, stats }) => {
  const activeButton = useSelector(
    (store) => store.settings.selector.driverPage
  );

  return (
    <div className='col-span-4 sm:col-span-8 md:col-span-12'>
      <p className='font-poppins text-lg text-bg-800 dark:text-bg-50 -mb-2 md:-mb-4'>
        Stats:
      </p>
      <Selector options={['Career', ...seasons]} type='driverPage' />
      <SwitchTransitionWrapper state={activeButton}>
        <DriverStats
          season={
            activeButton === 0
              ? stats.career
              : stats.seasons[seasons[activeButton - 1]]
          }
          showChamp={activeButton === 0}
        />
      </SwitchTransitionWrapper>
    </div>
  );
};
export default DriverInfoToggle;
