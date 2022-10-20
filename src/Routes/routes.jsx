import React from 'react';
import { BrowserRouter as Router, Routes as Routers, Route } from 'react-router-dom';
import Login from '../Pages/login';

function Routes() {
  return (
    <Router>
      <Routers>
        <Route path="/" element={<Login />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routers>
    </Router>
  );
}

export default Routes;
