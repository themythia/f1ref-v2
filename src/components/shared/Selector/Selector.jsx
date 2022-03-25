import SelectorButton from './SelectorButton';
import SelectorScrollArrow from './SelectorScrollArrow';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import useDrag from '../../../utils/useDrag';
import { useEffect, useState } from 'react';

const Selector = (props) => {
  const [centered, setCentered] = useState(true);
  const { dragStart, dragStop, dragMove } = useDrag();

  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const [style, setStyle] = useState('gap-x-1');
  useEffect(() => {
    if (!centered) setStyle('flex flex-row justify-center gap-x-1');
    else setStyle('gap-x-1');
  }, [style, centered]);

  return (
    <div className='relative' onMouseLeave={dragStop}>
      <ScrollMenu
        LeftArrow={
          <SelectorScrollArrow setCentered={setCentered} direction='left' />
        }
        RightArrow={
          <SelectorScrollArrow setCentered={setCentered} direction='right' />
        }
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
