import { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = () => setMenuState(!menuState);

  return (
    <nav className='fixed flex items-center justify-center h-14 w-full bg-bg-50 dark:bg-bg-800 px-4 shadow-2px'>
      <button onClick={toggleMenu} className='absolute left-4'>
        {menuState ? <MdClose size={32} /> : <MdMenu size={32} />}
      </button>
      <p className='font-kronaOne text-2xl text-center'>
        F1<span className='text-mercedes'>/</span>REF
      </p>
    </nav>
  );
};
export default Navbar;
