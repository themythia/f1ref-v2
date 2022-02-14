import teamColors from '../../../utils/teamColors';

const TeamBar = ({ team }) => {
  return (
    <div className={`h-5 w-2 rounded ml-4 mr-2 ${teamColors(team)}`}></div>
  );
};
export default TeamBar;
