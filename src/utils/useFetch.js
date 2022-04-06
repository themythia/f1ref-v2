import { useEffect, useState } from 'react';

const useFetch = (url, dependency, shapeFunc, options) => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch(url, options);
        const data = await res.json();

        // sets response state
        // provided function shapes the response as needed
        setResponse(shapeFunc(data));
        setStatus(true);
        setLoading(false);
      } catch (error) {
        setError(error);
        setStatus(false);
        setLoading(true);
      }
    };

    fetchApi();
  }, dependency);

  return { loading, status, response, error };
};
export default useFetch;
