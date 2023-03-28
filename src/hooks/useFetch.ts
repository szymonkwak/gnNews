import { useState } from 'react';

/**
 * Hook for sending GET request
 * @param url url for request
 * @returns function for fetching data, `error` and `loading` state
 */
function useFetch<Data>() {
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async (url: string): Promise<Data> => {
    setLoading(true);
    let data;
    try {
      const response = await fetch(url, { headers: { 'x-api-key': process.env.VITE_NEWS_API_KEY! } });
      data = await response.json();
      if (response.status >= 400 && response.status <= 499) setError(response.status);
      return response.ok ? data : null;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
    return data;
  };

  return { fetchData, error, loading };
}

export default useFetch;
