import { useEffect, useState } from 'react';

export const useFetch = (url, dependency, shapeFunc, isFetched) => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const paginatedFetch = async (currentPage, pageCount, url) => {
    try {
      const res = await fetch(
        url + `?limit=1000&offset=${1000 * (currentPage - 1)}`
      );
      const data = await res.json();
      let races = data.MRData.RaceTable.Races;

      if (currentPage < pageCount) {
        return races.concat(
          await paginatedFetch(currentPage + 1, pageCount, url)
        );
      } else return races;
    } catch {
      setError(error);
      setStatus(false);
      setLoading(true);
    }
  };

  useEffect(() => {
    const fetchApi = async () => {
      try {
        if (!isFetched) {
          let res = await fetch(url);
          let data = await res.json();

          // pagination test code start

          // ergast api has a limit of 1000 results per page with default limit 30
          // for api calls with results more than 30 needs a ?limit=limit
          // at the end of endpoint url

          // for api calls with results more than 1000 needs paginated fetches

          const total = data.MRData.total;
          if (total > 1000) {
            const pageCount = Math.ceil(total / 1000);
            data = await paginatedFetch(1, pageCount, url);
          } else if (total > 30) {
            res = await fetch(url + `?limit=${total}`);
            data = await res.json();
          }

          // sets response state
          // provided function shapes the response as needed
          setResponse(shapeFunc(data));
          setStatus(true);
          setLoading(false);
          setError(null);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependency);

  return { loading, status, response, error };
};
