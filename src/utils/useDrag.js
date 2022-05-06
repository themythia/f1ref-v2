import { useCallback, useRef, useState } from 'react';
// from react-horizontal-scrolling-menu docs
// https://codesandbox.io/s/react-horizontal-scrolling-menu-v2-drag-by-mouse-o3u2t?file=/src/useDrag.ts
const useDrag = () => {
  const [clicked, setClicked] = useState(false);
  const [dragging, setDragging] = useState(false);
  const position = useRef(0);

  const dragStart = useCallback((e) => {
    position.current = e.clientX;
    setClicked(true);
  }, []);

  const dragStop = useCallback(() => {
    // NOTE: need some delay so item under cursor won't be clicked
    window.requestAnimationFrame(() => {
      setDragging(false);
      setClicked(false);
    });
  }, []);

  const dragMove = (e, callback) => {
    const newDiff = position.current - e.clientX;
    const movedEnough = Math.abs(newDiff) > 5;

    if (clicked && movedEnough) {
      setDragging(true);
    }

    if (dragging && movedEnough) {
      position.current = e.clientX;
      callback(newDiff);
    }
  };

  return {
    dragStart,
    dragStop,
    dragMove,
    dragging,
    position,
    setDragging,
  };
};
export default useDrag;
