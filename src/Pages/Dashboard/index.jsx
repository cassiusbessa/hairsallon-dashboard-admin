import React from 'react';
import DrawerDash from '../../Components/Dashboard/Drawer/dashboard.drawer';
import Building from '../building';
import MenuAppBar from '../../Components/Header/header.component';

function Dashboard() {
  return (
    <DrawerDash>
      <MenuAppBar />
      <Building />
    </DrawerDash>
  );
}

export default Dashboard;
