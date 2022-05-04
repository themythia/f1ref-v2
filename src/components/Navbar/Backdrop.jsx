import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../slices/settingsSlice';

const Backdrop = () => {
  const dispatch = useDispatch();

  const content = (
    <div
      className='h-screen w-full fixed z-[49] bg-bg-900/70'
      onClick={() => dispatch(closeMenu())}
    ></div>
  );
  return ReactDOM.createPortal(content, document.getElementById('backdrop'));
};
export default Backdrop;
