import { useEffect, useState } from 'react';
import { fetchCityWeather } from '../api/weather.api';
import { useCallback } from 'react';

export const useFetchWeather = (city) => {
  // Les states necessaire au Hook
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [timeRequest, setTimeRequest] = useState(new Date());

  useEffect(() => {
    // Lance la requete API
    fetchCityWeather(city)
      .then(data => setData(data))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));

    return () => {
      // Reset quand on change la ville
      setLoading(true);
      setData(null);
      setError(null);
    };
  }, [city, timeRequest]);

  const reload = useCallback(() => {
    setTimeRequest(new Date())
  }, []);

  return { isLoading, data, error, reload };
};

