const FooterLink = ({ href, Icon, content }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='font-semibold text-bg-900 dark:text-bg-50 hover:underline'
    >
      <div className='flex flex-row items-center gap-x-1'>
        <Icon size={20} />
        <span>{content}</span>
      </div>
    </a>
  );
};
export default FooterLink;
