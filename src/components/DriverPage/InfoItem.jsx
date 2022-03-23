const InfoItem = ({ title, info }) => {
  return (
    <div className='flex flex-row justify-between rounded shadow-2px bg-bg-200 dark:bg-bg-900 p-2 font-openSans text-sm text-left w-full h-min col-span-4'>
      <span className='font-semibold'>{title}</span>
      <span className='text-right'>{info}</span>
    </div>
  );
};
export default InfoItem;
