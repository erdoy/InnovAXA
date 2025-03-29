import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ActivityDetailPage from './pages/ActivityDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal (Home) */}
        <Route path="/" element={<Home />} />
        {/* Ruta a la nueva página de actividad */}
        <Route path="/activity" element={<ActivityDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
