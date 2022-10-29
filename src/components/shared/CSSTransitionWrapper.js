import { CSSTransition } from 'react-transition-group';

const CSSTransitionWrapper = ({ classNames, children, inState }) => {
  return (
    <CSSTransition
      in={inState}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: 'animate__animated animate__faster ' + classNames.enter,
        exitActive: 'animate__animated animate__faster ' + classNames.exit,
      }}
      timeout={500}
    >
      {children}
    </CSSTransition>
  );
};
export default CSSTransitionWrapper;
