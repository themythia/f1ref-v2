import alfa from '../../assets/teamlogos/alfa_romeo.svg';
import alphatauri from '../../assets/teamlogos/alphatauri.svg';
import alpine from '../../assets/teamlogos/alpine.svg';
import aston_martin from '../../assets/teamlogos/astonmartin.svg';
import ferrari from '../../assets/teamlogos/ferrari.svg';
import haas from '../../assets/teamlogos/haas.svg';
import mclaren from '../../assets/teamlogos/mclaren.svg';
import mercedes from '../../assets/teamlogos/mercedes.svg';
import red_bull from '../../assets/teamlogos/redbull.svg';
import williams from '../../assets/teamlogos/williams.svg';

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

  return (
    <img
      src={logo[team]}
      alt={team}
      className=' max-h-20 w-full'
      loading='lazy'
    />
  );
};
export default TeamLogo;
