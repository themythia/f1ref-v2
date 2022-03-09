import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTeams } from '../../slices/teamsSlice';
import { getTeamsAndDrivers } from '../../utils/api';
import TeamItem from './TeamItem';
import TeamItemSkeleton from './TeamItemSkeleton';

const TeamsPage = () => {
  const dispatch = useDispatch();
  const teams = useSelector((store) => store.teams);
  const [loading, setLoading] = useState();

  const range = (min, max) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i);

  useEffect(() => {
    getTeamsAndDrivers().then((data) => {
      dispatch(addTeams(data));
      setLoading(false);
    });
  }, [dispatch]);
  return (
    <main className='p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 md:gap-x-6 gap-y-4 md:gap-y-6 auto-rows-min row-start-2 row-end-3'>
      {!loading &&
        teams.map((team, index) => <TeamItem key={index} team={team} />)}
      {loading && range(0, 20).map((item) => <TeamItemSkeleton key={item} />)}
    </main>
  );
};
export default TeamsPage;
