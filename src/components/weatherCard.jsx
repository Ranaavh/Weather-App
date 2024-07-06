/*  eslint-disable react/prop-types */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faTint } from '@fortawesome/free-solid-svg-icons';

const WeatherCard = ({ weatherData }) => {
  const { name, main, weather } = weatherData;

  return (
    <div className="weather-card">
      <h2 className="city-name">{name}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
      />
      <p>{weather[0].description}</p>
      <div className="weather-details">
        <div className="weather-detail">
          <FontAwesomeIcon icon={faTemperatureHigh} />
          <p>Temperature: {main.temp}°C</p>
        </div>
        <div className="weather-detail">
          <FontAwesomeIcon icon={faTint} />
          <p>Humidity: {main.humidity}%</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
