const NewsItem = ({ news }) => {
  const { title, link, image, description } = news;

  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <div className='flex flex-col rounded bg-bg-200 dark:bg-bg-900 max-w-full shadow-2px relative'>
        <img src={image} alt={description} className='rounded' />
        <div className='w-full absolute bottom-0 bg-gradient-to-t from-bg-800'>
          <p className='p-2 font-openSans font-semibold text-sm text-bg-50 drop-shadow hover:underline'>
            {title}
          </p>
        </div>
      </div>
    </a>
  );
};
export default NewsItem;
