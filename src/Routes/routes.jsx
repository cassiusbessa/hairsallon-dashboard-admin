import React from 'react';
import { BrowserRouter as Router, Routes as Routers, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';

function Routes() {
  return (
    <Router>
      <Routers>
        <Route path="/" element={<Login />} />
        <Route path="/board" element={<Dashboard />} />
      </Routers>
    </Router>
  );
}

export default Routes;
