import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../slices/settingsSlice';

const ThemeWrapper = ({ children }) => {
  const theme = useSelector((store) => store.settings.theme);
  const dispatch = useDispatch();
  const storedtheme = localStorage.getItem('theme');

  // handles theming
  useEffect(() => {
    // checks localStorage to see if user set a specific theme
    if (localStorage.getItem('theme')) {
      dispatch(setTheme(localStorage.getItem('theme')));
    } else {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        dispatch(setTheme('dark')); // if users prefers dark theme, sets theme to dark
      }

      // listens for theme preferences and changes the theme accordingly
      const listener = (e) => {
        dispatch(setTheme(e.matches ? 'dark' : 'light'));
      };

      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', listener);

      return () => window.removeEventListener('change', listener);
    }
  }, [dispatch, storedtheme]);
  return (
    <div className={theme}>
      <div className='bg-bg-200 dark:bg-bg-900 text-bg-800 dark:text-bg-50 h-full min-h-screen w-screen overflow-x-hidden grid grid-rows-rows'>
        {children}
      </div>
    </div>
  );
};
export default ThemeWrapper;
