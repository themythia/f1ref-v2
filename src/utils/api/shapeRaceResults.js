export const shapeRaceResults = (data) => {
  if (data.MRData.RaceTable.Races.length === 0) return [];
  else {
    const resultsData = data.MRData.RaceTable.Races[0].Results;
    const results = resultsData.map((driver) => ({
      name: driver.Driver.givenName + ' ' + driver.Driver.familyName,
      teamCode: driver.Constructor.constructorId,
      fastestLap: {
        rank: driver?.FastestLap?.rank,
        time: driver?.FastestLap?.Time?.time,
      },
      time: driver.status === 'Finished' ? driver.Time.time : driver.status,
      laps: driver.laps,
      points: driver.points,
      position: driver.position,
      positionText: driver.positionText,
      status: driver.status,
    }));
    return results;
  }
};
