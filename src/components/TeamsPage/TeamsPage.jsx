import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTeams } from '../../slices/teamsSlice';
import { getTeams } from '../../utils/api';
import TeamItem from './TeamItem';
import TeamItemSkeleton from './TeamItemSkeleton';

const TeamsPage = () => {
  const dispatch = useDispatch();
  const teams = useSelector((store) => store.teams);
  const [loading, setLoading] = useState();
  console.log('teamsState', teams);

  const range = (min, max) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i);

  useEffect(() => {
    getTeams().then((data) => {
      dispatch(addTeams(data));
      setLoading(false);
    });
  }, [dispatch]);
  return (
    <main className='mt-14 p-4 md:p-8 lg:px-48 lg:py-6 flex flex-col md:flex-row md:flex-wrap gap-x-4 gap-y-4 lg:gap-x-6 lg:gap-y-6'>
      {!loading &&
        teams.map((team, index) => <TeamItem key={index} team={team} />)}
      {loading && range(0, 20).map((item) => <TeamItemSkeleton key={item} />)}
    </main>
  );
};
export default TeamsPage;
