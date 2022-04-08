import Container from '../Container';
import { useEffect, useState } from 'react';
import { addStandings } from '../../../slices/standingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getStandings } from '../../../utils/api';
import StandingsItem from './StandingsItem';
import Selector from '../../shared/Selector/Selector';
import 'animate.css';
import SwitchTransitionWrapper from '../../shared/SwitchTransitionWrapper';
import useFetch from '../../../utils/useFetch';
import { shapeStandings } from '../../../utils/api/shapeStandings';

const Standings = (props) => {
  const dispatch = useDispatch();
  const activeButton = useSelector(
    (store) => store.settings.selector.standings
  );
  const standings = useSelector((store) =>
    activeButton === 0 ? store.standings.drivers : store.standings.constructors
  );

  const {
    loading: dLoading,
    status: dStatus,
    response: dResponse,
    error: dError,
  } = useFetch(
    'https://ergast.com/api/f1/current/driverStandings.json',
    [],
    shapeStandings
  );

  const {
    loading: tLoading,
    status: tStatus,
    response: tResponse,
    error: tError,
  } = useFetch(
    'https://ergast.com/api/f1/current/constructorStandings.json',
    [],
    shapeStandings
  );

  useEffect(() => {
    if (tResponse && dResponse)
      dispatch(
        addStandings({
          drivers: dResponse,
          constructors: tResponse,
        })
      );
  }, [dispatch, tResponse, dResponse]);

  return (
    <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 lg:p-6 w-full col-span-full'>
      <p className='font-poppins text-lg text-bg-800 dark:text-bg-50 md:mb-2'>
        Standings:
      </p>
      <Selector options={['Drivers', 'Constructors']} type='standings' />
      <SwitchTransitionWrapper state={activeButton}>
        <div className='flex flex-col gap-y-2'>
          {standings.map((driver, index) => (
            <StandingsItem key={index} data={driver} />
          ))}
        </div>
      </SwitchTransitionWrapper>
    </div>
  );
};
export default Standings;
