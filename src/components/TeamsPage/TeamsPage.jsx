import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addDrivers } from '../../slices/driversSlice';
import { addTeams } from '../../slices/teamsSlice';
import { shapeDriverData } from '../../utils/api/shapeDriverData';
import { shapeTeamData } from '../../utils/api/shapeTeamData';
import useFetch from '../../utils/useFetch';
import Error from '../shared/Error';
import TeamItem from './TeamItem';
import TeamItemSkeleton from './TeamItemSkeleton';

const TeamsPage = () => {
  const dispatch = useDispatch();
  const teams = useSelector((store) => store.teams);
  const drivers = useSelector((store) => store.drivers);
  const [loading, setLoading] = useState(true);

  const { response: tResponse, error: tError } = useFetch(
    'https://ergast.com/api/f1/current/constructors.json',
    [],
    shapeTeamData,
    teams.length > 0
  );

  const { response: dResponse, error: dError } = useFetch(
    'https://ergast.com/api/f1/current/drivers.json',
    [],
    shapeDriverData
  );

  const range = (min, max) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i);

  useEffect(() => {
    if (drivers.length === 0 && dResponse) dispatch(addDrivers(dResponse));
    if (dResponse && tResponse) {
      const updatedTeam = tResponse.map((team) => ({
        ...team,
        drivers: dResponse.filter((driver) => driver.teamCode === team.id),
      }));
      dispatch(addTeams(updatedTeam));
    }
  }, [dResponse, dispatch, drivers.length, tResponse]);

  useEffect(() => {
    if (teams.length > 0) setLoading(false);
  }, [teams]);

  return (
    <main className='p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 md:gap-x-6 gap-y-4 md:gap-y-6 auto-rows-min row-start-2 row-end-3'>
      {(tError || dError) && <Error />}
      {!loading &&
        teams.map((team, index) => <TeamItem key={index} team={team} />)}
      {loading && range(0, 9).map((item) => <TeamItemSkeleton key={item} />)}
    </main>
  );
};
export default TeamsPage;
