const ScheduleItem = ({ session, time }) => {
  const event = new Date(time);
  const options = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return (
    <div className='flex flex-row justify-between rounded shadow-2px bg-bg-200 dark:bg-bg-900 p-2 font-openSans text-sm'>
      <span className='font-semibold text-left'>{session}</span>
      <span className=''>{event.toLocaleDateString('en-GB', options)}</span>
    </div>
  );
};
export default ScheduleItem;
