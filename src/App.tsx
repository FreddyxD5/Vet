import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './containers/Home';
import About from './containers/About';
import Login from './containers/auth/Login';
import Error from './containers/errors/Error404';
import MisMascotas from './containers/pages/MisMascotas';
import Perfil from './containers/pages/Perfil';


function App() {
  return (
   <Router>
    <Routes>
      {/* ErrorPage */}
      <Route  path="*" element={<Error />}></Route>
      <Route  path="/" element={<Home />}></Route>
      <Route  path="/about" element={<About />}></Route>
      <Route  path="/login" element={<Login />}></Route>
      <Route  path="/mis_mascotas" element={<MisMascotas />}></Route>
      <Route  path="/perfil" element={<Perfil />}></Route>
            
    </Routes>
   </Router>
  );
}

export default App;
