import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNews } from '../../../slices/newsSlice';
import scrapeNews from '../../../utils/scrapeNews';
import Error from '../../shared/Error';
import NewsList from './NewsList';

const News = () => {
  const dispatch = useDispatch();
  const newsArray = useSelector((store) => store.news);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    scrapeNews().then((data) => {
      if (data.length === 0) setError(true);
      else {
        dispatch(addNews(data));
        setLoading(false);
      }
    });
  }, [dispatch]);

  return (
    <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px dark:shadow-2px-dark p-4 md:p-6 w-full col-span-full mb-4 md:mb-6'>
      <p className='font-poppins text-lg text-bg-800 dark:text-bg-50 mb-4 md:mb-6'>
        News:
      </p>
      {error && <Error />}
      <NewsList loading={loading} newsArray={newsArray} />
    </div>
  );
};
export default News;
