import { MdWeb, MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='relative bottom-0 flex flex-col gap-y-2 w-screen p-4 sm:p-8 md:p-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] bg-bg-50 dark:bg-bg-800 shadow-2px dark:shadow-2px-dark font-openSans text-xs md:text-sm row-start-3 row-end-4'>
      <p>Made with ❤️ by Emir Al for personal use.</p>
      <p>
        This website is unofficial and is not associated in any way with the
        Formula One group of companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA
        ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of
        Formula One Licensing B.V.
      </p>
      <div className='flex flex-row w-full justify-center gap-x-4'>
        <a
          href='https://emir.al'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline text-bg-900 dark:text-bg-50 font-semibold'
        >
          <div className='flex flex-row gap-x-1 items-center'>
            <MdWeb size={20} />
            <span>Portfolio</span>
          </div>
        </a>
        <a
          href='https://github.com/themythia'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline text-bg-900 dark:text-bg-50 font-semibold'
        >
          <div className='flex flex-row gap-x-1 items-center'>
            <FaGithub size={20} />
            <span>GitHub</span>
          </div>
        </a>
        <a
          href='mailto:al.emir@outlook.com'
          className='hover:underline text-bg-900 dark:text-bg-50 font-semibold'
        >
          <div className='flex flex-row gap-x-1 items-center'>
            <MdEmail size={20} />
            <span>Mail</span>
          </div>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
