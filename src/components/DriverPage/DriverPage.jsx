import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { addDrivers, addDriverStats } from '../../slices/driversSlice';
import RaceTitle from '../RacePage/RaceTitle';
import DriverInfoToggle from './DriverInfoToggle';
import DriverBio from './DriverBio';
import useFetch from '../../utils/useFetch';
import { shapeDriverData } from '../../utils/api/shapeDriverData';
import { shapeDriverRaceStats } from '../../utils/api/shapeRaceStats';
import { setSelector } from '../../slices/settingsSlice';
import Error from '../shared/Error';
import LoadingSpinner from '../shared/LoadingSpinner';
import clsx from 'clsx';

const DriverPage = () => {
  const { driverId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const drivers = useSelector((store) => store.drivers);
  const driver = useSelector((store) =>
    store.drivers.find(
      (driver) => driver.id.trim() === driverId.replace(/-/gi, '_')
    )
  );

  const { response, error } = useFetch(
    'https://ergast.com/api/f1/current/drivers.json',
    [],
    shapeDriverData,
    driver
  );

  const { response: driverStats, error: driverError } = useFetch(
    `https://ergast.com/api/f1/drivers/${driverId.replace(
      /-/gi,
      '_'
    )}/results.json`,
    [],
    shapeDriverRaceStats,
    driver?.stats
  );

  useEffect(() => {
    dispatch(setSelector({ type: 'driverPage', index: 0 }));
  }, [dispatch]);

  useEffect(() => {
    if (!driver && response) {
      dispatch(addDrivers(response));
      setLoading(true);
    }
  }, [driver, dispatch, response]);

  useEffect(() => {
    if (driver && !driver.stats && driverStats) {
      dispatch(addDriverStats({ stats: driverStats, id: driver.id }));
      setLoading(false);
    } else if (driver?.stats) {
      setLoading(false);
    }
  }, [driver, dispatch, driverStats]);

  if (
    drivers.length > 0 &&
    !drivers.find((driver) => {
      return driver.id.trim() === driverId.replace(/-/gi, '_');
    })
  ) {
    return <Navigate to='/drivers' />;
  }

  return (
    <main
      className={clsx(
        'p-4 row-start-2 row-end-3',
        'sm:p-8',
        'md:p-6',
        'lg:px-[200px]',
        'xl:px-[calc((100vw-1128px)/2)]'
      )}
      data-testid='driver-page-container'
    >
      {(error || driverError) && <Error />}
      {loading ? (
        <div className='flex flex-row items-center justify-center w-full h-full'>
          <LoadingSpinner />
        </div>
      ) : (
        <div
          className={clsx(
            'grid w-full grid-cols-4 h-min p-4 rounded bg-bg-50 shadow-2px gap-x-4 gap-y-4 animate__animated animate__fadeIn',
            'dark:bg-bg-800 dark:shadow-2px-dark',
            'sm:grid-cols-8',
            'md:p-6 md:grid-cols-12 md:gap-x-6 md:gap-y-6'
          )}
        >
          <div
            className={clsx(
              'w-full col-span-4 overflow-hidden rounded aspect-16/9 shadow-2px',
              'dark:shadow-2px-dark',
              'sm:col-span-8',
              'md:col-span-12'
            )}
          >
            <img
              src={driver.image.big}
              alt={driver.name}
              className='w-full'
              data-testid='driver-image'
            />
          </div>
          <RaceTitle countryCode={driver.countryCode} name={driver.name} />
          <DriverBio driver={driver} />
          <DriverInfoToggle
            seasons={Object.keys(driver.stats.seasons).sort((a, b) => b - a)}
            stats={driver.stats}
          />
        </div>
      )}
    </main>
  );
};
export default DriverPage;
