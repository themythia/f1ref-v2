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

export const getSchedule = () => {
  return fetch('https://ergast.com/api/f1/2022.json')
    .then((res) => res.json())
    .then((data) => {
      const calendarData = data.MRData.RaceTable.Races;
      const calendar = calendarData.map((race) => ({
        circuitName: race.Circuit.circuitName,
        circuitId: race.Circuit.circuitId,
        locality: race.Circuit.Location.locality,
        country: race.Circuit.Location.country,
        countryCode: countryCodes(race.Circuit.Location.country),
        date: race.date,
        time: race.time,
        raceName: race.raceName,
        round: race.round,
      }));
      return calendar;
    })
    .then((calendar) => calendar)
    .catch((e) => console.warn('Fetching race calendar failed', e));
};

export const getLastRace = () => {
  return fetch('https://ergast.com/api/f1/current/last/results.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const lastRaceData = data.MRData.RaceTable.Races[0];
      const lastRace = {
        circuitName: lastRaceData.Circuit.circuitName,
        circuitId: lastRaceData.Circuit.circuitId,
        locality: lastRaceData.Circuit.Location.locality,
        country: lastRaceData.Circuit.Location.country,
        countryCode: 'AE',
        raceName: lastRaceData.raceName,
        results: lastRaceData.Results.slice(0, 3).map((driver) => ({
          name: driver.Driver.givenName + ' ' + driver.Driver.familyName,
          position: driver.position,
          team: driver.Constructor.constructorId,
        })),
      };
      return lastRace;
    })
    .catch((e) => console.warn('Fetching last race failed', e));
};

export const getDriverStandings = () => {
  return fetch('https://ergast.com/api/f1/current/driverStandings.json')
    .then((res) => res.json())
    .then((data) => {
      const standingsData =
        data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      const driverStandings = standingsData.map((driver) => ({
        name: driver.Driver.givenName + ' ' + driver.Driver.familyName,
        position: driver.position,
        team: driver.Constructors[0].constructorId,
        points: driver.points,
      }));
      return driverStandings;
    })
    .catch((e) => console.warn('Fetching driver standings failed', e));
};

export const getTeamStandings = () => {
  return fetch('https://ergast.com/api/f1/current/constructorStandings.json')
    .then((res) => res.json())
    .then((data) => {
      const standingsData =
        data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
      const teamStandings = standingsData.map((team) => ({
        name:
          team.Constructor.name === 'Alpine F1 Team'
            ? 'Alpine'
            : team.Constructor.name === 'Haas F1 Team'
            ? 'Haas'
            : team.Constructor.name,
        position: team.position,
        team: team.Constructor.constructorId,
        points: team.points,
      }));
      return teamStandings;
    })
    .catch((e) => console.warn('Fetching driver standings failed', e));
};

export const getStandings = () => {
  return Promise.all([getDriverStandings(), getTeamStandings()]).then(
    ([driverStandings, teamStandings]) => ({
      drivers: driverStandings,
      constructors: teamStandings,
    })
  );
};

export const getDrivers = () => {
  return fetch('http://ergast.com/api/f1/current/drivers.json')
    .then((res) => res.json())
    .then((data) => {
      const driverData = data.MRData.DriverTable.Drivers;
      const drivers = driverData.map((driver) => ({
        dateOfBirth: driver.dateOfBirth,
        id: driver.driverId,
        name: driver.givenName + ' ' + driver.familyName,
        nationality: driver.nationality,
        no: driver.permanentNumber,
        countryCode: countryCodes(driver.nationality, 'nationality'),
      }));
      console.log('drivers:', drivers);
      return driverData;
    })
    .catch((e) => console.warn('Fetching driver data failed', e));
};
