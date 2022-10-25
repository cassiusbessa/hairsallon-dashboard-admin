import React from 'react';
import { Box, Grid, useTheme, Paper } from '@mui/material';
import PieChart from '../../Components/Charts/Pie';
import LineChart from '../../Components/Charts/Line';

export default function Building() {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1, margin: theme.spacing(2) }}>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{ height: theme.spacing(30) }}>
          <Paper sx={{ height: '100%' }}>
            <LineChart />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ height: '100%' }}>
            <PieChart />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
