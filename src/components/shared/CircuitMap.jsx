import { ReactComponent as AlbertPark } from '../../assets/circuits/albert_park.svg';
import { ReactComponent as Americas } from '../../assets/circuits/americas.svg';
import { ReactComponent as Bahrain } from '../../assets/circuits/bahrain.svg';
import { ReactComponent as Baku } from '../../assets/circuits/BAK.svg';
import { ReactComponent as Catalunya } from '../../assets/circuits/catalunya.svg';
import { ReactComponent as Hungaroring } from '../../assets/circuits/hungaroring.svg';
import { ReactComponent as Imola } from '../../assets/circuits/imola.svg';
import { ReactComponent as Interlagos } from '../../assets/circuits/interlagos.svg';
import { ReactComponent as Jeddah } from '../../assets/circuits/jeddah.svg';
import { ReactComponent as MarinaBay } from '../../assets/circuits/marina_bay.svg';
import { ReactComponent as Miami } from '../../assets/circuits/miami.svg';
import { ReactComponent as Monaco } from '../../assets/circuits/monaco.svg';
import { ReactComponent as Monza } from '../../assets/circuits/monza.svg';
import { ReactComponent as RedBullRing } from '../../assets/circuits/red_bull_ring.svg';
import { ReactComponent as Ricard } from '../../assets/circuits/ricard.svg';
import { ReactComponent as Rodriguez } from '../../assets/circuits/rodriguez.svg';
import { ReactComponent as Silverstone } from '../../assets/circuits/silverstone.svg';
import { ReactComponent as Sochi } from '../../assets/circuits/sochi.svg';
import { ReactComponent as Spa } from '../../assets/circuits/spa.svg';
import { ReactComponent as Suzuka } from '../../assets/circuits/suzuka.svg';
import { ReactComponent as Villeneuve } from '../../assets/circuits/villeneuve.svg';
import { ReactComponent as YasMarina } from '../../assets/circuits/yas_marina.svg';
import { ReactComponent as Zandvoort } from '../../assets/circuits/zandvoort.svg';

const CircuitMap = ({ circuit }) => {
  const components = {
    albert_park: AlbertPark,
    americas: Americas,
    bahrain: Bahrain,
    BAK: Baku,
    catalunya: Catalunya,
    hungaroring: Hungaroring,
    imola: Imola,
    interlagos: Interlagos,
    jeddah: Jeddah,
    marina_bay: MarinaBay,
    miami: Miami,
    monaco: Monaco,
    monza: Monza,
    red_bull_ring: RedBullRing,
    ricard: Ricard,
    rodriguez: Rodriguez,
    silverstone: Silverstone,
    sochi: Sochi,
    spa: Spa,
    suzuka: Suzuka,
    villeneuve: Villeneuve,
    yas_marina: YasMarina,
    zandvoort: Zandvoort,
  };

  const DynamicSVGMap = components[circuit];

  return (
    <DynamicSVGMap className='w-full aspect-16/9 col-span-4 sm:col-span-8 md:col-start-3 md:col-end-11 fill-bg-800 dark:fill-bg-50' />
  );
};
export default CircuitMap;
