const SelectorButton = (props) => {
  return (
    <button
      className={`py-1 px-2 font-openSans text-sm border rounded-full border-bg-800 dark:border-bg-50 h-7 flex items-center ${
        props.active
          ? 'bg-bg-800 text-bg-50 dark:bg-bg-50 dark:text-bg-800'
          : 'bg-bg-50 hover:bg-bg-200 duration-200 text-bg-800 dark:bg-bg-800 hover:dark:bg-bg-900 dark:text-bg-50 hover:scale-105 active:scale-100'
      }`}
      onClick={() => props.setActive(props.index)}
    >
      {props.text}
    </button>
  );
};
export default SelectorButton;
