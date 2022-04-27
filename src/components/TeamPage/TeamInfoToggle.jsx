import { useSelector } from 'react-redux';
import Selector from '../shared/Selector/Selector';
import SwitchTransitionWrapper from '../shared/SwitchTransitionWrapper';
import TeamStats from './TeamStats';

const TeamInfoToggle = ({ seasons, stats }) => {
  const activeButton = useSelector((store) => store.settings.selector.teamPage);

  return (
    <div className='col-span-4 sm:col-span-8 md:col-span-12'>
      <p className='font-poppins text-lg text-bg-800 dark:text-bg-50 -mb-2 md:-mb-3'>
        Stats:
      </p>
      <Selector options={['All', ...seasons]} type='teamPage' />
      <SwitchTransitionWrapper state={activeButton}>
        <TeamStats
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
export default TeamInfoToggle;
