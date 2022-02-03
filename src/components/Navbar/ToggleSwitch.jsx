import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, toggleUnit } from '../../slices/settingsSlice';

const ToggleSwitch = (props) => {
  const type = useSelector((store) => store.settings[props.type]);
  const dispatch = useDispatch();

  const handleToggle = (type) => {
    if (type === 'theme') dispatch(toggleTheme());
    else if (type === 'unit') dispatch(toggleUnit());
  };

  const leftText =
    props.type === 'theme' ? "after:content-['OFF']" : "after:content-['KM']";
  const rightText =
    props.type === 'theme'
      ? "checked:after:content-['ON']"
      : "checked:after:content-['MILE']";

  return (
    <input
      type='checkbox'
      className={`appearance-none accent-transparent cursor-pointer h-6 w-16 rounded-full border-4 border-transparent bg-bg-800 dark:bg-bg-50 inline-block relative transition-all duration-200 ease-linear text-center ${leftText} ${rightText} after:text-xs after:absolute after:left-0 after:w-8 after:h-4 after:rounded-full after:bg-bg-50 after:dark:bg-bg-800 after:text-bg-800 after:dark:text-bg-50 after:transition-all after:duration-200 after:ease-linear checked:border-transparent checked:bg-bg-800 checked:bg-none checked:after:translate-x-6 checked:focus:bg-bg-800 checked:hover:bg-bg-800 checked:hover:dark:bg-bg-50 focus:ring-0 focus:ring-offset-0 focus:bg-bg-800 focus:dark:bg-bg-50`}
      checked={type === 'dark' || type === 'mile' ? true : false}
      onChange={() => handleToggle(props.type)}
    />
  );
};
export default ToggleSwitch;
