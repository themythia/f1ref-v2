const shapeRaceStats = (data, type) => {
  // data is an array of arrays ([[], [], []]) that contain race result objects, flatRaces flattens that into an array of objects ([{}, {}, {}])

  const flatRaces = Array.isArray(data)
    ? data
    : data.MRData.RaceTable.Races.flat();

  // processes the data array and returns an object of stats
  const handleRaceStats = (data) => {
    const wins =
      type === 'driver'
        ? data.filter((race) => race.Results[0].position === '1').length
        : data.filter(
            (race) =>
              race.Results.filter((driver) => driver.position === '1')
                .length === 1
          ).length;
    const podiums =
      type === 'driver'
        ? data.filter((race) => parseInt(race.Results[0].position) <= 3).length
        : data.filter(
            (race) =>
              race.Results.filter((driver) => parseInt(driver.position) <= 3)
                .length > 0
          ).length;

    const points =
      type === 'driver'
        ? data.reduce(
            (sum, next) => sum + parseFloat(next.Results[0].points),
            0
          )
        : data.reduce(
            (sum, next) =>
              sum +
              next.Results.reduce(
                (sum, next) => sum + parseFloat(next.points),
                0
              ),
            0
          );
    const pointFinishes =
      type === 'driver'
        ? data.filter((race) => parseFloat(race.Results[0].points) > 0).length
        : data.filter(
            (race) =>
              race.Results.filter((driver) => parseFloat(driver.points) > 0)
                .length > 0
          ).length;
    const poles =
      type === 'driver'
        ? data.filter((race) => parseInt(race.Results[0].grid) === 1).length
        : data.filter(
            (race) =>
              race.Results.filter((driver) => driver.grid === '1').length === 1
          ).length;

    const retirements =
      type === 'driver'
        ? data.filter((race) => race.Results[0].positionText === 'R').length
        : data.filter(
            (race) =>
              race.Results.filter((driver) => driver.positionText === 'R')
                .length > 0
          ).length;

    const dsq =
      type === 'driver'
        ? data.filter((race) => race.Results[0].positionText === 'D').length
        : data.filter(
            (race) =>
              race.Results.filter((driver) => driver.positionText === 'D')
                .length > 0
          ).length;

    return {
      wins,
      gpCount: data.length,
      podiums,
      points,
      pointFinishes,
      poles,
      retirements,
      dsq,
    };
  };

  // gets seasons driver/team raced as an array
  const seasons = flatRaces.reduce((allSeasons, currentRace) => {
    if (!allSeasons.includes(currentRace.season)) {
      allSeasons.push(currentRace.season);
    }
    return allSeasons;
  }, []);

  // groups race objects in flatRaces array by seasons into an object
  const groupedBySeasons = seasons.reduce(
    (obj, season) => ({
      ...obj,
      seasons: {
        ...obj.seasons,
        [season]: handleRaceStats(
          flatRaces.filter((race) => race.season === season)
        ),
      },
    }),
    { seasons: {}, career: handleRaceStats(flatRaces) }
  );
  return groupedBySeasons;
};

export const shapeDriverRaceStats = (data) => {
  return shapeRaceStats(data, 'driver');
};

export const shapeTeamRaceStats = (data) => {
  return shapeRaceStats(data, 'team');
};
