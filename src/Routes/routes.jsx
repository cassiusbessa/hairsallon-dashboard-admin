import React from 'react';
import { BrowserRouter as Router, Routes as Routers, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import Building from '../Pages/building';

function Routes() {
  return (
    <Router>
      <Routers>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients" element={<Dashboard />} />
        <Route path="/schedules" element={<Dashboard />} />
        <Route path="/addresses" element={<Dashboard />} />
        <Route path="/services" element={<Dashboard />} />
        <Route path="/building" element={<Building />} />
      </Routers>
    </Router>
  );
}

export default Routes;
