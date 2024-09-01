import countryCodes from '../countryCodes';
import driverBirthPlaces from '../driverBirthPlaces';
import driverPics from '../driverPics';

export const shapeDriverData = (data) => {
  const driverData = data.MRData.DriverTable.Drivers;

  const drivers = driverData.map((d) => {
    const driverObj = {
      no: d.permanentNumber,
      dateOfBirth: d.dateOfBirth,
      id: d.driverId,
      name: d.givenName + ' ' + d.familyName,
      familyName: d.familyName,
      givenName: d.givenName,
      birthPlace: driverBirthPlaces[d.driverId],
      nationality: d.nationality,
      countryCode: countryCodes(d.nationality?.trim(), 'nationality'),
      image: {
        profile: driverPics(d.code).profile,
        big: driverPics(d.code).big,
      },
    };

    switch (d.code) {
      case 'HAM':
      case 'RUS':
      case 'MSC':
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
      case 'PIA':
        return {
          ...driverObj,
          team: 'McLaren',
          teamCode: 'mclaren',
        };
      case 'STR':
      case 'ALO':
        return {
          ...driverObj,
          team: 'Aston Martin',
          teamCode: 'aston_martin',
        };
      case 'OCO':
      case 'GAS':
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
      case 'DEV':
      case 'TSU':
      case 'RIC':
      case 'LAW':
        return {
          ...driverObj,
          team: 'RB F1 Team',
          teamCode: 'rb',
        };
      case 'BOT':
      case 'ZHO':
        return {
          ...driverObj,
          team: 'Kick Sauber',
          teamCode: 'sauber',
        };
      case 'MAG':
      case 'HUL':
        return {
          ...driverObj,
          team: 'Haas',
          teamCode: 'haas',
        };
      case 'ALB':
      case 'SAR':
      case 'COL':
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
};
