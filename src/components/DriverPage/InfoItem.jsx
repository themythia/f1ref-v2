import clsx from 'clsx';

const InfoItem = ({ title, info }) => {
  return (
    <div
      className={clsx(
        'flex flex-row justify-between w-full col-span-4 p-2 text-sm text-left rounded shadow-2px bg-bg-200 font-openSans h-min',
        'dark:shadow-2px-dark dark:bg-bg-900'
      )}
    >
      <span className='font-semibold'>{title}</span>
      <span className='text-right'>{info}</span>
    </div>
  );
};
export default InfoItem;
