const getNextRace = () => {
  return fetch('https://ergast.com/api/f1/current/next.json')
    .then((res) => res.json())
    .then();
};
