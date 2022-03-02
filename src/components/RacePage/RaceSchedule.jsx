import circuitData from '../../utils/circuitData';
import ScheduleItem from './ScheduleItem';

const RaceSchedule = ({ circuitId }) => {
  const { fp1, fp2, fp3, quali, race } = circuitData[circuitId].schedule;

  return (
    <div className='flex flex-col gap-y-2'>
      <ScheduleItem session='Race' time={race} />
      <ScheduleItem session='Qualifying' time={quali} />
      <ScheduleItem session='Practice 3' time={fp3} />
      <ScheduleItem session='Practice 2' time={fp2} />
      <ScheduleItem session='Practice 1' time={fp1} />
    </div>
  );
};
export default RaceSchedule;
