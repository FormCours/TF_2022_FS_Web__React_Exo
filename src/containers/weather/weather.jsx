import SearchBar from '../../components/search-bar/search-bar';
import { useState, useCallback } from 'react';
import WeatherFetcher from '../../components/weather/weather-fetcher';


const Weather = () => {

  const [city, setCity] = useState(null);
  const handleSearch = useCallback((queryCity) => {
    // useCallback -> Mémorisation de la fonction
    //                Évite de régénrer de la fonction
    setCity(queryCity);
  }, []);

  return (
    <>
      <h2>Recherche la météo</h2>
      <SearchBar
        label={'Veuillez entrer le nom d\'une ville'}
        btnText='Recherche...'
        onSearch={handleSearch}
      />
      {city && (
        <WeatherFetcher city={city} />
      )}
    </>
  );
};

export default Weather;