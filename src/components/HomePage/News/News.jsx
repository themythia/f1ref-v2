import clsx from 'clsx';
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
    <div
      className={clsx(
        'w-full p-4 mb-4 rounded bg-bg-50 shadow-2px col-span-full',
        'dark:bg-bg-800 dark:shadow-2px-dark',
        'md:p-6 md:mb-6'
      )}
    >
      <p
        className={clsx(
          'mb-4 text-lg font-poppins text-bg-80',
          'dark:text-bg-50',
          'md:mb-6'
        )}
      >
        News:
      </p>
      {error && <Error />}
      <NewsList loading={loading} newsArray={newsArray} />
    </div>
  );
};
export default News;
