import clsx from 'clsx';

const ScheduleItem = ({ session, time }) => {
  const handleSesssionTime = () => {
    if (time === 'TBC' || !time) return 'TBC';
    else {
      const showShortDate = time.includes('T00:00:00Z');
      const event = new Date(time);
      const options = {
        month: 'long',
        day: 'numeric',
        hour: showShortDate ? undefined : 'numeric',
        minute: showShortDate ? undefined : 'numeric',
      };

      return event.toLocaleDateString('en-GB', options);
    }
  };
  if (!session) return null;
  return (
    <div
      className={clsx(
        'flex flex-row justify-between p-2 text-sm rounded shadow-2px bg-bg-200 font-openSans',
        'dark:shadow-2px-dark dark:bg-bg-900'
      )}
    >
      <span className='font-semibold text-left'>{session}</span>
      <span className=''>{handleSesssionTime()}</span>
    </div>
  );
};
export default ScheduleItem;
