import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { SwitchTransition } from 'react-transition-group';
import Selector from '../shared/Selector/Selector';
import TeamStats from './TeamStats';

const TeamInfoToggle = ({ seasons, stats }) => {
  const activeButton = useSelector((store) => store.settings.selector.teamPage);

  return (
    <div className='col-span-4 sm:col-span-8 md:col-span-12'>
      <p className='font-poppins text-lg text-bg-800 dark:text-bg-50 -mb-2 md:-mb-4'>
        Stats:
      </p>
      <Selector options={['All', ...seasons]} type='teamPage' />
      <SwitchTransition mode='out-in'>
        <CSSTransition
          key={activeButton}
          classNames={{
            enterActive: 'animate__animated animate__fadeIn animate__faster',
            exitActive: 'animate__animated animate__fadeOut animate__faster',
          }}
          timeout={200}
        >
          <TeamStats
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
export default TeamInfoToggle;
