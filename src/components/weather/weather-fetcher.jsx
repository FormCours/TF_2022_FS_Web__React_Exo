import { useFetchWeather } from '../../hooks/weather.hook';

const WeatherFetcher = ({ city }) => {

  const { isLoading, data, error, reload } = useFetchWeather(city);

  return (
    <>
      {isLoading ? (
        <WeatherLoading />
      ) : error ? (
        <WeatherError error={error} />
      ) : data && (
        <>
        <button onClick={reload}>Reload</button>
        <WeatherDisplay {...data} />
        </>
      )}
    </>
  );
};

const WeatherLoading = () => (
  <h3>Chargement des données de météo... ☀</h3>
);

const WeatherError = ({ error }) => (
  <h3>Une erreur s'est produite : {error}</h3>
);

const WeatherDisplay = ({ temp, tempFeelsLike, desc, iconUrl, city, country }) => (
  <>
    <h3>Météo de {city} ({country})</h3>
    <p>Temperature : {temp} °C</p>
    <p>Temperature ressentie : {tempFeelsLike} °C</p>
    <img src={iconUrl} alt={'Icon de la météo : ' + desc} />
  </>
);

export default WeatherFetcher;