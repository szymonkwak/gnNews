import { useEffect, useState } from 'react';

/**
 * Hook for sending GET request
 * @param url url for request
 * @returns `data`, `error` and `loading` state
 */
function useFetch<Data>(url: string) {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await fetch(url, { headers: { Authorization: process.env.VITE_NEWS_API_KEY! } });
        const data = await response.json();
        if (response.ok) setData(data);
        if (response.status >= 400 && response.status <= 499) setError(response.status);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
