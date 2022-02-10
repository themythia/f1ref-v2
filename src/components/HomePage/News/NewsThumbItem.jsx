const NewsThumbItem = ({ news, size }) => {
  const { title, link, image, description } = news;

  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      className={`md:flex rounded bg-bg-200 dark:bg-bg-900 shadow-2px relative hidden ${
        size === 'big' ? 'w-[calc(50%-8px)]' : 'w-[calc((100%-32px)/3)]'
      }`}
    >
      <div className='overflow-hidden group rounded'>
        <img
          src={image}
          alt={description}
          className='rounded group-hover:scale-105 duration-200'
          loading='lazy'
        />
        <div className='w-full rounded absolute bottom-0 bg-gradient-to-t from-bg-800'>
          <p className='p-2 font-openSans font-semibold text-sm text-bg-50 drop-shadow group-hover:underline'>
            {title}
          </p>
        </div>
      </div>
    </a>
  );
};
export default NewsThumbItem;
