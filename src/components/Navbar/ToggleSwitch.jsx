import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../slices/settingsSlice';

const ToggleSwitch = () => {
  const theme = useSelector((store) => store.settings.theme);
  const dispatch = useDispatch();

  return (
    <input
      type='checkbox'
      className="appearance-none cursor-pointer focus:ring-0 focus:ring-offset-0 h-6 w-16 rounded-full border-4 border-transparent bg-bg-800 dark:bg-bg-50 inline-block relative transition-all duration-200 ease-linear text-center after:content-['OFF'] after:text-xs after:absolute after:left-0 after:w-8 after:h-4 after:rounded-full after:bg-bg-50 after:dark:bg-bg-800 after:text-bg-800 after:dark:text-bg-50 after:transition-all after:duration-200 after:ease-linear checked:border-transparent checked:bg-bg-50 checked:after:content-['ON'] checked:after:translate-x-6 accent-transparent focus:bg-bg-800 focus:dark:bg-bg-50 checked:hover:bg-bg-800 checked:hover:dark:bg-bg-50"
      checked={theme === 'dark' ? true : false}
      onChange={() => dispatch(toggleTheme())}
    />
  );
};
export default ToggleSwitch;
