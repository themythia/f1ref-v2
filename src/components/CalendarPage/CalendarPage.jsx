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
    if (Object.keys(calendar).length === 0) {
      getSchedule().then((data) => {
        dispatch(addSchedule(data));
        setLoading(false);
      });
    } else setLoading(false);
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <main className='p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 md:gap-x-6 gap-y-4 md:gap-y-6 row-start-2 row-end-3'>
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
