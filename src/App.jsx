import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, useTheme } from '@mui/material';
import Routes from './Routes/routes';

function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
