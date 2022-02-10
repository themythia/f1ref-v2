import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNews } from '../../../slices/newsSlice';
import Container from '../Container';
import scrapeNews from '../../../utils/scrapeNews';
import NewsItem from './NewsItem';
import NewsItemSkeleton from './NewsItemSkeleton';

const News = () => {
  const dispatch = useDispatch();
  const newsArray = useSelector((store) => store.news);
  console.log('newsArray:', newsArray);
  const [loading, setLoading] = useState(true);
  console.log('loading:', loading);

  useEffect(() => {
    scrapeNews().then((data) => {
      dispatch(addNews(data));
      setLoading(false);
    });
  }, [dispatch]);

  return (
    <Container>
      <p className='font-poppins text-lg text-bg-800 dark:text-bg-50 mb-4'>
        News:
      </p>
      <div className='flex flex-col gap-y-2'>
        {loading &&
          [0, 1, 2, 3, 4].map((item, index) => (
            <NewsItemSkeleton key={index} />
          ))}
        {!loading &&
          newsArray.map((news, index) => <NewsItem key={index} news={news} />)}
      </div>
    </Container>
  );
};
export default News;
