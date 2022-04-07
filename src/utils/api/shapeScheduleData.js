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
    };
  });

  // if shaped data is for next race
  if (data.MRData.url === 'http://ergast.com/api/f1/current/next.json') {
    return schedule[0];
  }
  return schedule;
};
