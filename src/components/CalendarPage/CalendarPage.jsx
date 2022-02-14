import { useEffect, useState } from 'react';
import { getSchedule } from '../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { addSchedule } from '../../slices/scheduleSlice';
import CalendarItem from './CalendarItem';
import CalendarItemSkeleton from './CalendarItemSkeleton';
import { useNavigate } from 'react-router-dom';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const calendar = useSelector((store) => store.schedule.schedule);
  const [loading, setLoading] = useState(true);
  const range = (min, max) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i);

  useEffect(() => {
    getSchedule().then((data) => {
      dispatch(addSchedule(data));
      setLoading(false);
    });
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <main className='mt-14 p-4 md:p-8 lg:px-48 lg:py-6 flex flex-col md:flex-row md:flex-wrap md:gap-x-4 gap-y-4'>
      {!loading &&
        calendar.map((race, index) => (
          <CalendarItem
            key={index}
            race={race}
            onClick={() => navigate(`/calendar/${race.round}`)}
          />
        ))}
      {loading &&
        range(0, 22).map((item, index) => <CalendarItemSkeleton key={index} />)}
    </main>
  );
};
export default CalendarPage;
