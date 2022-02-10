const Container = ({ children, size }) => {
  return (
    <div
      className={`bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 max-w-full ${
        size === 'half' && 'md:w-[calc(50%-8px)]'
      }`}
    >
      {children}
    </div>
  );
};
export default Container;
