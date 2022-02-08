const SelectorButton = (props) => {
  return (
    <button
      className={`py-1 px-2 font-openSans text-sm border rounded-full border-bg-800 dark:border-bg-50 h-7 flex items-center ${
        props.active
          ? 'bg-bg-800 text-bg-50 dark:bg-bg-50 dark:text-bg-800'
          : 'bg-bg-50 text-bg-800 dark:bg-bg-800 dark:text-bg-50'
      }`}
      onClick={() => props.setActive(props.index)}
    >
      {props.text}
    </button>
  );
};
export default SelectorButton;
