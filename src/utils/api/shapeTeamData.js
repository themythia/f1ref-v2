import countryCodes from '../countryCodes';
import teamInfo from '../teamInfo';

export const shapeTeamData = (data) => {
  const constructorData = data.MRData.ConstructorTable.Constructors;
  const constructors = constructorData.map((team) => {
    const { constructorId: id } = team;
    return {
      id,
      name:
        team.name === 'Alpine F1 Team'
          ? 'Alpine'
          : team.name === 'Haas F1 Team' ||
            team.name === 'Moneygram Haas F1 Team'
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
};
