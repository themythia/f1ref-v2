import { IoMdEyeOff } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { toggleLastRace } from '../../../slices/settingsSlice';

const SpoilerOverlay = () => {
  const dispatch = useDispatch();
  const hideLastRace = useSelector((store) => store.settings.hideLastRace);

  return (
    <CSSTransition
      in={hideLastRace}
      unmountOnExit
      classNames={{
        enterActive: 'animate__animated animate__fadeIn animate__faster',
        exitActive: 'animate__animated animate__fadeOut animate__faster',
      }}
      timeout={200}
    >
      <div
        className='h-[124px] w-full bg-spoiler backdrop-blur-lg absolute shadow-4px flex justify-center items-center cursor-pointer group'
        onClick={() => dispatch(toggleLastRace())}
      >
        <IoMdEyeOff />
        <span className='text-sm font-semibold font-openSans ml-2 group-hover:underline duration-200'>
          Show Race Results
        </span>
      </div>
    </CSSTransition>
  );
};
export default SpoilerOverlay;
