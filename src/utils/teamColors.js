const teamColors = (team) => {
  const color =
    team === 'red_bull'
      ? 'bg-redbull'
      : team === 'mercedes'
      ? 'bg-mercedes'
      : team === 'mclaren'
      ? 'bg-mclaren'
      : team === 'ferrari'
      ? 'bg-ferrari'
      : team === 'rb'
      ? 'bg-rb'
      : team === 'aston_martin'
      ? 'bg-astonmartin'
      : team === 'alpine'
      ? 'bg-alpine'
      : team === 'sauber'
      ? 'bg-sauber'
      : team === 'williams'
      ? 'bg-williams'
      : team === 'haas' && 'bg-haas-900 dark:bg-haas-50';
  return color;
};
export default teamColors;
