import SelectorButton from './SelectorButton';
import SelectorScrollArrow from './SelectorScrollArrow';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import useDrag from '../../../utils/useDrag';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Selector = (props) => {
  const { dragStart, dragStop, dragMove } = useDrag();
  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  // state for deciding if the scroll div needs to centered or not
  const selectorSize = useSelector(
    (store) => store.settings.selectorSize[props.type]
  );

  const [style, setStyle] = useState('gap-x-1');
  useEffect(() => {
    if (!selectorSize) setStyle('flex flex-row justify-center gap-x-1');
    else setStyle('gap-x-1');
  }, [style, selectorSize]);

  return (
    <div className='relative' onMouseLeave={dragStop}>
      <ScrollMenu
        LeftArrow={<SelectorScrollArrow type={props.type} direction='left' />}
        RightArrow={<SelectorScrollArrow type={props.type} direction='right' />}
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}
        scrollContainerClassName={style}
      >
        {props.options.map((session, index) => (
          <SelectorButton
            itemId={index.toString()}
            key={index}
            text={session}
            index={index}
            type={props.type}
          />
        ))}
      </ScrollMenu>
    </div>
  );
};
export default Selector;
