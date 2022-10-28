import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import Building from '../Pages/building';

function Routes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Login />,
    }, {
      path: '/dashboard',
      element: <Dashboard />,
    }, {
      path: '/clients',
      element: <Dashboard />,
    }, {
      path: '/schedules',
      element: <Dashboard />,
    }, {
      path: '/addresses',
      element: <Dashboard />,
    }, {
      path: '/services',
      element: <Dashboard />,
    }, {
      path: '/building',
      element: <Building />,
    },
  ]);

  return routes;
}

export default Routes;
