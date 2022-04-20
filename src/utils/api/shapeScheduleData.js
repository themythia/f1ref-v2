import countryCodes from '../countryCodes';

export const shapeScheduleData = (data) => {
  const scheduleData = data.MRData.RaceTable.Races;
  const schedule = scheduleData.map((race) => {
    const { circuitName, circuitId, Location: location } = race.Circuit;
    return {
      circuitName,
      circuitId,
      locality: location.locality,
      country: location.country,
      countryCode: countryCodes(location.country),
      date: race.date,
      time: race.time,
      raceName: race.raceName,
      round: race.round,
      fp1: race.FirstPractice
        ? race.FirstPractice.date + 'T' + race.FirstPractice.time
        : null,
      fp2: race.SecondPractice
        ? race.SecondPractice.date + 'T' + race.SecondPractice.time
        : null,
      fp3: race.ThirdPractice
        ? race.ThirdPractice.date + 'T' + race.ThirdPractice.time
        : null,
      qualy: race.Qualifying
        ? race.Qualifying.date + 'T' + race.Qualifying.time
        : null,
    };
  });

  // if shaped data is for next or last race
  if (data.MRData.url !== 'http://ergast.com/api/f1/current.json') {
    if (
      data.MRData.url === 'http://ergast.com/api/f1/current/last/results.json'
    ) {
      schedule[0].results = scheduleData.map((race) =>
        race.Results.slice(0, 3).map((driver) => ({
          name: driver.Driver.givenName + ' ' + driver.Driver.familyName,
          position: driver.position,
          team: driver.Constructor.constructorId,
        }))
      )[0];
    }
    return schedule[0];
  }
  return schedule;
};
