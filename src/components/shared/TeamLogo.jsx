import alfa from '../../assets/alfa_romeo.svg';
import alphatauri from '../../assets/alphatauri.svg';
import alpine from '../../assets/alpine.svg';
import aston_martin from '../../assets/astonmartin.svg';
import ferrari from '../../assets/ferrari.svg';
import haasDark from '../../assets/haas_dark.svg';
import haas from '../../assets/haas_light.svg';
import mclaren from '../../assets/mclaren.svg';
import mercedes from '../../assets/mercedes.svg';
import red_bull from '../../assets/redbull.svg';
import williams from '../../assets/williams.svg';

const TeamLogo = ({ team }) => {
  const logo = {
    alfa,
    alphatauri,
    alpine,
    aston_martin,
    ferrari,
    haas,
    mclaren,
    mercedes,
    red_bull,
    williams,
  };
  console.log('logo', logo.team);
  return <img src={logo[team]} alt={team} className='' loading='lazy' />;
};
export default TeamLogo;
