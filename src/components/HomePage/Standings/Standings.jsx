import Container from '../Container';
import { useEffect, useState } from 'react';
import { addStandings } from '../../../slices/standingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getStandings } from '../../../utils/api';
import StandingsItem from './StandingsItem';
import Selector from '../../shared/Selector/Selector';

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
    <Container>
      <p className='font-poppins text-lg text-bg-800 dark:text-bg-50 mb-4'>
        Standings:
      </p>
      <Selector
        type='standings'
        active={activeButton}
        setActive={setActiveButton}
      />
      <div className='flex flex-col gap-y-2'>
        {standings.map((driver, index) => (
          <StandingsItem key={index} data={driver} />
        ))}
      </div>
    </Container>
  );
};
export default Standings;
