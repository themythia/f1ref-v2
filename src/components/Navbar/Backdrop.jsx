import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { closeMenu } from '../../slices/settingsSlice';

const Backdrop = ({ showMenu }) => {
  const dispatch = useDispatch();

  const content = (
    <CSSTransition
      in={showMenu}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: 'animate__animated animate__fadeIn animate__faster',
        exitActive: 'animate__animated animate__fadeOut animate__faster',
      }}
      timeout={500}
    >
      <div
        className='h-screen w-full fixed z-[49] bg-bg-900/70'
        onClick={() => dispatch(closeMenu())}
      ></div>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById('backdrop'));
};
export default Backdrop;
