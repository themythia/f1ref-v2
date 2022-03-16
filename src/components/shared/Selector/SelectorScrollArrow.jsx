import { useContext, useEffect, useState } from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Arrow = ({ children, disabled, onClick, twClasses }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={twClasses}>
      {children}
    </button>
  );
};

export const LeftArrow = () => {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleItemsWithoutSeparators,
    initComplete,
  } = useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  const twClasses = `w-12 h-7 flex flex-row items-center z-10 from-bg-50 via-bg-50 to-bg-50/80 dark:from-bg-800 dark:via-bg-800 dark:to-bg-800/80 absolute group top-4 md:top-6 left-0 bg-gradient-to-r rounded-r-full justify-start ${
    disabled && 'hidden'
  }`;

  return (
    <Arrow
      disabled={disabled}
      onClick={() => scrollPrev()}
      twClasses={twClasses}
    >
      <MdChevronLeft className='h-7 w-7 border border-bg-800 dark:border-bg-50 rounded-full ml-1' />
    </Arrow>
  );
};

export const RightArrow = () => {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
    useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  const twClasses = `w-12 h-7 flex flex-row items-center z-10 from-bg-50 via-bg-50 to-bg-50/80 dark:from-bg-800 dark:via-bg-800 dark:to-bg-800/80 absolute group bottom-4 md:bottom-6 right-0 bg-gradient-to-l rounded-l-full justify-end ${
    disabled && 'hidden'
  }`;

  return (
    <Arrow
      disabled={disabled}
      onClick={() => scrollNext()}
      twClasses={twClasses}
    >
      <MdChevronRight className='h-7 w-7 border border-bg-800 dark:border-bg-50 rounded-full mr-1' />
    </Arrow>
  );
};

// import React from 'react';

// import { VisibilityContext } from 'react-horizontal-scrolling-menu';

// function Arrow({ children, disabled, onClick }) {
//   return (
//     <button
//       disabled={disabled}
//       onClick={onClick}
//       style={{
//         cursor: 'pointer',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         right: '1%',
//         opacity: disabled ? '0' : '1',
//         userSelect: 'none',
//       }}
//     >
//       {children}
//     </button>
//   );
// }

// export function LeftArrow() {
//   const {
//     isFirstItemVisible,
//     scrollPrev,
//     visibleItemsWithoutSeparators,
//     initComplete,
//   } = React.useContext(VisibilityContext);

//   const [disabled, setDisabled] = React.useState(
//     !initComplete || (initComplete && isFirstItemVisible)
//   );
//   React.useEffect(() => {
//     // NOTE: detect if whole component visible
//     if (visibleItemsWithoutSeparators.length) {
//       setDisabled(isFirstItemVisible);
//     }
//   }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

//   return (
//     <Arrow disabled={disabled} onClick={() => scrollPrev()}>
//       Left
//     </Arrow>
//   );
// }

// export function RightArrow() {
//   const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
//     React.useContext(VisibilityContext);

//   // console.log({ isLastItemVisible });
//   const [disabled, setDisabled] = React.useState(
//     !visibleItemsWithoutSeparators.length && isLastItemVisible
//   );
//   React.useEffect(() => {
//     if (visibleItemsWithoutSeparators.length) {
//       setDisabled(isLastItemVisible);
//     }
//   }, [isLastItemVisible, visibleItemsWithoutSeparators]);

//   return (
//     <Arrow disabled={disabled} onClick={() => scrollNext()}>
//       Right
//     </Arrow>
//   );
// }
