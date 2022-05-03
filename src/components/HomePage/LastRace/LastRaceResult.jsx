import TeamBar from '../Standings/TeamBar';

const LastRaceResult = ({ data }) => {
  return (
    <div className='flex items-center p-2 bg-bg-200 dark:bg-bg-900 rounded shadow-2px dark:shadow-2px-dark snap-start'>
      <span className='font-poppins text-lg w-6 text-center'>
        {data.position}
      </span>
      <TeamBar team={data.team} />
      <span className='font-openSans font-semibold text-sm'>{data.name}</span>
    </div>
  );
};
export default LastRaceResult;
