import countryCodes from './countryCodes';
import driverBirthPlaces from './driverBirthPlaces';
import driverPics from './driverPics';
import teamInfo from './teamInfo';

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
  return fetch('https://ergast.com/api/f1/current/drivers.json')
    .then((res) => res.json())
    .then((data) => {
      const driverData = data.MRData.DriverTable.Drivers;
      const drivers = driverData.map((driver) => {
        const driverObj = {
          no: driver.permanentNumber,
          dateOfBirth: driver.dateOfBirth,
          id: driver.driverId,
          name: driver.givenName + ' ' + driver.familyName,
          familyName: driver.familyName,
          givenName: driver.givenName,
          birthPlace: driverBirthPlaces[driver.driverId],
          nationality: driver.nationality,
          countryCode: countryCodes(driver.nationality, 'nationality'),
          image: {
            profile: driverPics(driver.code).profile,
            big: driverPics(driver.code).big,
            helmet: driverPics(driver.code).helmet,
          },
        };

        switch (driver.code) {
          case 'HAM':
          case 'RUS':
            return {
              ...driverObj,
              team: 'Mercedes',
              teamCode: 'mercedes',
            };
          case 'VER':
          case 'PER':
            return {
              ...driverObj,
              team: 'Red Bull',
              teamCode: 'red_bull',
            };

          case 'NOR':
          case 'RIC':
            return {
              ...driverObj,
              team: 'McLaren',
              teamCode: 'mclaren',
            };
          case 'STR':
          case 'VET':
          case 'HUL':
            return {
              ...driverObj,
              team: 'Aston Martin',
              teamCode: 'aston_martin',
            };
          case 'OCO':
          case 'ALO':
            return {
              ...driverObj,
              team: 'Alpine',
              teamCode: 'alpine',
            };
          case 'LEC':
          case 'SAI':
            return {
              ...driverObj,
              team: 'Ferrari',
              teamCode: 'ferrari',
            };
          case 'GAS':
          case 'TSU':
            return {
              ...driverObj,
              team: 'AlphaTauri',
              teamCode: 'alphatauri',
            };
          case 'RAI':
          case 'GIO':
          case 'KUB':
          case 'BOT':
          case 'ZHO':
            return {
              ...driverObj,
              team: 'Alfa Romeo',
              teamCode: 'alfa',
            };
          case 'MSC':
          case 'MAZ':
          case 'MAG':
            return {
              ...driverObj,
              team: 'Haas',
              teamCode: 'haas',
            };
          case 'ALB':
          case 'LAT':
            return {
              ...driverObj,
              team: 'Williams',
              teamCode: 'williams',
            };
          default:
            return driverObj;
        }
      });
      return drivers.sort((a, b) => a.no - b.no);
    })
    .catch((e) => console.warn('Fetching driver data failed', e));
};

export const getTeams = () => {
  return fetch('https://ergast.com/api/f1/current/constructors.json')
    .then((res) => res.json())
    .then((data) => {
      const constructorData = data.MRData.ConstructorTable.Constructors;
      const constructors = constructorData.map((team) => {
        const { constructorId: id } = team;
        return {
          id,
          name:
            team.name === 'Alpine F1 Team'
              ? 'Alpine'
              : team.name === 'Haas F1 Team'
              ? 'Haas'
              : team.name,
          countryCode: countryCodes(team.nationality, 'nationality'),
          fullName: teamInfo[id].fullName,
          base: teamInfo[id].base,
          teamChief: teamInfo[id].teamChief,
          chassis: teamInfo[id].chassis,
          powerUnit: teamInfo[id].powerUnit,
        };
      });
      return constructors;
    })
    .catch((e) => console.warn('Fetching teams data failed', e));
};

export const getTeamsAndDrivers = () => {
  return Promise.all([getTeams(), getDrivers()])
    .then(([teams, drivers]) => ({
      teams,
      drivers,
    }))
    .then((obj) => {
      const newTeams = obj.teams.map((team) => ({
        ...team,
        drivers: obj.drivers.filter((driver) => driver.teamCode === team.id),
      }));
      return newTeams;
    })
    .then((teams) => teams);
};

export const getRaceResults = (round) => {
  return fetch(`https://ergast.com/api/f1/2022/${round}/results.json`)
    .then((res) => res.json())
    .then((data) => {
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
    })

    .catch((e) => console.warn('Fetching race results failed', e));
};

export const getScheduleAndResults = (round) => {
  return Promise.all([getSchedule(), getRaceResults(round)]).then(
    ([schedule, results]) => {
      return schedule.map((race) =>
        race.round === round ? { ...race, results } : race
      );
    }
  );
};

export const getDriverRaceStats = (driver, season) => {
  return fetch(`http://ergast.com/api/f1/drivers/${driver}/results.json`)
    .then((res) => res.json())
    .then((data) => data.MRData.total)
    .then((raceCount) =>
      fetch(
        `http://ergast.com/api/f1/drivers/${driver}/results.json?limit=${raceCount}`
      )
        .then((res) => res.json())
        .then((data) => {
          // data returns an array of arrays that contain 100 race result objects each, flatRaces flattens that into an array of objects
          const flatRaces = data.MRData.RaceTable.Races.flat();
          console.log('flatRaces', flatRaces);
          // processes the data array and returns an object of stats
          const handleRaceStats = (data) => {
            return {
              wins: data.filter(
                (race) => parseInt(race.Results[0].position) === 1
              ).length,
              gpCount: data.length,
              podiums: data.filter(
                (race) => parseInt(race.Results[0].position) <= 3
              ).length,
              points: data.reduce(
                (sum, next) => sum + parseFloat(next.Results[0].points),
                0
              ),
              pointFinishes: data.filter(
                (race) => parseFloat(race.Results[0].points) > 0
              ).length,
              poles: data.filter((race) => parseInt(race.Results[0].grid) === 1)
                .length,
              retirements: data.filter(
                (race) => race.Results[0].positionText === 'R'
              ).length,
              dsq: data.filter((race) => race.Results[0].positionText === 'D')
                .length,
              races: data.length,
            };
          };

          // gets seasons driver raced as an array
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
        })
        .catch((e) => console.warn('Fetching all races failed', e))
    )
    .catch((e) => console.warn('Fetching driver stats failed!', e));
};

export const getTeamRaceStats = (team) => {
  // Ergast API has a limit of 1000 results
  // handles paginated fetch
  const fetchOffset = (page, team) => {
    return fetch(
      `https://ergast.com/api/f1/constructors/${team}/results.json?limit=1000&offset=${
        1000 * page
      }`
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) =>
        console.warn(`Fetching page: ${page} of ${team} stats failed`, e)
      );
  };

  return fetch(`https://ergast.com/api/f1/constructors/${team}/results.json`)
    .then((res) => res.json())
    .then((data) => data.MRData.total)
    .then((results) => {
      if (results > 1000) {
        const pages = Math.ceil(results / 1000);
        // creates an array with length of pages, with fetchOffset() as values
        const fetchArray = [...Array(pages).keys()].map((page) =>
          fetchOffset(page, team)
        );
        return Promise.all(fetchArray).then((values) =>
          values.reduce(
            (start, current) => start.concat(...current.MRData.RaceTable.Races),
            []
          )
        );
      } else {
        return fetchOffset(0, team).then((data) => data.MRData.RaceTable.Races);
      }
    })
    .then((races) => {
      console.log('races:', races);
      // returns an array of strings of years team raced
      const seasons = races.reduce((allSeasons, currentRace) => {
        if (!allSeasons.includes(currentRace.season)) {
          allSeasons.push(currentRace.season);
        }
        return allSeasons;
      }, []);

      const handleRaceStats = (data) => {
        // data is an array that contains full season of races
        // [race1,race2,race3,..., raceN];
        //  race1 = {
        //   Circuit: {},
        //   Results: [driver1, driver2, driver3,..., driverN],
        //   date: '',
        //   raceName: '',
        //   round: '',
        //   season: '',
        //   url: '',
        // }
        // driver1 = {
        //   Constructor: {},
        //   Driver: {},
        //   laps: '',
        //   number: '',
        //   points: '',
        //   position: '',
        //   positionText: '',
        //   status: '',
        //   grid: '', --not always there
        // };
        return {
          wins: data.filter(
            (race) =>
              race.Results.filter((driver) => driver.position === '1')
                .length === 1
          ).length,
          gpCount: data.length,
          podiums: data.filter(
            (race) =>
              race.Results.filter((driver) => parseInt(driver.position) <= 3)
                .length > 0
          ).length,
          points: data.reduce(
            (sum, next) =>
              sum +
              next.Results.reduce(
                (sum, next) => sum + parseFloat(next.points),
                0
              ),
            0
          ),
          poles: data.filter(
            (race) =>
              race.Results.filter((driver) => driver.grid === '1').length === 1
          ).length,
          fastestLap: data.filter(
            (race) =>
              race.Results.filter((driver) => driver?.FastestLap?.rank === '1')
                .length === 1
          ).length,
          pointFinishes: data.filter(
            (race) =>
              race.Results.filter((driver) => parseFloat(driver.points) > 0)
                .length > 0
          ).length,
          retirements: data.filter(
            (race) =>
              race.Results.filter((driver) => driver.positionText === 'R')
                .length > 0
          ).length,
          dsq: data.filter(
            (race) =>
              race.Results.filter((driver) => driver.positionText === 'D')
                .length > 0
          ).length,
        };
      };
      console.log('handleRaceStats', handleRaceStats(races));
      const groupedBySeasons = seasons.reduce(
        (obj, season) => ({
          ...obj,
          seasons: {
            ...obj.seasons,
            [season]: handleRaceStats(
              races.filter((race) => race.season === season)
            ),
          },
        }),
        { seasons: {}, career: handleRaceStats(races) }
      );
      return groupedBySeasons;
    });
};
