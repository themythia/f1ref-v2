import { Fragment } from 'react';
import News from './News';
import NextRace from './NextRace/NextRace';

const HomePage = () => {
  return (
    <div className='mt-14 px-4 pb-4'>
      <News />
      <NextRace />
    </div>
  );
};
export default HomePage;
