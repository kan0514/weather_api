import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather() {
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const fetchWeatherData = () => {
    const apiKey = '7b4eba487b8f195a01ad85737f60d2bf'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        // Log the response data in JSON format to the console
        console.log('Weather Data:', response.data);
        
        // Set the weather data in the state
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData();
    }
  });

  return (
    <div>
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleCityChange}
          />
        </div>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
        <button type="submit">Fetch Weather</button>
      </form>
      {weatherData ? (
        <div>
          <h2>Weather Data (JSON):</h2>
          <pre>{JSON.stringify(weatherData, null, 2)}</pre>
          
          <h2>Weather Data (Table):</h2>
          <table style={{ border: '3px solid rgb(0, 0, 0)' }}>lid rgb(0, 0, 0)"}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Temperature (°C)</th>
                <th>Humidity (%)</th>
              </tr>
            </thead>
            <tbody>
              {weatherData.list.map((item) => {
                const date = new Date(item.dt * 1000);
                const dateString = date.toDateString();
                return (
                  <tr key={item.dt}>
                    <td>{dateString}</td>
                    <td>{item.main.temp}</td>
                    <td>{item.main.humidity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Weather;
