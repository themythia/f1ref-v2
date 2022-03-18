import { useContext, useEffect, useState } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { setSelectorSize } from '../../../slices/settingsSlice';

const SelectorScrollArrow = ({ type, direction }) => {
  // context from react-horizontal-scrolling-menu package
  const {
    isFirstItemVisible,
    isLastItemVisible,
    scrollNext,
    scrollPrev,
    initComplete,
  } = useContext(VisibilityContext);

  // state for disabling arrow button
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  // tracks button visibility to decide disabling the arrow buttons
  useEffect(() => {
    if (initComplete) {
      if (direction === 'left') setDisabled(isFirstItemVisible);
      else if (direction === 'right') setDisabled(isLastItemVisible);
      if (isFirstItemVisible && isLastItemVisible) {
        dispatch(setSelectorSize({ type, size: false }));
      } else dispatch(setSelectorSize({ type, size: true }));
    }
  }, [
    direction,
    isFirstItemVisible,
    isLastItemVisible,
    initComplete,
    dispatch,
    type,
  ]);

  const handleClick = (direction) => {
    if (direction === 'left') scrollPrev();
    else if (direction === 'right') scrollNext();
  };

  // dynamic Icon component that changes with direction prop
  const icons = {
    left: MdChevronLeft,
    right: MdChevronRight,
  };
  const Icon = icons[direction];
  const style =
    direction === 'left'
      ? 'top-4 md:top-6 left-0 bg-gradient-to-r justify-start rounded-r-full'
      : 'bottom-4 md:bottom-6 right-0 bg-gradient-to-l justify-end rounded-l-full';

  return (
    <button
      disabled={disabled}
      onClick={() => handleClick(direction)}
      className={`w-12 h-7 flex flex-row items-center z-10 from-bg-50 via-bg-50 to-bg-50/80 dark:from-bg-800 dark:via-bg-800 dark:to-bg-800/80 absolute group ${style} ${
        disabled && 'hidden'
      }`}
    >
      <Icon
        className={`h-7 w-7 border border-bg-800 dark:border-bg-50 rounded-full ${
          direction === 'left' ? 'ml-1' : 'mr-1'
        }`}
      />
    </button>
  );
};

export default SelectorScrollArrow;
