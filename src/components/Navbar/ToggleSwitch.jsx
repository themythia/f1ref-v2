import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, toggleUnit } from '../../slices/settingsSlice';

const ToggleSwitch = (props) => {
  const type = useSelector((store) => store.settings[props.type]);
  const dispatch = useDispatch();

  const handleToggle = (toggleType) => {
    if (toggleType === 'theme') {
      dispatch(toggleTheme());
      localStorage.setItem('theme', type === 'light' ? 'dark' : 'light');
    } else if (toggleType === 'unit') dispatch(toggleUnit());
  };

  // const leftText =
  //   props.type === 'theme' ? "after:content-['OFF']" : "after:content-['KM']";
  // const rightText =
  //   props.type === 'theme'
  //     ? "checked:after:content-['ON']"
  //     : "checked:after:content-['MILE']";

  return (
    <input
      type='checkbox'
      id={props.type}
      className={clsx(
        'appearance-none accent-transparent cursor-pointer h-6 w-16 rounded-full border-4 border-transparent bg-bg-800 inline-block relative transition-all duration-200 ease-linear text-center',
        'dark:bg-bg-50',
        'after:text-xs after:absolute after:left-0 after:w-8 after:h-4 after:rounded-full after:bg-bg-50 after:text-bg-800 after:transition-all after:duration-200 after:ease-linear',
        'after:dark:bg-bg-800 after:dark:text-bg-50',
        'checked:border-transparent checked:bg-bg-800 checked:bg-none ',
        'checked:hover:bg-bg-800 checked:hover:dark:bg-bg-50 checked:focus:bg-bg-800',
        'checked:after:translate-x-6',
        'focus:ring-0 focus:ring-offset-0 focus:bg-bg-800 focus:dark:bg-bg-50',
        {
          "after:content-['OFF'] checked:after:content-['ON']":
            props.type === 'theme',
          "after:content-['KM'] checked:after:content-['MILE']":
            props.type !== 'theme',
        }
      )}
      checked={type === 'dark' || type === 'mile' ? true : false}
      onChange={() => handleToggle(props.type)}
    />
  );
};
export default ToggleSwitch;
