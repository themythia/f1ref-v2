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
      className={`py-1 px-2 my-4 md:my-6 font-openSans text-sm border rounded-full border-bg-800 dark:border-bg-50 h-7 flex items-center select-none disabled:line-through disabled:decoration-2 disabled:hover:bg-bg-50 disabled:hover:dark:bg-bg-800 disabled:cursor-not-allowed ${
        active
          ? 'bg-bg-800 text-bg-50 dark:bg-bg-50 dark:text-bg-800'
          : 'bg-bg-50 hover:bg-bg-200 duration-200 text-bg-800 dark:bg-bg-800 hover:dark:bg-bg-900 dark:text-bg-50 hover:scale-105 active:scale-100'
      }`}
      onClick={() => dispatch(setSelector({ type, index }))}
      disabled={disabledButtons?.includes(index)}
    >
      {text}
    </button>
  );
};
export default SelectorButton;
