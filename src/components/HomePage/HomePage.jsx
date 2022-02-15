import LastRace from './LastRace/LastRace';
import News from './News/News';
import NextRace from './NextRace/NextRace';
import Standings from './Standings/Standings';

const HomePage = () => {
  return (
    <main className='mt-14 p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 md:gap-x-6'>
      <News />
      <NextRace />
      <LastRace />
      <Standings />
    </main>
  );
};
export default HomePage;
