const Menu = () => {
  return (
    <div className='bg-bg-50 dark:bg-bg-800 w-screen h-[calc(100vh-56px)] mt-14 px-4'>
      <ul className='font-poppins text-lg pt-4 pb-2 border-b border-bg-300'>
        <li className='mb-2'>Home</li>
        <li className='mb-2'>Schedule</li>
        <li className='mb-2'>Drivers</li>
        <li className='mb-2'>Constructors</li>
      </ul>
      <ul className='font-poppins text-lg pt-4'>
        <li className='mb-2'>
          <span>Dark Theme</span>
        </li>
        <li className='mb-2'>
          <span>Measurement Unit</span>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
