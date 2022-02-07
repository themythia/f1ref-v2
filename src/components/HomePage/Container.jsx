const Container = ({ children }) => {
  return (
    <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 mt-4 max-w-full'>
      {children}
    </div>
  );
};
export default Container;
