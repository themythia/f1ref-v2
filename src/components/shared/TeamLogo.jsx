import alfa from '../../assets/teamlogos/round/alfa_romeo.svg';
import alphatauri from '../../assets/teamlogos/round/alphatauri.svg';
import alpine from '../../assets/teamlogos/round/alpine.svg';
import aston_martin from '../../assets/teamlogos/round/astonmartin.svg';
import ferrari from '../../assets/teamlogos/round/ferrari.svg';
import haas from '../../assets/teamlogos/round/haas.svg';
import mclaren from '../../assets/teamlogos/round/mclaren.svg';
import mercedes from '../../assets/teamlogos/round/mercedes.svg';
import red_bull from '../../assets/teamlogos/round/redbull.svg';
import williams from '../../assets/teamlogos/round/williams.svg';
import alfaBig from '../../assets/teamlogos/big/alfa_romeo.svg';
import alphatauriBig from '../../assets/teamlogos/big/alphatauri.svg';
import alpineBig from '../../assets/teamlogos/big/alpine.svg';
import aston_martinBig from '../../assets/teamlogos/big/astonmartin.svg';
import ferrariBig from '../../assets/teamlogos/big/ferrari.svg';
import haasBig from '../../assets/teamlogos/big/haas.svg';
import mclarenBig from '../../assets/teamlogos/big/mclaren.svg';
import mercedesBig from '../../assets/teamlogos/big/mercedes.svg';
import red_bullBig from '../../assets/teamlogos/big/redbull.svg';
import williamsBig from '../../assets/teamlogos/big/williams.svg';

const TeamLogo = ({ team, type }) => {
  const logo = {
    round: {
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
    },
    big: {
      alfa: alfaBig,
      alphatauri: alphatauriBig,
      alpine: alpineBig,
      'aston-martin': aston_martinBig,
      ferrari: ferrariBig,
      haas: haasBig,
      mclaren: mclarenBig,
      mercedes: mercedesBig,
      'red-bull': red_bullBig,
      williams: williamsBig,
    },
  };

  if (type === 'round') {
    return (
      <img
        src={logo.round[team]}
        alt={`Logo of ${team}`}
        className='max-h-[84px] w-full'
        loading='lazy'
      />
    );
  } else if (type === 'big') {
    return (
      <img
        src={logo.big[team]}
        alt={`Logo of ${team}`}
        loading='lazy'
        className='w-full aspect-16/9'
      />
    );
  }
};
export default TeamLogo;
