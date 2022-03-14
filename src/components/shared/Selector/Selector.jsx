import SelectorButton from './SelectorButton';

const Selector = (props) => {
  return (
    <div className='max-w-full overflow-auto'>
      <div className='py-2 my-2 md:py-3 md:my-3 overflow-hidden flex gap-x-2 justify-center min-w-fit'>
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
  );
};
export default Selector;
