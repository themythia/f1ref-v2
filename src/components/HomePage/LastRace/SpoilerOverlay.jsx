import clsx from 'clsx';
import { IoMdEyeOff } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { toggleLastRace } from '../../../slices/settingsSlice';
import CSSTransitionWrapper from '../../shared/CSSTransitionWrapper';

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
        className={clsx(
          'h-[148px] w-full bg-spoiler backdrop-blur-lg absolute shadow-4px rounded flex justify-center items-center cursor-pointer group',
          'dark:shadow-4px-dark',
          'md:h-[156px]'
        )}
        onClick={() => dispatch(toggleLastRace())}
      >
        <IoMdEyeOff />
        <span
          className={clsx(
            'ml-2 text-sm font-semibold duration-200 font-openSans',
            'group-hover:underline'
          )}
        >
          Show Race Results
        </span>
      </div>
    </CSSTransition>
  );
};
export default SpoilerOverlay;
