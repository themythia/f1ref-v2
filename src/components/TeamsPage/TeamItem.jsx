import Flag from '../shared/Flag';
import { useNavigate } from 'react-router-dom';
import slug from 'slug';
import teamColors from '../../utils/teamColors';
import TeamLogo from '../shared/TeamLogo';

const TeamItem = ({ team }) => {
  const navigate = useNavigate();

  return (
    <div
      className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px max-w-full md:w-[calc((100%-16px)/2)] lg:w-[calc(50%-12px)] xl:w-[calc((100%-48px)/3)] 2xl:w-[calc((100%-72px)/4)] cursor-pointer hover:scale-[1.02] hover:shadow-8px duration-200 group flex flex-col items-center'
      onClick={() => navigate(`/teams/${slug(team.id)}`)}
    >
      <div className={`rounded-t relative shadow-2px p-4 pb-0`}>
        <TeamLogo team={team.id} />
      </div>
    </div>
  );
};
export default TeamItem;
