import { SwitchTransition, CSSTransition } from 'react-transition-group';

const SwitchTransitionWrapper = ({ state, children }) => {
  return (
    <SwitchTransition mode='out-in'>
      <CSSTransition
        key={state}
        classNames={{
          enterActive: 'animate__animated animate__fadeIn animate__faster',
          exitActive: 'animate__animated animate__fadeOut animate__faster',
        }}
        timeout={200}
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
};
export default SwitchTransitionWrapper;
