import clsx from 'clsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDrivers } from '../../slices/driversSlice';
import { shapeDriverData } from '../../utils/api/shapeDriverData';
import useFetch from '../../utils/useFetch';
import Error from '../shared/Error';
import DriverItem from './DriverItem';
import DriverItemSkeleton from './DriverItemSkeleton';

const DriversPage = () => {
  // const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const drivers = useSelector((store) => store.drivers);

  const { loading, response, error } = useFetch(
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
    <main
      className={clsx(
        'p-4 grid grid-cols-4 gap-x-4 gap-y-4 row-start-2 row-end-3 auto-rows-min animate__animated animate__fadeIn',
        'sm:p-8 sm:grid-cols-8',
        'md:p-6 md:grid-cols-12 md:gap-x-6 md:gap-y-6',
        'lg:px-[200px]',
        'xl:px-[calc((100vw-1128px)/2)]'
      )}
      data-testid='drivers-page-container'
    >
      {error && <Error />}
      {!loading &&
        drivers.map((driver, index) => (
          <DriverItem key={index} driver={driver} />
        ))}
      {loading && range(0, 20).map((item) => <DriverItemSkeleton key={item} />)}
    </main>
  );
};
export default DriversPage;
