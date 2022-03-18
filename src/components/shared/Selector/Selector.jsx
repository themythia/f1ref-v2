import SelectorButton from './SelectorButton';
import SelectorScrollArrow from './SelectorScrollArrow';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import useDrag from '../../../utils/useDrag';
import { useState } from 'react';

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

  const [style, setStyle] = useState('');
  // const apiRef = useRef(null);

  // useEffect(() => {
  //   if (style === 'flex flex-row justify-center') return;
  //   if (apiRef && apiRef.current) {
  //     const interval = setInterval(() => {
  //       console.log('interval');
  //       if (apiRef.current.initComplete) {
  //         if (
  //           apiRef.current.isFirstItemVisible &&
  //           apiRef.current.isLastItemVisible
  //         ) {
  //           console.log('class set');
  //           setStyle('flex flex-row justify-center');
  //         }
  //       }
  //     }, [10]);

  //     const timeOut = setTimeout(() => {
  //       console.log('clearInterval');
  //       clearInterval(interval);
  //     }, 1500);

  //     console.log('apiRef', apiRef);
  //     console.log('apiRef.current', apiRef.current.initComplete);

  //     return () => {
  //       console.log('clear useEffect');
  //       clearInterval(interval);
  //       clearTimeout(timeOut);
  //     };
  //   }
  // }, [style]);

  return (
    <div className='relative' onMouseLeave={dragStop}>
      <ScrollMenu
        LeftArrow={<SelectorScrollArrow type='left' />}
        RightArrow={<SelectorScrollArrow type='right' />}
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}
        // apiRef={apiRef}
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
