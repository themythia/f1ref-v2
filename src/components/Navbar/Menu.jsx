import 'animate.css';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import clsx from 'clsx';
import Link from './Link';
import Toggle from './Toggle';
import CSSTransitionWrapper from '../shared/CSSTransitionWrapper';

const Menu = () => {
  const showMenu = useSelector((store) => store.settings.showMenu);
  const location = useLocation();

  // closes menu on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useLayoutEffect(() => {
    // locks scrolling when menu is open
    if (showMenu) {
      // Get original body overflow
      const originalStyle = window.getComputedStyle(document.body).overflow;
      // Prevent scrolling on mount
      document.body.style.overflow = 'hidden';
      // Re-enable scrolling when component unmounts
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [showMenu]);

  return (
    <CSSTransitionWrapper
      inState={showMenu}
      classNames={{
        enter: 'animate__slideInLeft',
        exit: 'animate__slideOutLeft',
      }}
    >
      <div
        className={clsx(
          'fixed z-50 w-screen h-screen px-4 bg-bg-50 pt-14 shadow-4px',
          'dark:bg-bg-800 dark:shadow-4px-dark',
          'md:w-1/3'
        )}
        data-testid='menu-container'
      >
        <ul
          className={clsx(
            'pt-4 pb-2 text-lg border-b font-poppins border-bg-300',
            'dark:border-bg-600'
          )}
          data-testid='nav-menu-list'
        >
          <Link to='/' content='Home' />
          <Link to='calendar' content='Calendar' />
          <Link to='drivers' content='Drivers' />
          <Link to='teams' content='Constructors' />
        </ul>
        <ul className='pt-4 text-lg font-poppins'>
          <Toggle type='theme' label='Dark Theme' />
          <Toggle type='unit' label='Measurement Unit' />
        </ul>
      </div>
    </CSSTransitionWrapper>
  );
};
export default Menu;
