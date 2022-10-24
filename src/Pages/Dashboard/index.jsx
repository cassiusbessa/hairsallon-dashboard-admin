import React from 'react';
import DrawerDash from '../../Components/Dashboard/Drawer/dashboard.drawer';
import Login from '../Login';

function Dashboard() {
  return (
    <DrawerDash>
      <Login />
    </DrawerDash>
  );
}

export default Dashboard;
