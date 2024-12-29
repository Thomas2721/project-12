import React from "react";
import './weatherDisplay.css'

const WeatherDisplay = ({ weather }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="display1">
        <div className="temp">
         <p>{weather.cityName}</p>
         <p>{weather.temperature} </p>
        </div>
        <div className="rain"> 
          <p>{weather.rain}</p>
        </div>
      </div>
      <div className="display2">
        
      <div>
          <p>{weather.temperature || "  "}</p>
          <p>Feels Like</p>
        </div>
        
        <div >
          <p>{weather.humidity || "  "}</p>
          <p>Humidity</p>
        </div>
       <div>
          <p>{weather.windSpeed || "  "} m/s</p>
          <p>Wind Speed</p>
       </div>
       
      </div>
    </div>
  );
};

export default WeatherDisplay;
