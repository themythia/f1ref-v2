import Container from '../Container';
import { useEffect, useState } from 'react';
import { addStandings } from '../../../slices/standingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getStandings } from '../../../utils/api';
import StandingsItem from './StandingsItem';
import Selector from '../../shared/Selector/Selector';
import 'animate.css';
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from 'react-transition-group';

const Standings = (props) => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState(0);
  const standings = useSelector((store) =>
    activeButton === 0 ? store.standings.drivers : store.standings.constructors
  );

  useEffect(() => {
    getStandings().then((data) => dispatch(addStandings(data)));
  }, [dispatch]);

  return (
    <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 lg:p-6 w-full col-span-full'>
      <p className='font-poppins text-lg text-bg-800 dark:text-bg-50 md:mb-2'>
        Standings:
      </p>
      <Selector
        options={['Drivers', 'Constructors']}
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
          <div className='flex flex-col gap-y-2'>
            {standings.map((driver, index) => (
              <StandingsItem key={index} data={driver} />
            ))}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};
export default Standings;
