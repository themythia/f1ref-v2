export const shapeStandings = (data) => {
  let type =
    data.MRData.url ===
    'http://ergast.com/api/f1/current/constructorstandings.json'
      ? 'constructor'
      : 'driver';

  const standingsData =
    type === 'driver'
      ? data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      : data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;

  const standings = standingsData.map((item) => {
    const name =
      type === 'driver'
        ? item.Driver.givenName + ' ' + item.Driver.familyName
        : item.Constructor.name === 'Alpine F1 Team'
        ? 'Alpine'
        : item.Constructor.name === 'Haas F1 Team' ||
          item.Constructor.name === 'Moneygram Haas F1 Team'
        ? 'Haas'
        : item.Constructor.name;

    const team =
      type === 'driver'
        ? item.Constructors[0].constructorId
        : item.Constructor.constructorId;

    return {
      name,
      position: item.position,
      team,
      points: item.points,
    };
  });
  return standings;
};
