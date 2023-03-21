import clsx from 'clsx';
import React from 'react';
import ScheduleItem from './ScheduleItem';

const RaceSchedule = ({ schedule }) => {
  const { fp1, fp2, fp3, quali, race, sprint } = schedule;
  return (
    <div
      className={clsx(
        'flex flex-col gap-y-2',
        'md:gap-y-3 md:col-start-7 md:col-end-13'
      )}
      data-testid='race-schedule'
    >
      <span
        className={clsx(
          'hidden text-lg font-poppins text-bg-800',
          'dark:text-bg-50',
          'sm:block'
        )}
      >
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
