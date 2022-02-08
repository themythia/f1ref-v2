import countryCodes from './countryCodes';

export const getNextRace = () => {
  return fetch('https://ergast.com/api/f1/current/next.json')
    .then((res) => res.json())
    .then((data) => {
      const nextRaceData = data.MRData.RaceTable.Races[0];
      const nextRace = {
        circuitName: nextRaceData.Circuit.circuitName,
        circuitId: nextRaceData.Circuit.circuitId,
        locality: nextRaceData.Circuit.Location.locality,
        country: nextRaceData.Circuit.Location.country,
        countryCode: countryCodes(nextRaceData.Circuit.Location.country),
        date: nextRaceData.date,
        time: nextRaceData.time,
        raceName: nextRaceData.raceName,
      };
      return nextRace;
    })
    .then((nextRace) => nextRace)
    .catch((e) => console.warn('Fetching next race failed', e));
};
