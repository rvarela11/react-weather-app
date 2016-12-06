import { combineReducers } from 'redux';
import GetWeather from './get_weather';

const rootReducer = combineReducers({
  weather: GetWeather
});

export default rootReducer;
