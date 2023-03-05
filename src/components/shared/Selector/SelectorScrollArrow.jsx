import clsx from 'clsx';
import { useContext, useEffect, useState } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const SelectorScrollArrow = ({ direction, setCentered }) => {
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
      if (direction === 'left') setDisabled(isFirstItemVisible);
      else if (direction === 'right') setDisabled(isLastItemVisible);
      if (isFirstItemVisible && isLastItemVisible) {
        setCentered(false);
      } else setCentered(true);
    }
  }, [
    direction,
    isFirstItemVisible,
    isLastItemVisible,
    initComplete,
    setCentered,
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

  return (
    <button
      disabled={disabled}
      onClick={() => handleClick(direction)}
      className={clsx(
        'w-12 h-7 flex flex-row items-center z-10 from-bg-50 via-bg-50 to-bg-50/80 absolute group',
        'dark:from-bg-800 dark:via-bg-800 dark:to-bg-800/80',
        {
          'top-4 md:top-6 left-0 bg-gradient-to-r justify-start rounded-r-full':
            direction === 'left',
          'bottom-4 md:bottom-6 right-0 bg-gradient-to-l justify-end rounded-l-full':
            direction !== 'left',
          hidden: disabled,
        }
      )}
    >
      <Icon
        className={clsx(
          'h-7 w-7 border border-bg-800 rounded-full',
          'dark:border-bg-50',
          {
            'ml-1': direction === 'left',
            'mr-1': direction !== 'left',
          }
        )}
      />
    </button>
  );
};

export default SelectorScrollArrow;
