import React, { useEffect, useState } from 'react';
import SearchForm from './components/searchForm';
import WeatherCard from './components/weatherCard';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    const apiKey = '4f2e6483e9ecb82fe3e2a5c5d1cadcde';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) 
        {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };
  useEffect(()=>{
    fetchWeather("London");
  },[])
  
  return (
    <div className="app">
      <h1 className='title'>Weather App</h1>
      <SearchForm fetchWeather={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default App;
