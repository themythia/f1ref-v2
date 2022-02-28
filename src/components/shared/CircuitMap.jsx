import albert_park from '../../assets/circuits/albert_park.svg';
import americas from '../../assets/circuits/americas.svg';
import bahrain from '../../assets/circuits/bahrain.svg';
import BAK from '../../assets/circuits/BAK.svg';
import catalunya from '../../assets/circuits/catalunya.svg';
import hungaroring from '../../assets/circuits/hungaroring.svg';
import imola from '../../assets/circuits/imola.svg';
import interlagos from '../../assets/circuits/interlagos.svg';
import jeddah from '../../assets/circuits/jeddah.svg';
import marina_bay from '../../assets/circuits/marina_bay.svg';
import miami from '../../assets/circuits/miami.svg';
import monaco from '../../assets/circuits/monaco.svg';
import monza from '../../assets/circuits/monza.svg';
import red_bull_ring from '../../assets/circuits/red_bull_ring.svg';
import ricard from '../../assets/circuits/ricard.svg';
import rodriguez from '../../assets/circuits/rodriguez.svg';
import silverstone from '../../assets/circuits/silverstone.svg';
import sochi from '../../assets/circuits/sochi.svg';
import spa from '../../assets/circuits/spa.svg';
import suzuka from '../../assets/circuits/suzuka.svg';
import villeneuve from '../../assets/circuits/villeneuve.svg';
import yas_marina from '../../assets/circuits/yas_marina.svg';
import zandvoort from '../../assets/circuits/zandvoort.svg';

const CircuitMap = ({ circuit }) => {
  const circuitObj = {
    albert_park,
    americas,
    bahrain,
    BAK,
    catalunya,
    hungaroring,
    imola,
    interlagos,
    jeddah,
    marina_bay,
    miami,
    monaco,
    monza,
    red_bull_ring,
    ricard,
    rodriguez,
    silverstone,
    sochi,
    spa,
    suzuka,
    villeneuve,
    yas_marina,
    zandvoort,
  };

  return (
    <img
      src={circuitObj[circuit]}
      alt='track map'
      loading='lazy'
      className='w-full aspect-16/9'
    />
  );
};
export default CircuitMap;
