const NewsListItem = ({ news }) => {
  const { title, link, image, description } = news;

  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      className={`sm:hidden rounded bg-bg-200 dark:bg-bg-900 shadow-2px dark:shadow-2px-dark relative`}
    >
      <div className='flex flex-row items-center w-full rounded shadow-2px dark:shadow-2px-dark bg-bg-200 dark:bg-bg-900 sm:hidden'>
        <div className='basis-2/5'>
          <img
            src={image}
            alt={description}
            className='rounded-l shadow-2px dark:shadow-2px-dark'
          />
        </div>
        <div className='basis-3/5 font-openSans font-semibold text-sm p-2 max-h-full h-full self-start'>
          <span className='line-clamp-3 '>{title}</span>
        </div>
      </div>
    </a>
  );
};
export default NewsListItem;
