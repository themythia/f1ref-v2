import { Fragment } from 'react';
import News from './News';
import NextRace from './NextRace/NextRace';

const HomePage = () => {
  return (
    <div className='mt-14 p-4 flex flex-col gap-y-4'>
      <News />
      <NextRace />
    </div>
  );
};
export default HomePage;
