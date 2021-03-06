import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Forecast from '../components/forecast';
// import Chart from '../components/chart';
// import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const tempsK = cityData.list.map(weather => weather.main.temp);
    const tempsF = tempsK.map( array => Math.round(array * (9/5) - 459.67));
    const dates = cityData.list.map(date => date.dt_txt.split(" ")[0]);
    const noDuplicateDatesArray = dates.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    });
    const cityDateTemps = {};

  dates.map((date,index) => {
    if(cityDateTemps.hasOwnProperty(date)){
      cityDateTemps[date].daytemps.push(tempsF[index]);
      cityDateTemps[date].avg = average(cityDateTemps[date].daytemps);
    } else {
      cityDateTemps[date] = {};
      cityDateTemps[date].daytemps = [];
      cityDateTemps[date].daytemps.push(tempsF[index]);
      cityDateTemps[date].avg = average(cityDateTemps[date].daytemps);
    }
  });

  function average (data) {
    return _.round(_.sum(data)/data.length);
  }

  const dateTemps = Object.keys(cityDateTemps);
  const avgArray = dateTemps.map((date)=> cityDateTemps[date].avg);

  console.log(avgArray);

    // const descriptionArray = cityData.list.map(des => des.weather);
    // const description = descriptionArray.map(data => data[0].description);

    // const averageTempsArray = [];
    // const indexOfArray = [];
    // let tempValueOfTemps = [];
    // for (var i = 0; i < dates.length; i++) {
    //   if (dates[i] == noDuplicateDatesArray[0]) {
    //     indexOfArray.push(i)
    //   }
    // }
    // for (var i = 0; i < tempsF.length; i++) {
    //   for (var j = 0; j < indexOfArray.length; j++){
    //     if (indexOfArray[j] == i) {
    //       tempValueOfTemps.push(tempsF[i]);
    //     }
    //   }
    // }



    // const pressures = cityData.list.map(weather => weather.main.pressure);
    // const humidities = cityData.list.map(weather => weather.main.humidity);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;

    return<tr key={name}>
      <td>{name}</td>
      <td> <Forecast temps={avgArray} dates={noDuplicateDatesArray}/> </td>
      {/* <td> <GoogleMap lon={lon} lat={lat} /> </td>
      <td><Chart data={tempsF} color="orange" units="F"/></td>
      <td><Chart data={pressures} color="green" units="hPa"/></td>
      <td><Chart data={humidities} color="black" units="%"/></td> */}
    </tr>
  }

  render () {
    return <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Forecast</th>
          {/* <th>Pressure (hPa)</th>
          <th>Humidity (%)</th> */}
        </tr>
      </thead>
      <tbody>
          {this.props.weather.map(this.renderWeather)}
      </tbody>
    </table>
  }
}

function mapStateToProps(state){
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
