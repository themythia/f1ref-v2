import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const SelectorScrollArrow = (props) => {
  const style =
    props.direction === 'left'
      ? 'top-4 md:top-6 left-0 bg-gradient-to-r rounded-r-full justify-start'
      : 'bottom-4 md:bottom-6 right-0 bg-gradient-to-l rounded-l-full justify-end';

  const iconStyle = props.direction === 'left' ? 'ml-1' : 'mr-1';

  const icons = {
    left: MdChevronLeft,
    right: MdChevronRight,
  };

  const Icon = icons[props.direction];

  if (props.direction === 'left' && !props.showLeft) return null;
  if (props.direction === 'right' && !props.showRight) return null;

  return (
    <button
      className={`w-12 h-7 flex flex-row items-center z-10 from-bg-50 via-bg-50 to-bg-50/80 dark:from-bg-800 dark:via-bg-800 dark:to-bg-800/80 absolute group ${style}`}
      onClick={() => props.onClick()}
    >
      <Icon
        className={`h-7 w-7 border border-bg-800 dark:border-bg-50 rounded-full  ${iconStyle}`}
      />
    </button>
  );
};
export default SelectorScrollArrow;
