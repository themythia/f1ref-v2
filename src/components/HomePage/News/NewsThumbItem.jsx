import clsx from 'clsx';

const NewsThumbItem = ({ news, size }) => {
  const { title, link, image, description } = news;

  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      className={clsx(
        'rounded bg-bg-200 shadow-2px relative hidden',
        'dark:bg-bg-900 dark:shadow-2px-dark',
        'sm:flex',
        {
          'w-[calc((100%-8px)/2)] md:w-[calc((100%-12px)/2)]': size === 'big',

          'w-[calc((100%-16px)/3)] md:w-[calc((100%-24px)/3)]':
            size === 'small',
        }
      )}
    >
      <div className='overflow-hidden rounded group'>
        <img
          src={image}
          alt={description}
          className='duration-200 rounded group-hover:scale-105'
        />
        <div className='absolute bottom-0 w-full rounded bg-gradient-to-t from-bg-900'>
          <p
            className={clsx(
              'p-2 text-sm font-semibold font-openSans text-bg-50 drop-shadow',
              'group-hover:underline'
            )}
          >
            {title}
          </p>
        </div>
      </div>
    </a>
  );
};
export default NewsThumbItem;
