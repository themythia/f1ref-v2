import { useParams } from 'react-router-dom';

const RacePage = () => {
  const { round } = useParams();
  return (
    <main className='mt-14 p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 md:gap-x-6'>
      <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 md:p-6 w-full col-span-full'></div>
    </main>
  );
};
export default RacePage;
