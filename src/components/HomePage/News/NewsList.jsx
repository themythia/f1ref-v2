import clsx from 'clsx';
import NewsItem from './NewsItem';
import NewsItemSkeleton from './NewsItemSkeleton';

const NewsList = ({ loading, newsArray }) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-y-2',
        'sm:flex-row sm:flex-wrap sm:gap-x-2 sm:gap-y-2',
        'md:gap-x-3 md:gap-y-3'
      )}
    >
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
