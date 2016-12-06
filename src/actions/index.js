import axios from 'axios';

const API_KEY ='d5a64cd308104f09b52527a21c4f8d2b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const GET_WEATHER = 'GET_WEATHER';

export function getWeather (city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: GET_WEATHER,
    payload: request
  }
}
