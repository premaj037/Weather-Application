import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h2 style={styles.title}>Sign up now</h2>
        <input style={styles.input} type="text" placeholder="First name" />
        <input style={styles.input} type="text" placeholder="Last name" />
        <input style={styles.input} type="email" placeholder="Email" />
        <input style={styles.input} type="password" placeholder="Password" />
        <button style={styles.button} onClick={handleSignUp}>Sign up</button>
        <p style={styles.text}>
          Already have an account? 
          <Link to="/login" style={styles.link}> Log in</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '0',
    height: '90vh',
    background: 'linear-gradient(135deg, #e0e0e0, #f9f9f9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px', // For better mobile responsiveness
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly higher opacity
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)', // Increased shadow for depth
    width: '100%',
    maxWidth: '400px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '24px',
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    backgroundColor: '#f7f7f7',
    color: '#333',
  },
  button: {
    padding: '12px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '18px',
    marginBottom: '20px',
    transition: 'background-color 0.3s ease',
  },
  text: {
    textAlign: 'center',
    color: '#333',
    fontSize: '14px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    marginLeft: '5px',
  },
};

export default SignUp;
