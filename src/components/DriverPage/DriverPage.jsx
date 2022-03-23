import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addDrivers, addDriverStats } from '../../slices/driversSlice';
import { getDriverRaceStats, getDrivers } from '../../utils/api';
import RaceTitle from '../RacePage/RaceTitle';
import DriverInfoToggle from './DriverInfoToggle';
import hulkenbergPic from '../../assets/driverPics/hulkenberg.webp';

const DriverPage = () => {
  const { driverId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const driver = useSelector((store) =>
    store.drivers.find((driver) => driver.id === driverId.replace(/-/gi, '_'))
  );

  console.log('driver:', driver);

  useEffect(() => {
    if (!driver) {
      getDrivers()
        .then((data) => dispatch(addDrivers(data)))
        .catch(() => setLoading(true));
    }
  }, [driver, dispatch]);

  useEffect(() => {
    if (driver && !driver.stats) {
      getDriverRaceStats(driver.id)
        .then((data) => {
          dispatch(addDriverStats({ stats: data, id: driver.id }));
        })
        .then(() => setLoading(false));
    } else if (driver?.stats) {
      setLoading(false);
    }
  }, [driver, dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <main className='p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] row-start-2 row-end-3'>
      <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 md:p-6 w-full h-min grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 md:gap-x-6 md:gap-y-6'>
        <div className='w-full col-span-4 sm:col-span-8 md:col-span-12 aspect-16/9 overflow-hidden rounded shadow-2px'>
          <img
            src={driver.id === 'hulkenberg' ? hulkenbergPic : driver.image.big}
            alt={driver.name}
            className='w-full'
            loading='lazy'
          />
        </div>
        <RaceTitle countryCode={driver.countryCode} name={driver.name} />
        <DriverInfoToggle
          seasons={Object.keys(driver.stats.seasons).sort((a, b) => b - a)}
          stats={driver.stats}
        />
      </div>
    </main>
  );
};
export default DriverPage;
