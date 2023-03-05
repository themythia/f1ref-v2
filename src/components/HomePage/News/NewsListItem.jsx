import clsx from 'clsx';

const NewsListItem = ({ news }) => {
  const { title, link, image, description } = news;

  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      className={clsx(
        'rounded bg-bg-200  shadow-2px relative min-h-[76px]',
        'dark:bg-bg-900 dark:shadow-2px-dark',
        'sm:hidden'
      )}
    >
      <div
        className={clsx(
          'flex flex-row items-center w-full h-full rounded shadow-2px bg-bg-200',
          'dark:shadow-2px-dark dark:bg-bg-900',
          'sm:hidden'
        )}
      >
        <div className='basis-2/5 min-h-[76px] overflow-hidden'>
          <img
            src={image}
            alt={description}
            className={clsx(
              'rounded-l shadow-2px min-h-[76px]',
              'dark:shadow-2px-dark'
            )}
          />
        </div>
        <div className='self-start h-full max-h-full p-2 text-sm font-semibold basis-3/5 font-openSans'>
          <span className='line-clamp-3 '>{title}</span>
        </div>
      </div>
    </a>
  );
};
export default NewsListItem;
