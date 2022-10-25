import React from 'react';
import { Box, useTheme } from '@mui/material';
import PieChart from '../../Components/Charts/Pie';
import LineChart from '../../Components/Charts/Line';
import ChartGrid from '../../Components/ChartGrid';

export default function Building() {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1, margin: theme.spacing(2), display: 'flex' }}>
      <ChartGrid>
        <LineChart />
        <PieChart />
        <PieChart />
        <LineChart />
      </ChartGrid>
    </Box>
  );
}
