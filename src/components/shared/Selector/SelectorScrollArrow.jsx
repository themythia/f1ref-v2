import { useContext, useEffect, useState } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const SelectorScrollArrow = ({ type }) => {
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

  // tracks button visibility to decide disabling the arrow buttons
  useEffect(() => {
    if (initComplete) {
      if (type === 'left') setDisabled(isFirstItemVisible);
      else if (type === 'right') setDisabled(isLastItemVisible);
    }
  }, [type, isFirstItemVisible, isLastItemVisible, initComplete]);

  const handleClick = (type) => {
    if (type === 'left') scrollPrev();
    else if (type === 'right') scrollNext();
  };

  // dynamic Icon component that changes with type prop
  const icons = {
    left: MdChevronLeft,
    right: MdChevronRight,
  };
  const Icon = icons[type];
  const style =
    type === 'left'
      ? 'top-4 md:top-6 left-0 bg-gradient-to-r justify-start rounded-r-full'
      : 'bottom-4 md:bottom-6 right-0 bg-gradient-to-l justify-end rounded-l-full';

  return (
    <button
      disabled={disabled}
      onClick={() => handleClick(type)}
      className={`w-12 h-7 flex flex-row items-center z-10 from-bg-50 via-bg-50 to-bg-50/80 dark:from-bg-800 dark:via-bg-800 dark:to-bg-800/80 absolute group ${style} ${
        disabled && 'hidden'
      }`}
    >
      <Icon
        className={`h-7 w-7 border border-bg-800 dark:border-bg-50 rounded-full ${
          type === 'left' ? 'ml-1' : 'mr-1'
        }`}
      />
    </button>
  );
};

export default SelectorScrollArrow;
