import clsx from 'clsx';

const Flag = (props) => {
  const source = `https://purecatamphetamine.github.io/country-flag-icons/1x1/${props.country}.svg`;

  if (!props.country) return null;

  return (
    <img
      alt='United States'
      src={source}
      className={clsx('rounded-full shadow-4px', 'dark:shadow-4px-dark', {
        'h-9': props.size === '36',
        'h-10': props.size === '40',
        'h-[26px]': props.size === '26',
      })}
    />
  );
};
export default Flag;
