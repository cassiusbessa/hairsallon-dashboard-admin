import React from 'react';
import { BrowserRouter as Router, Routes as Routers, Route } from 'react-router-dom';

function Routes() {
  return (
    <Router>
      <Routers>
        <Route path="/" element={window.localStorage.getItem('tokenAccs') === null ? <Login /> : <Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routers>
    </Router>
  );
}

export default Routes;
