import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTeams } from '../../slices/teamsSlice';
import { getTeamsAndDrivers } from '../../utils/api';
import { shapeDriverData } from '../../utils/api/shapeDriverData';
import { shapeTeamData } from '../../utils/api/shapeTeamData';
import useFetch from '../../utils/useFetch';
import TeamItem from './TeamItem';
import TeamItemSkeleton from './TeamItemSkeleton';

const TeamsPage = () => {
  const dispatch = useDispatch();
  const teams = useSelector((store) => store.teams);
  const [loading, setLoading] = useState(true);

  const {
    loading: tLoading,
    status: tStatus,
    response: tResponse,
    error: tError,
  } = useFetch(
    'https://ergast.com/api/f1/current/constructors.json',
    [],
    shapeTeamData
  );

  const {
    loading: dLoading,
    status: dStatus,
    response: dResponse,
    error: dError,
  } = useFetch(
    'https://ergast.com/api/f1/current/drivers.json',
    [],
    shapeDriverData
  );

  const range = (min, max) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i);

  useEffect(() => {
    if (dResponse && tResponse) {
      const updatedTeam = tResponse.map((team) => ({
        ...team,
        drivers: dResponse.filter((driver) => driver.teamCode === team.id),
      }));
      dispatch(addTeams(updatedTeam));
    }
  }, [dResponse, dispatch, tResponse]);

  useEffect(() => {
    if (dLoading && tLoading) setLoading(false);
  }, [dLoading, tLoading]);

  return (
    <main className='p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 md:gap-x-6 gap-y-4 md:gap-y-6 auto-rows-min row-start-2 row-end-3'>
      {!loading &&
        teams.map((team, index) => <TeamItem key={index} team={team} />)}
      {loading && range(0, 20).map((item) => <TeamItemSkeleton key={item} />)}
    </main>
  );
};
export default TeamsPage;
