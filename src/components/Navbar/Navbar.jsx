import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdClose, MdMenu } from 'react-icons/md';
import { toggleMenu } from '../../slices/settingsSlice';
import Menu from './Menu';

const Navbar = () => {
  const showMenu = useSelector((store) => store.settings.showMenu);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <nav className='fixed flex items-center justify-center h-14 w-screen bg-bg-50 dark:bg-bg-800 px-4 shadow-2px top-0 z-[9999]'>
        <button
          onClick={() => dispatch(toggleMenu())}
          className='absolute left-4'
        >
          {showMenu ? <MdClose size={32} /> : <MdMenu size={32} />}
        </button>
        <p className='font-kronaOne text-2xl text-center'>
          F1<span className='text-mercedes'>/</span>REF
        </p>
      </nav>
      <Menu />
    </Fragment>
  );
};
export default Navbar;
