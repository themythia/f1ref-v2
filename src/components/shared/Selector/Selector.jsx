// import SelectorButton from './SelectorButton';
// import { useLayoutEffect, useRef, useState } from 'react';
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

// const Selector = (props) => {
//   const [activeButton, setActiveButton] = useState(0);
//   const [overflow, setOverflow] = useState(false);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const [showLeft, setShowLeft] = useState(false);
//   const [showRight, setShowRight] = useState(false);

//   const divRef = useRef();

//   const labels = {
//     normalSession: ['FP1', 'FP2', 'FP3', 'Quali', 'Race'],
//     sprintSession: ['FP1', 'Quali', 'FP2', 'Sprint', 'Race'],
//     race: ['Schedule', 'Circuit'],
//     afterRace: ['Circuit', 'Results'],
//     driver: ['Achievements', ...props.driver],
//     standings: ['Drivers', 'Constructors'],
//   };

//   useLayoutEffect(() => {
//     if (
//       divRef.current.getBoundingClientRect().width < divRef.current.scrollWidth
//     )
//       setOverflow(true);
//     else setOverflow(false);
//   }, [scrollLeft]);

//   useLayoutEffect(() => {
//     console.log(
//       'scrollLeft + divRef.current.getBoundingClientRect().width - 64',
//       scrollLeft + divRef.current.getBoundingClientRect().width
//     );
//     console.log('divRef.current.scrollWidth', divRef.current.scrollWidth);
//     divRef.current.addEventListener('scroll', () =>
//       setScrollLeft(divRef.current.scrollLeft)
//     );

//     if (scrollLeft > 0) setShowLeft(true);
//     else if (
//       scrollLeft + divRef.current.getBoundingClientRect().width ===
//       divRef.current.scrollWidth
//     ) {
//       console.log('-----------------------------------------------');
//       setShowLeft(true);
//       setShowRight(false);
//     } else if (scrollLeft === 0) {
//       setShowRight(true);
//       setShowLeft(false);
//     }

//     return () =>
//       divRef.current.removeEventListener('scroll', () =>
//         setScrollLeft(divRef.current.scrollLeft)
//       );
//   }, [scrollLeft]);

//   console.log('scrollLeft:', scrollLeft);
//   // console.log(scrollLeft + divRef.current.getBoundingClientRect().width - 64);

//   return (
//     <div className='relative'>
//       {overflow && showLeft && (
//         <button className='absolute mt-4 h-7 w-7 rounded-full bg-bg-800 text-bg-50 flex flex-row justify-center items-center'>
//           <MdChevronLeft />
//         </button>
//       )}
//       <div className='max-w-full overflow-auto' ref={divRef}>
//         <div
//           className={`py-2 my-2 md:py-3 md:my-3 overflow-hidden flex gap-x-2 justify-center min-w-fit ${
//             overflow && 'px-8'
//           }`}
//         >
//           {labels[props.type].map((session, index) => (
//             <SelectorButton
//               key={index}
//               text={session}
//               active={props.active === index}
//               setActive={props.setActive}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//       {overflow && showRight && (
//         <button className='absolute top-0 right-0 mt-4 h-7 w-7 rounded-full bg-bg-800 text-bg-50 flex flex-row justify-center items-center'>
//           <MdChevronRight />
//         </button>
//       )}
//     </div>
//   );
// };
// export default Selector;

import SelectorButton from './SelectorButton';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useLayoutEffect, useRef, useState } from 'react';
const Selector = (props) => {
  const [scroll, setScroll] = useState(0);
  const divRef = useRef();
  const innerRef = useRef();
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  console.log('scrollLeft:', scroll);

  useLayoutEffect(() => {
    divRef.current.addEventListener('scroll', () =>
      setScroll(divRef.current.scrollLeft)
    );
    if (divRef && divRef.current) {
      console.log('outerDiv - scrollWidth', divRef.current.scrollWidth);
      console.log('outerDiv - clientWidth', divRef.current.clientWidth);
    }
    if (divRef.current.scrollWidth > divRef.current.clientWidth) {
      if (scroll === 0) {
        setShowLeft(false);
        setShowRight(true);
      } else if (
        scroll ===
        divRef.current.scrollWidth - divRef.current.clientWidth
      ) {
        setShowLeft(true);
        setShowRight(false);
      } else {
        setShowLeft(true);
        setShowRight(true);
      }
    }
  }, [scroll]);

  return (
    <div className='relative'>
      {showLeft && (
        <button
          className={`w-12 h-7 flex flex-row justify-center items-center z-10 bg-bg-50/80 absolute top-4 md:top-6 left-0`}
          onClick={() => (divRef.current.scrollLeft -= 150)}
        >
          <MdChevronLeft className='text-xl border border-bg-800 rounded-full' />
        </button>
      )}

      <div className='max-w-full overflow-auto scroll-smooth' ref={divRef}>
        <div
          className='py-2 my-2 md:py-3 md:my-3 overflow-hidden flex gap-x-2 justify-center min-w-fit'
          ref={innerRef}
        >
          {props.options.map((session, index) => (
            <SelectorButton
              key={index}
              text={session}
              index={index}
              type={props.type}
            />
          ))}
        </div>
      </div>
      {showRight && (
        <button
          className='w-7 h-7 flex flex-row justify-center items-center z-10 bg-bg-50/80 absolute bottom-4 md:bottom-6 right-0'
          onClick={() => (divRef.current.scrollLeft += 150)}
        >
          <MdChevronRight className='text-xl' />
        </button>
      )}
    </div>
  );
};
export default Selector;
