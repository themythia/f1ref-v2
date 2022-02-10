import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNews } from '../../../slices/newsSlice';
import Container from '../Container';
import scrapeNews from '../../../utils/scrapeNews';
import NewsList from './NewsList';

const News = () => {
  const dispatch = useDispatch();
  const newsArray = useSelector((store) => store.news);
  const [loading, setLoading] = useState(true);

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
      <NewsList loading={loading} newsArray={newsArray} />
    </Container>
  );
};
export default News;
