import NewsItem from './NewsItem';
import NewsItemSkeleton from './NewsItemSkeleton';

const NewsList = ({ loading, newsArray }) => {
  return (
    <div className='flex flex-col gap-y-2 md:flex-row md:flex-wrap md: gap-x-4 md:gap-y-4'>
      {loading &&
        [0, 1, 2, 3, 4].map((item, index) => (
          <NewsItemSkeleton key={index} size={index < 2 ? 'big' : 'small'} />
        ))}
      {!loading &&
        newsArray.map((news, index) => (
          <NewsItem
            key={index}
            news={news}
            size={index < 2 ? 'big' : 'small'}
          />
        ))}
    </div>
  );
};
export default NewsList;
