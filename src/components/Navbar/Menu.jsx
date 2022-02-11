import ToggleSwitch from './ToggleSwitch';
import 'animate.css';
import { CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const showMenu = useSelector((store) => store.settings.showMenu);

  return (
    <CSSTransition
      in={showMenu}
      unmountOnExit
      classNames={{
        enterActive: 'animate__animated animate__slideInLeft animate__faster',
        exitActive: 'animate__animated animate__slideOutLeft animate__faster',
      }}
      timeout={500}
    >
      <div className='bg-bg-50 dark:bg-bg-800 w-screen md:w-1/2 h-screen pt-14 px-4 fixed z-50 shadow-4px'>
        <ul className='font-poppins text-lg pt-4 pb-2 border-b border-bg-300 dark:border-bg-600'>
          <li className="mb-2 hover:after:content-['>'] hover:after:ml-1 hover:after:text-lg duration-200">
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className="mb-2 hover:after:content-['>'] hover:after:ml-1 hover:after:text-lg duration-200">
            <NavLink to='calendar'>Calendar</NavLink>
          </li>
          <li className="mb-2 hover:after:content-['>'] hover:after:ml-1 hover:after:text-lg duration-200">
            <NavLink to='drivers'>Drivers</NavLink>
          </li>
          <li className="mb-2 hover:after:content-['>'] hover:after:ml-1 hover:after:text-lg duration-200">
            <NavLink to='teams'>Constructors</NavLink>
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
