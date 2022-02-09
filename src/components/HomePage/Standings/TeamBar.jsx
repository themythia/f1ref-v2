const TeamBar = ({ team }) => {
  const color =
    team === 'red_bull'
      ? 'bg-redbull'
      : team === 'mercedes'
      ? 'bg-mercedes'
      : team === 'mclaren'
      ? 'bg-mclaren'
      : team === 'ferrari'
      ? 'bg-ferrari'
      : team === 'alphatauri'
      ? 'bg-alphatauri'
      : team === 'aston_martin'
      ? 'bg-astonmartin'
      : team === 'alpine'
      ? 'bg-alpine'
      : team === 'alfa'
      ? 'bg-alfaromeo'
      : team === 'williams'
      ? 'bg-williams'
      : team === 'haas' && 'bg-haas-900 dark:bg-haas-50';

  return <div className={`h-5 w-2 rounded ml-4 mr-2 ${color}`}></div>;
};
export default TeamBar;
