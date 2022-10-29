import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../slices/settingsSlice';
import CSSTransitionWrapper from '../shared/CSSTransitionWrapper';

const Backdrop = ({ showMenu }) => {
  const dispatch = useDispatch();

  const content = (
    <CSSTransitionWrapper
      inState={showMenu}
      classNames={{
        enter: 'animate__fadeIn',
        exit: 'animate__fadeOut',
      }}
    >
      <div
        className='h-screen w-full fixed z-[49] bg-bg-900/70'
        onClick={() => dispatch(closeMenu())}
      ></div>
    </CSSTransitionWrapper>
  );
  return ReactDOM.createPortal(content, document.getElementById('backdrop'));
};
export default Backdrop;
