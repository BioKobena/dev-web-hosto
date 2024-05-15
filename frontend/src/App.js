// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Option from './components/Option';
import AuthInf from './pages/infirmier/Auth/AuthInf';
import AuthMed from './pages/medecin/Auth/AuthMed';
import AuthRec from './pages/receptionniste/Auth/AuthRec';
import AuthSage from './pages/sage-femme/Auth/AuthSage';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Option />} />
        <Route path="/infirmier" element={<AuthInf />} />
        <Route path="/medecin" element={<AuthMed />} />
        <Route path="/sage-femme" element={<AuthSage />} />
        <Route path="/receptionniste" element={<AuthRec />} />
        {/* Ajoutez d'autres routes pour d'autres spécialités ici */}
      </Routes>
    </Router>
  );
}

export default App;
