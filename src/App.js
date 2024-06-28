import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import TirePage from './Components/TirePage';
import BatteryPage from './Components/BatteryPage';
import ExteriorPage from './Components/ExteriorPage';
import BrakesPage from './Components/BrakesPage';
import VoiceOfCustomerPage from './Components/VoiceOfCustomerPage';  
import EnginePage from './Components/EnginePage';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tire" element={<TirePage />} />
        <Route path="/battery" element={<BatteryPage />} />
        <Route path="/exterior" element={<ExteriorPage />} />
        <Route path="/brakes" element={<BrakesPage />} />
        <Route path="/engine" element={<EnginePage />} />
        <Route path="/voice-of-customer" element={<VoiceOfCustomerPage />} />  
      </Routes>
    </Router>
  );
};

export default App;
