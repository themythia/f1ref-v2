import LastRace from './LastRace/LastRace';
import News from './News/News';
import NextRace from './NextRace/NextRace';
import Standings from './Standings/Standings';

const HomePage = () => {
  return (
    <div className='mt-14 p-4 md:p-8 lg:px-48 lg:py-6  flex flex-col gap-y-4'>
      <News />
      <div className='flex flex-col gap-y-4 md:flex md:flex-row md:gap-x-4'>
        <NextRace />
        <LastRace />
      </div>
      <Standings />
    </div>
  );
};
export default HomePage;
