import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { SwitchTransition } from 'react-transition-group';
import Selector from '../shared/Selector/Selector';
import DriverStats from './DriverStats';

const DriverInfoToggle = ({ seasons, stats }) => {
  const activeButton = useSelector(
    (store) => store.settings.selector.driverPage
  );
  console.log('seasons', seasons);
  console.log('stats', stats);

  return (
    <div className='col-span-4 sm:col-span-8 md:col-span-12'>
      <Selector options={['Career', ...seasons]} type='driverPage' />
      <SwitchTransition mode='out-in'>
        <CSSTransition
          key={activeButton}
          classNames={{
            enterActive: 'animate__animated animate__fadeIn animate__faster',
            exitActive: 'animate__animated animate__fadeOut animate__faster',
          }}
          timeout={200}
        >
          <DriverStats
            season={
              activeButton === 0
                ? stats.career
                : stats.seasons[seasons[activeButton - 1]]
            }
            showChamp={activeButton === 0}
          />
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};
export default DriverInfoToggle;
