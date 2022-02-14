import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDrivers } from '../../slices/driversSlice';
import { getDrivers } from '../../utils/api';
import DriverItem from './DriverItem';
import DriverItemSkeleton from './DriverItemSkeleton';

const DriversPage = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const drivers = useSelector((store) => store.drivers);

  useEffect(() => {
    getDrivers().then((data) => {
      dispatch(addDrivers(data));
      setLoading(false);
    });
  }, [dispatch]);
  console.log('drivers state:', drivers);

  const range = (min, max) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <main className='mt-14 p-4 md:p-8 lg:px-48 lg:py-6 flex flex-col md:flex-row md:flex-wrap gap-x-4 gap-y-4 lg:gap-x-6 lg:gap-y-6'>
      {!loading &&
        drivers.map((driver, index) => (
          <DriverItem key={index} driver={driver} />
        ))}
      {loading && range(0, 20).map((item) => <DriverItemSkeleton key={item} />)}
    </main>
  );
};
export default DriversPage;
