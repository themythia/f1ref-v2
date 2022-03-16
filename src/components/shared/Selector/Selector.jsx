import SelectorButton from './SelectorButton';
import { LeftArrow, RightArrow } from './SelectorScrollArrow';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import useDrag from '../../../utils/useDrag';

const Selector = (props) => {
  // todo
  // - track mouse down while on component
  // - if mouse moves
  // - scroll where the mouse is
  // - stop when mouse up

  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  return (
    <div className='relative m-auto' onMouseLeave={dragStop}>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}
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
