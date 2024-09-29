import React from 'react';
import {useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <div style={{ 
      marginTop: '0', // Ensure there's no margin at the top
      paddingTop: '0', // Remove any padding at the top
      height: '88vh', 
      background: 'linear-gradient(135deg, #e0e0e0, #f9f9f9)', // Subtle gradient background
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
    }}>
      <div style={{
        display: 'flex', 
        flexDirection: 'column', 
        backgroundColor: 'rgba(255, 255, 255, 0.7)', 
        backdropFilter: 'blur(20px)', 
        borderRadius: '15px', 
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)', 
        width: '100%', 
        maxWidth: '400px', 
        padding: '40px', 
        margin: '0', 
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ 
            fontWeight: 'bold', 
            marginBottom: '30px', 
            color: '#333', 
            fontSize: '24px'
          }}>Login</h2>
          <input 
            style={{ 
              width: '100%', 
              padding: '12px', 
              borderRadius: '5px', 
              border: '1px solid #ccc', 
              marginBottom: '15px', 
              backgroundColor: '#f7f7f7', 
              color: '#333', 
              fontSize: '16px'
            }} 
            type="text" 
            placeholder="Username" 
          />
          <input 
            style={{ 
              width: '100%', 
              padding: '12px', 
              borderRadius: '5px', 
              border: '1px solid #ccc', 
              marginBottom: '25px', 
              backgroundColor: '#f7f7f7', 
              color: '#333', 
              fontSize: '16px'
            }} 
            type="password" 
            placeholder="Password" 
          />
          <button style={{
            width: '100%', 
            padding: '12px', 
            borderRadius: '5px', 
            border: 'none', 
            backgroundColor: '#007bff', 
            color: '#fff',
            cursor: 'pointer', 
            fontSize: '18px',
            transition: 'background-color 0.3s ease', 
          }}
          onClick={handleLogin}
          onMouseOver={e => e.target.style.backgroundColor = '#0056b3'} 
          onMouseOut={e => e.target.style.backgroundColor = '#007bff'}
          >Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
