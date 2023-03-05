import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';

const CSSTransitionWrapper = ({ classNames, children, inState }) => {
  const { enter, exit } = classNames;
  return (
    <CSSTransition
      in={inState}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: clsx('animate__animated animate__faster', enter),
        exitActive: clsx('animate__animated animate__faster', exit),
      }}
      timeout={500}
    >
      {children}
    </CSSTransition>
  );
};
export default CSSTransitionWrapper;
