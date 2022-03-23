import ToggleSwitch from './ToggleSwitch';
import 'animate.css';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { toggleMenu } from '../../slices/settingsSlice';

const Menu = () => {
  const showMenu = useSelector((store) => store.settings.showMenu);
  const dispatch = useDispatch();

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
    <CSSTransition
      in={showMenu}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: 'animate__animated animate__slideInLeft animate__faster',
        exitActive: 'animate__animated animate__slideOutLeft animate__faster',
      }}
      timeout={500}
    >
      <div className='bg-bg-50 dark:bg-bg-800 w-screen md:w-1/3 h-screen pt-14 px-4 fixed z-50 shadow-4px'>
        <ul className='font-poppins text-lg pt-4 pb-2 border-b border-bg-300 dark:border-bg-600'>
          <li className="mb-2 hover:after:content-['>'] hover:after:ml-1 hover:after:text-lg duration-200">
            <NavLink to='/' onClick={() => dispatch(toggleMenu())}>
              Home
            </NavLink>
          </li>
          <li className="mb-2 hover:after:content-['>'] hover:after:ml-1 hover:after:text-lg duration-200">
            <NavLink to='calendar' onClick={() => dispatch(toggleMenu())}>
              Calendar
            </NavLink>
          </li>
          <li className="mb-2 hover:after:content-['>'] hover:after:ml-1 hover:after:text-lg duration-200">
            <NavLink to='drivers' onClick={() => dispatch(toggleMenu())}>
              Drivers
            </NavLink>
          </li>
          <li className="mb-2 hover:after:content-['>'] hover:after:ml-1 hover:after:text-lg duration-200">
            <NavLink to='teams' onClick={() => dispatch(toggleMenu())}>
              Constructors
            </NavLink>
          </li>
        </ul>
        <ul className='font-poppins text-lg pt-4'>
          <li className='mb-2 flex justify-between'>
            <label htmlFor='theme'>Dark Theme</label>
            <ToggleSwitch type='theme' />
          </li>
          <li className='mb-2 flex justify-between'>
            <label htmlFor='unit'>Measurement Unit</label>
            <ToggleSwitch type='unit' />
          </li>
        </ul>
      </div>
    </CSSTransition>
  );
};
export default Menu;
