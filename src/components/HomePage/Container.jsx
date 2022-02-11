const Container = ({ children, size, padding }) => {
  return (
    <div
      className={`bg-bg-50 dark:bg-bg-800 rounded shadow-2px lg:p-6 max-w-full ${
        size === 'half' && 'md:w-[calc(50%-8px)]'
      } ${padding === '8' ? 'p-2' : 'p-4'}`}
    >
      {children}
    </div>
  );
};
export default Container;
