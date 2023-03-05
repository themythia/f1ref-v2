import clsx from 'clsx';
import LastRace from './LastRace/LastRace';
import News from './News/News';
import NextRace from './NextRace/NextRace';
import Standings from './Standings/Standings';

const HomePage = () => {
  return (
    <main
      className={clsx(
        'p-4 grid grid-cols-4 gap-x-4 row-start-2 row-end-3 animate__animated animate__fadeIn',
        'sm:p-8 sm:grid-cols-8',
        'md:p-6 md:grid-cols-12 md:gap-x-6',
        'lg:px-[200px]',
        'xl:px-[calc((100vw-1128px)/2)]'
      )}
    >
      <News />
      <NextRace />
      <LastRace />
      <Standings />
    </main>
  );
};
export default HomePage;
