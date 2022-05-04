import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addDrivers, addDriverStats } from '../../slices/driversSlice';
import RaceTitle from '../RacePage/RaceTitle';
import DriverInfoToggle from './DriverInfoToggle';
import hulkenbergPic from '../../assets/driverPics/hulkenberg.webp';
import DriverBio from './DriverBio';
import useFetch from '../../utils/useFetch';
import { shapeDriverData } from '../../utils/api/shapeDriverData';
import { shapeDriverRaceStats } from '../../utils/api/shapeRaceStats';
import { setSelector } from '../../slices/settingsSlice';
import Error from '../shared/Error';
import LoadingSpinner from '../shared/LoadingSpinner';

const DriverPage = () => {
  const { driverId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const driver = useSelector((store) =>
    store.drivers.find((driver) => driver.id === driverId.replace(/-/gi, '_'))
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

  return (
    <main className='p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] row-start-2 row-end-3 '>
      {(error || driverError) && <Error />}
      {loading ? (
        <div className='h-full w-full flex flex-row justify-center items-center'>
          <LoadingSpinner />
        </div>
      ) : (
        <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px dark:shadow-2px-dark p-4 md:p-6 w-full h-min grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 gap-y-4 md:gap-x-6 md:gap-y-6 animate__animated animate__fadeIn'>
          <div className='w-full col-span-4 sm:col-span-8 md:col-span-12 aspect-16/9 overflow-hidden rounded shadow-2px dark:shadow-2px-dark'>
            <img
              src={
                driver.id === 'hulkenberg' ? hulkenbergPic : driver.image.big
              }
              alt={driver.name}
              className='w-full'
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
