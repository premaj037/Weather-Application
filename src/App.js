import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Weather from './pages/Weather';
import Forecast from './pages/Forecast';
import InteractiveMap from './pages/InteractiveMap';  
import Login from './pages/Login';  
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/map" element={<InteractiveMap />} />
      </Routes>
    </Router>
  );
}

export default App;
