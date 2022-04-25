import React from 'react';
import ScheduleItem from './ScheduleItem';

const RaceSchedule = ({ schedule }) => {
  const { fp1, fp2, fp3, quali, race, sprint } = schedule;
  return (
    <div className='flex flex-col gap-y-2 md:col-start-7 md:col-end-13'>
      <span className='hidden sm:block font-poppins text-lg text-bg-800 dark:text-bg-50 mb-1'>
        Session Schedule:
      </span>
      <ScheduleItem session='Race' time={race} />
      <ScheduleItem
        session={sprint ? 'Sprint' : 'Qualifying'}
        time={sprint ? sprint : quali}
      />
      <ScheduleItem
        session={sprint ? 'Practice 2' : 'Practice 3'}
        time={sprint ? fp2 : fp3}
      />
      <ScheduleItem
        session={sprint ? 'Qualifying' : 'Practice 2'}
        time={sprint ? quali : fp2}
      />
      <ScheduleItem session='Practice 1' time={fp1} />
    </div>
  );
};
export default RaceSchedule;
