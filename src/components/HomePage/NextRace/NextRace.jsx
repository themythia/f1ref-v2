import Container from '../Container';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNextRace } from '../../../utils/api';
import { addNextRace } from '../../../slices/scheduleSlice';
import Flag from '../../shared/Flag';
import Selector from '../../shared/Selector/Selector';
import Countdown from './Countdown';

const NextRace = () => {
  const nextRace = useSelector((store) => store.schedule.nextRace);
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState(0);

  useEffect(() => {
    getNextRace().then((data) => dispatch(addNextRace(data)));
  }, [dispatch]);

  return (
    <Container size='half'>
      <p className='font-poppins text-lg text-bg-800 dark:text-bg-50 mb-4'>
        Next Race:
      </p>
      <div className='flex'>
        <Flag country={nextRace.countryCode} size='36' />
        <div className='flex flex-col font-openSans text-bg-800 dark:text-bg-50 ml-4'>
          <span className='font-semibold text-sm'>{nextRace.raceName}</span>
          <span className='text-xs'>{nextRace.circuitName}</span>
        </div>
      </div>
      <Selector
        type='normalSession'
        active={activeButton}
        setActive={setActiveButton}
      />
      <Countdown time={nextRace.date + 'T' + nextRace.time} />
    </Container>
  );
};
export default NextRace;
