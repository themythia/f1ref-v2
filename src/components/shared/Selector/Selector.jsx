import SelectorButton from './SelectorButton';
import SelectorScrollArrow from './SelectorScrollArrow';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import useDrag from '../../../utils/useDrag';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const Selector = (props) => {
  const [centered, setCentered] = useState(true);
  const { dragStart, dragStop, dragMove } = useDrag();

  const handleDrag =
    ({ scrollContainer }) =>
    (e) =>
      dragMove(e, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

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
        scrollContainerClassName={clsx({
          'gap-x-1': centered,
          'flex flex-row justify-center gap-x-1': !centered,
        })}
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
