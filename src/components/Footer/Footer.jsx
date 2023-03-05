import { MdWeb, MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import FooterLink from './FooterLink';
import clsx from 'clsx';

const Footer = () => {
  return (
    <footer
      className={clsx(
        'relative bottom-0 flex flex-col gap-y-2 w-screen p-4 bg-bg-50 shadow-2px font-openSans text-xs row-start-3 row-end-4',
        'dark:bg-bg-800 dark:shadow-2px-dark',
        'sm:p-8',
        'md:p-6 md:text-sm',
        'lg:px-[200px]',
        'xl:px-[calc((100vw-1128px)/2)]'
      )}
    >
      <p>Made with ❤️ by Emir Al for personal use.</p>
      <p>
        This website is unofficial and is not associated in any way with the
        Formula One group of companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA
        ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of
        Formula One Licensing B.V.
      </p>
      <div className='flex flex-row justify-center w-full gap-x-4'>
        <FooterLink href='https://emir.al' Icon={MdWeb} content='Portfolio' />
        <FooterLink
          href='https://github.com/themythia'
          Icon={FaGithub}
          content='GitHub'
        />
        <FooterLink
          href='mailto:al.emir@outlook.com'
          Icon={MdEmail}
          content='Mail'
        />
      </div>
    </footer>
  );
};
export default Footer;
