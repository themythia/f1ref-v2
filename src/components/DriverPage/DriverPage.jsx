import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import driverPics from '../../utils/driverPics';

const DriverPage = () => {
  const { driverId } = useParams();
  const driver = useSelector((store) =>
    store.drivers.find((driver) => driver.id === driverId.replace(/-/gi, '_'))
  );
  console.log('driver:', driver);

  return (
    <main className='p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] row-start-2 row-end-3'>
      <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 md:p-6 w-full h-min grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 md:gap-x-6 md:gap-y-6'>
        <img src={driver.image} alt='' />
      </div>
    </main>
  );
};
export default DriverPage;
