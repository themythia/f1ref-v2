const ScheduleItem = ({ session, time }) => {
  const handleSesssionTime = () => {
    if (time === 'TBC') return 'TBC';
    else {
      const event = new Date(time);
      const options = {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };

      return event.toLocaleDateString('en-GB', options);
    }
  };

  return (
    <div className='flex flex-row justify-between rounded shadow-2px dark:shadow-2px-dark bg-bg-200 dark:bg-bg-900 p-2 font-openSans text-sm'>
      <span className='font-semibold text-left'>{session}</span>
      <span className=''>{handleSesssionTime()}</span>
    </div>
  );
};
export default ScheduleItem;
