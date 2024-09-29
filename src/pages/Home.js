import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCheckWeather = () => {
    navigate('/weather'); // Navigate to the Weather page
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.subheading}>
        Your ultimate weather companion for accurate and real-time forecasts.
      </h3>
      <p style={styles.description}>
        With SkyCast, you get instant access to the latest weather conditions in any city. Stay informed about the temperature, humidity, wind speeds, and more with our easy-to-use interface.
      </p>
      <p style={styles.description}>
        Whether you're planning your day, a weekend getaway, or just curious about the current weather trends, SkyCast is here to provide you with the most reliable and updated forecasts.
      </p>
      <div style={styles.features}>
        <div style={styles.feature}>
          <h3>🌤 Real-Time Weather</h3>
          <p>
            Get the current weather for any location in the world, updated in real time.
          </p>
        </div>
        <div style={styles.feature}>
          <h3>📅 5-Day Forecast</h3>
          <p>
            Plan ahead with detailed forecasts for the next 5 days, including high/low temperatures, precipitation, and wind data.
          </p>
        </div>
        <div style={styles.feature}>
          <h3>🌍 Interactive Map</h3>
          <p>
            See live weather conditions on an interactive map and track the weather as it changes.
          </p>
        </div>
      </div>
      <div style={styles.cta}>
        <button style={styles.button} onClick={handleCheckWeather}> {/* Add onClick to navigate */}
          Check Weather Now
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px 20px',
    textAlign: 'center',
    background: '#f4f4f4', // Light gray background to complement the dark navbar
    color: '#333', // Matching text color to align with the navbar
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  subheading: {
    fontSize: '1.5em',
    marginBottom: '15px',
    color: '#555', // Slightly darker gray for contrast
  },
  description: {
    fontSize: '1.2em',
    margin: '10px 0',
    lineHeight: '1.6',
    color: '#666', // Softer contrast with the background
  },
  features: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '30px',
  },
  feature: {
    maxWidth: '250px',
    padding: '15px',
    background: '#fff', // White background for the feature boxes
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    color: '#333', // Darker text for readability
  },
  cta: {
    marginTop: '40px',
  },
  button: {
    padding: '12px 25px',
    fontSize: '1.2em',
    backgroundColor: '#0072ff', // Bright color to draw attention
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#005bb5',
  },
};

export default Home;
