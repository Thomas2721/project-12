import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  
  const [weather, setWeather] = useState({
    temperature: null,
    rain: null,
    humidity: null,
    windSpeed: null,
    cityName: null,
  })
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const API_KEY = "493ed8e8b3d32b19f0acbcca833b311d";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ API_KEY }`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      const temperatureInCelsius = data.main.temp - 273.15;
      setWeather({
        temperature: temperatureInCelsius.toFixed(2),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        rain: data.weather[0].description,
        cityName : data.name,
      });
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
   <>
      <div style={{ textAlign: "center", padding: "20px" }}>
       
        <SearchBar onSearch={fetchWeather} />
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {weather && <WeatherDisplay weather={weather} />}
      </div>
   </>
  );
};

export default App;
