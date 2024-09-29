import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('New York'); // Default city
  const [loading, setLoading] = useState(true);
  const [tempUnit, setTempUnit] = useState('C'); // 'C' for Celsius, 'F' for Fahrenheit

  const apiKey = '88359e86bd43cbc2c3e6f1be1d101073'; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    fetchWeather();
  }, [city]);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setLoading(false);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const toggleTempUnit = () => {
    setTempUnit(tempUnit === 'C' ? 'F' : 'C');
  };

  const convertTemperature = (temp) => {
    return tempUnit === 'F' ? (temp * 9) / 5 + 32 : temp; // Celsius to Fahrenheit
  };

  const currentTempCelsius = weatherData ? weatherData.main.temp : null;
  const currentTempFahrenheit = currentTempCelsius !== null ? (currentTempCelsius * 9) / 5 + 32 : null;

  // Determine background image based on temperature
  const backgroundImage = currentTempCelsius !== null && (
    (tempUnit === 'C' && currentTempCelsius < 20) || 
    (tempUnit === 'F' && currentTempFahrenheit < 60)
  )
  ? 'url(https://hips.hearstapps.com/hmg-prod/images/cold-quotes-1575930075.jpg)' // Path to your cold image
  : 'url(https://assets.weforum.org/article/image/VJg_VTfgB2yGpznGDtbwELfyUnTVboflJYywfvseCVY.jpg)'; // Path to your hot image

  return (
    <div style={{ ...styles.body, backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div style={styles.container}>
        <h3 style={styles.heading}>Real-Time Weather</h3>
        <div style={styles.search}>
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={handleCityChange}
            style={styles.input}
          />
          <button onClick={fetchWeather} style={styles.button}>
            Get Weather
          </button>
        </div>

        {loading ? (
          <p style={styles.loading}>Loading...</p>
        ) : (
          weatherData && (
            <div style={styles.weatherInfo}>
              <div style={styles.currentSection}>
                <div style={styles.verticalInfo}>
                  <div style={styles.cityName}>{weatherData.name}</div>
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt="Weather icon"
                    style={styles.icon}
                  />
                  <div style={styles.description}>{weatherData.weather[0].description}</div>
                </div>
                <div style={styles.temperature}>
                  {convertTemperature(weatherData.main.temp).toFixed(2)}° {tempUnit}
                </div>
              </div>
              <div style={styles.infoSection}>
                <div style={styles.infoBox}>
                  <h4>Humidity</h4>
                  <p>{weatherData.main.humidity}%</p>
                </div>
                <div style={styles.infoBox}>
                  <h4>Wind Speed</h4>
                  <p>{weatherData.wind.speed} m/s</p>
                </div>
                <div style={styles.infoBox}>
                  <h4>Pressure</h4>
                  <p>{weatherData.main.pressure} hPa</p>
                </div>
                <div style={styles.infoBox}>
                  <h4>Feels Like</h4>
                  <p>{convertTemperature(weatherData.main.feels_like).toFixed(2)}° {tempUnit}</p>
                </div>
                <div style={styles.infoBox}>
                  <h4>Min Temp</h4>
                  <p>{convertTemperature(weatherData.main.temp_min).toFixed(2)}° {tempUnit}</p>
                </div>
                <div style={styles.infoBox}>
                  <h4>Max Temp</h4>
                  <p>{convertTemperature(weatherData.main.temp_max).toFixed(2)}° {tempUnit}</p>
                </div>
              </div>
              <button onClick={toggleTempUnit} style={styles.toggleButton}>
                Show in {tempUnit === 'C' ? 'Fahrenheit' : 'Celsius'}
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const styles = {
  body: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align at the top
  },
  container: {
    width: '700px', // Adjust width as needed
    padding: '20px',
    paddingTop: '0px',
    textAlign: 'center',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    marginTop: '0px', // No margin to remove gap
  },
  heading: {
    fontSize: '1.5em',
    color: '#343a40',
    marginBottom: '10px',
  },
  search: {
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginRight: '10px',
    borderRadius: '8px',
    border: '1px solid #007bff',
    outline: 'none',
    width: '250px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  loading: {
    fontSize: '1.5em',
    color: '#666',
  },
  weatherInfo: {
    marginTop: '10px',
    padding: '15px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  currentSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Two columns
    alignItems: 'center', // Center vertically
    marginBottom: '10px',
  },
  verticalInfo: {
    display: 'flex',
    flexDirection: 'column', // Vertical layout
    alignItems: 'center',
  },
  cityName: {
    fontSize: '1.5em',
    color: '#343a40',
    textAlign: 'center',
    marginBottom: '3px',
  },
  temperature: {
    fontSize: '3em',
    fontWeight: 'bold',
    color: '#ff5733',
    textAlign: 'center',
  },
  description: {
    fontSize: '1.5em',
    color: '#495057',
    textAlign: 'center',
    marginTop: '3px',
  },
  icon: {
    width: '50px',
    height: '50px',
    margin: '3px 0',
  },
  infoSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
    gap: '10px',
    marginTop: '10px',
  },
  infoBox: {
    backgroundColor: '#e9ecef',
    borderRadius: '10px',
    padding: '5px',
    textAlign: 'center',
  },
  toggleButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default Weather;
