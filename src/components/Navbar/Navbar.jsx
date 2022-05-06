import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdClose, MdMenu } from 'react-icons/md';
import { toggleMenu } from '../../slices/settingsSlice';
import Menu from './Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import Backdrop from './Backdrop';
import ReactGA from 'react-ga4';

const Navbar = () => {
  const showMenu = useSelector((store) => store.settings.showMenu);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-5K71HY9Q07');
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location.pathname]);

  return (
    <Fragment>
      <nav className='fixed flex items-center justify-center h-14 w-screen bg-bg-50 dark:bg-bg-800 px-4 shadow-2px dark:shadow-2px-dark top-0 z-[9999] row-start-1 row-end-2'>
        <button
          onClick={() => dispatch(toggleMenu())}
          className='absolute left-4'
        >
          {showMenu ? <MdClose size={32} /> : <MdMenu size={32} />}
        </button>
        <p
          className='font-kronaOne text-2xl text-center select-none cursor-pointer'
          onClick={() => navigate('/')}
        >
          F1<span className='text-mercedes'>/</span>REF
        </p>
      </nav>
      <Menu />
      <Backdrop showMenu={showMenu} />
    </Fragment>
  );
};
export default Navbar;
