import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDrivers } from '../../slices/driversSlice';
import { shapeDriverData } from '../../utils/api/shapeDriverData';
import useFetch from '../../utils/useFetch';
import DriverItem from './DriverItem';
import DriverItemSkeleton from './DriverItemSkeleton';

const DriversPage = () => {
  // const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const drivers = useSelector((store) => store.drivers);

  const { loading, status, response, error } = useFetch(
    'https://ergast.com/api/f1/current/drivers.json',
    [],
    shapeDriverData,
    drivers.length > 0
  );

  useEffect(() => {
    if (response) dispatch(addDrivers(response));
  }, [dispatch, response]);

  const range = (min, max) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <main className='p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 md:gap-x-6 gap-y-4 md:gap-y-6 row-start-2 row-end-3 auto-rows-min'>
      {!loading &&
        drivers.map((driver, index) => (
          <DriverItem key={index} driver={driver} />
        ))}
      {loading && range(0, 20).map((item) => <DriverItemSkeleton key={item} />)}
    </main>
  );
};
export default DriversPage;
