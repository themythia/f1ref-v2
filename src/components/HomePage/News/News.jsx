import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNews } from '../../../slices/newsSlice';
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
    <div className='bg-bg-50 dark:bg-bg-800 rounded shadow-2px p-4 md:p-6 w-full col-span-full mb-4 md:mb-6'>
      <p className='font-poppins text-lg text-bg-800 dark:text-bg-50 mb-4 md:mb-6'>
        News:
      </p>
      <NewsList loading={loading} newsArray={newsArray} />
    </div>
  );
};
export default News;
