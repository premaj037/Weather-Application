import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCloudSun, faCalendarAlt, faMapMarkedAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div>
        <h1>SkyCast</h1>
      </div>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>
            <FontAwesomeIcon icon={faHome} style={styles.icon} /> Home
          </Link>
        </li>
        <li>
          <Link to="/weather" style={styles.link}>
            <FontAwesomeIcon icon={faCloudSun} style={styles.icon} /> Weather
          </Link>
        </li>
        <li>
          <Link to="/forecast" style={styles.link}>
            <FontAwesomeIcon icon={faCalendarAlt} style={styles.icon} /> Forecast
          </Link>
        </li>
        <li>
          <Link to="/map" style={styles.link}>
            <FontAwesomeIcon icon={faMapMarkedAlt} style={styles.icon} /> Map
          </Link>
        </li>
        <li>
          <Link to="/signup" style={styles.link}>
            <FontAwesomeIcon icon={faUserPlus} style={styles.icon} /> SignUp
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '0px 15px', // Reduced padding to make navbar shorter
    color: '#fff',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1em',
  },
  icon: {
    marginRight: '0px', // Space between icon and text
  },
};

export default Navbar;
