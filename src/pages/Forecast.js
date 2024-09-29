import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Forecast = () => {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('New York'); // Default city
  const apiKey = '88359e86bd43cbc2c3e6f1be1d101073'; // Replace with your OpenWeatherMap API key

  useEffect(() => {
    fetchForecast();
  }, [city]);

  const fetchForecast = async () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await axios.get(apiUrl);
      setForecastData(response.data.list);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
      setLoading(false);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      fetchForecast();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>Next 5-Day Forecast with 3hrs Interval</h3>
        <div style={styles.searchBar}>
          <div style={styles.inputContainer}>
            <FontAwesomeIcon icon={faSearch} style={styles.iconSearch} />
            <input
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="Enter city"
              onKeyPress={handleSearch}
              style={styles.input}
            />
          </div>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th>Date</th>
              <th>Time</th>
              <th>Temperature (°C)</th>
              <th>Humidity (%)</th>
              <th>Wind Speed (m/s)</th>
              <th>Description</th>
              <th>Icon</th>
            </tr>
          </thead>
          <tbody>
            {forecastData.map((item) => (
              <tr key={item.dt} style={styles.tableRow}>
                <td>{new Date(item.dt * 1000).toLocaleDateString()}</td>
                <td>{new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                <td>{item.main.temp}°C</td>
                <td>{item.main.humidity}%</td>
                <td>{item.wind.speed} m/s</td>
                <td>{item.weather[0].description}</td>
                <td>
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt="Weather icon"
                    style={styles.icon}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginTop: '0px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  title: {
    margin: 0,
    borderBottom: '2px solid #28a745',
    paddingBottom: '10px',
    marginRight: '20px',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    padding: '10px 10px 10px 40px', // Add padding for the icon
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #28a745',
    outline: 'none',
    width: '200px',
  },
  iconSearch: {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#28a745',
  },
  table: {
    marginTop: '20px',
    borderCollapse: 'collapse',
    width: '100%',
  },
  tableHeader: {
    background: 'linear-gradient(90deg, #28a745, #5cb85c)',
    color: '#fff',
    fontWeight: 'bold',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  icon: {
    width: '50px',
    height: '50px',
  },
};

export default Forecast;
