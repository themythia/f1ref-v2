const Flag = (props) => {
  const source = `http://purecatamphetamine.github.io/country-flag-icons/1x1/${props.country}.svg`;
  const size =
    props.size === '36'
      ? 'h-9'
      : props.size === '40'
      ? 'h-10'
      : props.size === '26' && 'h-[26px]';

  return (
    <img alt='United States' src={source} className={`rounded-full ${size}`} />
  );
};
export default Flag;
