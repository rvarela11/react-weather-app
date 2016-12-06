import React from 'react';

export default (props) => {
  return <div className="divForecast">
    <ul>
      { props.temps.map(function(newList){
        return <li>{newList}℉</li>
      })}
    </ul>
    <ul>
      { props.dates.map(function(newList){
        return <li>{newList}</li>
      })}
    </ul>
    {/* <ul>
      { props.des.map(function(newList){
        return <li>{newList}</li>
      })}
    </ul> */}
  </div>
}
