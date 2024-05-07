import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calcom from './components/calcom';
import Eventt from './components/event';
import Landingpage from './components/landing';
import Afroshipper from './components/afroshipper';

const Routerr = () => {
  return (
    <Router>
    <Routes>
    <Route  path="/" element={<Landingpage />} />
    <Route  path="/afroshipper" element={<Afroshipper />} />
      <Route  path="/calcom" element={<Calcom />} />
      <Route  path="/event" element={<Eventt />} />
    </Routes>
  </Router>
  )
  
}

export default Routerr
