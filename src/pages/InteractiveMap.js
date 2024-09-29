import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const InteractiveMap = () => {
  const [city, setCity] = useState('New York');
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({ lat: 40.7128, lon: -74.0060 });
  const [nearbyCities, setNearbyCities] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = '88359e86bd43cbc2c3e6f1be1d101073'; // Your API key

  const fetchWeatherData = async (city) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeatherData(response.data);
      setLocation({ lat: response.data.coord.lat, lon: response.data.coord.lon });
      fetchNearbyCities(response.data.coord.lat, response.data.coord.lon);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const fetchNearbyCities = async (lat, lon) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=30&appid=${API_KEY}&units=metric`);
      setNearbyCities(response.data.list);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      fetchWeatherData(city);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.searchContainer}>
        <input 
          type="text" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          placeholder="Enter city" 
          style={styles.input}
          onKeyPress={handleSearch} // Search on Enter key
        />
        <FontAwesomeIcon icon={faSearch} style={styles.iconSearch} onClick={() => fetchWeatherData(city)} />
      </div>

      {loading ? (
        <p style={styles.loading}>Loading...</p>
      ) : (
        <MapContainer center={[location.lat, location.lon]} zoom={10} style={styles.map}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker 
            position={[location.lat, location.lon]} 
            icon={L.divIcon({
              className: 'custom-icon',
              html: `<img src="${getWeatherIconUrl(weatherData.weather[0].icon)}" style="width: 50px; height: 50px;" />`,
              iconSize: [50, 50],
            })}
          >
            <Popup>
              {`${weatherData.name}: ${weatherData.main.temp}°C`}
            </Popup>
          </Marker>
          {nearbyCities.map((city) => (
            <Marker 
              key={city.id} 
              position={[city.coord.lat, city.coord.lon]} 
              icon={L.divIcon({
                className: 'custom-icon',
                html: `<img src="${getWeatherIconUrl(city.weather[0].icon)}" style="width: 40px; height: 40px;" />`,
                iconSize: [40, 40],
              })}
            >
              <Popup>
                {`${city.name}: ${city.main.temp}°C`}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    width: '99vw',
    overflow: 'hidden',
  },
  searchContainer: {
    position: 'absolute',
    top: '5px',
    right: '5px', // Move to the right end
    display: 'flex',
    alignItems: 'center',
    zIndex: 1000,
  },
  input: {
    padding: '10px 40px 10px 10px', // Adjust padding to make space for the icon
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #007bff',
    outline: 'none',
    width: '150px',
    position: 'relative', // To position the icon inside
  },
  iconSearch: {
    position: 'absolute',
    right: '10px', // Place the icon inside the input box
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    color: '#007bff',
    fontSize: '20px',
  },
  loading: {
    fontSize: '1.5em',
    color: '#666',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
  },
  map: {
    height: '100%',
    width: '100%',
    zIndex: 0,
  },
};

export default InteractiveMap;
