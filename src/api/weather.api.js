import axios from 'axios';

const WEATHER_URL = import.meta.env.VITE__WEATHER_API_URL;
const WEATHER_API_KEY = import.meta.env.VITE__WEATHER_API_KEY;

const WEATHER_ICON_URL = 'https://openweathermap.org/img/wn/__WEATHER_ICON__@2x.png';

export const fetchCityWeather = (city) => {

  return axios.get(WEATHER_URL, {
    params: {
      q: city,
      appid: WEATHER_API_KEY,
      lang: 'fr',
      units: 'metric'
    }
  }).then(({data}) => {
    console.log('Api data', data);

    return {
      temp: data.main.temp,
      tempFeelsLike: data.main.feels_like,
      desc: data.weather[0].description,
      iconUrl: WEATHER_ICON_URL.replace('__WEATHER_ICON__', data.weather[0].icon),
      city: data.name,
      country: data.sys.country
    };
  });
}