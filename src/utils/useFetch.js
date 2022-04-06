import { useEffect, useState } from 'react';

const useFetch = (url, dependency, shapeFunc, isFetched) => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        if (!isFetched) {
          const res = await fetch(url);
          const data = await res.json();

          // sets response state
          // provided function shapes the response as needed
          setResponse(shapeFunc(data));
          setStatus(true);
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        setStatus(false);
        setLoading(true);
      } finally {
        if (isFetched) {
          setStatus(true);
          setLoading(false);
        }
      }
    };

    fetchApi();
  }, dependency);

  return { loading, status, response, error };
};
export default useFetch;
