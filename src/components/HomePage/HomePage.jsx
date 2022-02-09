import { Fragment } from 'react';
import News from './News/News';
import NextRace from './NextRace/NextRace';
import Standings from './Standings/Standings';

const HomePage = () => {
  return (
    <div className='mt-14 p-4 flex flex-col gap-y-4'>
      <News />
      <NextRace />
      <Standings />
    </div>
  );
};
export default HomePage;
