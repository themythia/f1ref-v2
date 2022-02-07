import countryCodes from './countryCodes';

export const getNextRace = () => {
  return fetch('https://ergast.com/api/f1/current/next.json')
    .then((res) => res.json())
    .then((data) => {
      console.log('data:', data);
      const nextRaceData = data.MRData.RaceTable.Races[0];
      console.log('nextRaceData', nextRaceData);
      const nextRace = {
        circuit: {
          name: nextRaceData.Circuit.circuitName,
          id: nextRaceData.Circuit.circuitId,
          location: {
            locality: nextRaceData.Circuit.Location.locality,
            country: nextRaceData.Circuit.Location.country,
            countryCode: countryCodes(nextRaceData.Circuit.Location.country),
          },
        },
        date: nextRaceData.date,
        time: nextRaceData.time,
        name: nextRaceData.raceName,
      };
      return nextRace;
    })
    .then((nextRace) => nextRace)
    .catch((e) => console.warn('Fetching next race failed', e));
};
