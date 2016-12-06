import React, { Component } from 'react';
import SearchBar from '../containers/search';
import WeatherList from '../containers/weatherlist';

export default class App extends Component {

  render() {
    return <div>
      <h1 className="logo">Weather App</h1>
      <SearchBar/>
      <WeatherList/>
    </div>
    ;
  }
}
