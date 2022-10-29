import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelector } from '../../../slices/settingsSlice';

const SelectorButton = ({ type, index, text, itemId }) => {
  const dispatch = useDispatch();
  const selectorState = useSelector((store) => store.settings.selector[type]);
  const disabledButtons = useSelector(
    (store) => store.settings.disabledSelector[type]
  );
  const [active, setActive] = useState(selectorState === index ? true : false);

  useEffect(() => {
    if (selectorState === index) setActive(true);
    else setActive(false);
  }, [selectorState, index]);

  return (
    <button
      className={clsx(
        'py-1 px-2 my-4 font-openSans text-sm border rounded-full border-bg-800 h-7 flex items-center select-none',
        'dark:border-bg-50',
        'disabled:line-through disabled:decoration-2 disabled:cursor-not-allowed',
        'disabled:hover:bg-bg-50 disabled:hover:dark:bg-bg-800',
        'md:my-6',
        {
          'bg-bg-800 text-bg-50 dark:bg-bg-50 dark:text-bg-800': active,
          'bg-bg-50 text-bg-800 duration-200': !active,
          'dark:bg-bg-800 dark:text-bg-50': !active,
          'hover:scale-105 hover:bg-bg-200 hover:dark:bg-bg-900': !active,
          'active:scale-100': !active,
        }
      )}
      onClick={() => dispatch(setSelector({ type, index }))}
      disabled={disabledButtons?.includes(index)}
    >
      {text}
    </button>
  );
};
export default SelectorButton;
