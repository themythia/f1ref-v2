import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSchedule } from '../../slices/scheduleSlice';
import CalendarItem from './CalendarItem';
import CalendarItemSkeleton from './CalendarItemSkeleton';
import useFetch from '../../utils/useFetch';
import { shapeScheduleData } from '../../utils/api/shapeScheduleData';
import Error from '../shared/Error';
import clsx from 'clsx';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const calendar = useSelector((store) => store.schedule.schedule);
  const range = (min, max) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i);

  const { loading, response, error } = useFetch(
    'https://ergast.com/api/f1/current.json',
    [],
    shapeScheduleData,
    calendar.length > 0 ? true : false
  );

  useEffect(() => {
    if (response) dispatch(addSchedule(response));
  }, [dispatch, response]);

  return (
    <main
      className={clsx(
        'p-4 grid grid-cols-4 gap-x-4 gap-y-4 row-start-2 row-end-3 animate__animated animate__fadeIn',
        'sm:p-8 sm:grid-cols-8',
        'md:p-6 md:grid-cols-12 md:gap-x-6 md:gap-y-6',
        'lg:px-[200px]',
        'xl:px-[calc((100vw-1128px)/2)]'
      )}
    >
      {error && <Error />}
      {!loading &&
        calendar.map((race, index) => <CalendarItem key={index} race={race} />)}
      {loading &&
        range(0, 22).map((item, index) => <CalendarItemSkeleton key={index} />)}
    </main>
  );
};
export default CalendarPage;
