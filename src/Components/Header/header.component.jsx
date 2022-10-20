import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            aria-controls="menu-appbar2"
            aria-haspopup="true"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar2"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={(event) => { handleClose(event); }}>Home</MenuItem>
            <MenuItem onClick={(event) => { handleClose(event); }}>Login</MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hair Sallon
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
