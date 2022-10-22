import React, { useState } from 'react';

import { Divider, Typography, Box, IconButton, Container, Button, styled } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { People, Dashboard, RoomService, Bookmark, ImportContacts, ChevronRight, ChevronLeft } from '@mui/icons-material';

const menuItem = {
  alignItems: 'center',
};

const openedMixin = (theme) => ({
  width: theme.spacing(30),
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(5)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(5)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: theme.spacing(30),
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function SideBar({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Drawer variant="permanent" anchor="left" open={open}>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={() => setOpen(!open)}>
            {open ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
          <Typography variant="h7">Hair Sallon</Typography>

        </Box>
        <Divider />
        <Box display="flex" style={menuItem}>
          <IconButton>
            <Dashboard />
          </IconButton>
          <Typography variant="h7">Dashboard</Typography>
        </Box>
        <Box display="flex" style={menuItem}>
          <IconButton>
            <People />
          </IconButton>
          <Typography variant="h7">Clients</Typography>
        </Box>
        <Box display="flex" style={menuItem}>
          <IconButton>
            <ImportContacts />
          </IconButton>
          <Typography variant="h7">Schedules</Typography>
        </Box>
        <Box display="flex" style={menuItem}>
          <IconButton>
            <RoomService />
          </IconButton>
          <Typography variant="h7">Schedules</Typography>
        </Box>
        <Box display="flex" style={menuItem}>
          <IconButton>
            <Bookmark />
          </IconButton>
          <Typography variant="h7">Schedules</Typography>
        </Box>
      </Drawer>

      <Box height="100vh">
        <Button type="button" onClick={() => setOpen(!open)}>Oi</Button>
        {children}
      </Box>
    </Container>
  );
}

export default SideBar;
