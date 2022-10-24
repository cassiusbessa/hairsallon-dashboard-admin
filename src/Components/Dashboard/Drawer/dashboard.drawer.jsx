import React, { useState } from 'react';
import { Divider, Typography, Box, IconButton, useTheme } from '@mui/material';
import { People, Dashboard, RoomService, ChevronRight, ChevronLeft } from '@mui/icons-material';
import * as Styled from './Styled';
import DashMenu from '../Menu/dashboard.menu';

const menuItems = [
  { label: 'Dashboard', icon: <Dashboard /> },
  { label: 'Clients', icon: <People /> },
  { label: 'Schedules', icon: <RoomService /> },
];

function DrawerDash({ children }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  return (
    <>
      <Styled.Drawer variant="permanent" anchor="left" open={open}>

        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={() => setOpen(!open)}>
            {open ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
          <Typography variant="h7">Hair Sallon</Typography>
        </Box>

        <Divider />

        {menuItems.map((item) => <DashMenu key={item.label} label={item.label} icon={item.icon} />)}

      </Styled.Drawer>

      <Styled.MainContainer height="100vh" style={{ marginLeft: open ? theme.spacing(25) : theme.spacing(5) }} onClick={() => setOpen(false)}>
        {children}
      </Styled.MainContainer>
    </>
  );
}

export default DrawerDash;
