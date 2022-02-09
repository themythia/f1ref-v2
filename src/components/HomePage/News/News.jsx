import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNews } from '../../../slices/newsSlice';
import Container from '../Container';
import scrapeNews from '../../../utils/scrapeNews';
import NewsItem from './NewsItem';

const News = () => {
  const dispatch = useDispatch();
  const newsArray = useSelector((store) => store.news);

  useEffect(() => {
    scrapeNews().then((data) => dispatch(addNews(data)));
  }, [dispatch]);

  return (
    <Container>
      <p className='font-poppins text-lg text-bg-800 dark:text-bg-50 mb-4'>
        News:
      </p>
      <div className='flex flex-col gap-y-2'>
        {newsArray.map((news, index) => (
          <NewsItem key={index} news={news} />
        ))}
      </div>
    </Container>
  );
};
export default News;
