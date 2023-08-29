import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/Home/HomePage';
import DogDetail from './components/Detail/DogDetail';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail/:id" element={<DogDetail />} />
        {/* Agrega aquí otras rutas si es necesario */}
      </Routes>
    </div>
  );
}

export default App;
