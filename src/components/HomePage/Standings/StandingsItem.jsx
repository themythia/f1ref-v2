import TeamBar from './TeamBar';

const StandingsItem = ({ data }) => {
  return (
    <div className='flex items-center p-2 bg-bg-200 dark:bg-bg-900 rounded shadow-2px snap-start'>
      <span className='font-poppins text-lg w-6 text-center leading-5'>
        {data.position}
      </span>
      <TeamBar team={data.team} />
      <span className='font-openSans font-semibold text-sm'>{data.name}</span>
      <span className='ml-auto font-openSans text-right text-sm'>
        {data.points}
      </span>
    </div>
  );
};
export default StandingsItem;
