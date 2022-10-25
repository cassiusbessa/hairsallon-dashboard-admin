import React from 'react';
import { Grid, Paper, useTheme } from '@mui/material';

function getSizes(arr) {
  const results = [8, 4];
  for (let i = 0; (arr.length - 2) > i; i += 1) {
    if (i % 2 === 0) results.push(results[i + 1]);
    else results.push(results[i - 1]);
  }
  return results;
}
export default function ChartGrid({ children }) {
  const theme = useTheme();
  const sizes = getSizes(children);
  return (
    <Grid container spacing={2}>
      {children.map((elem, index) => (
        <Grid key={Math.random()} item xs={sizes[index]} sx={{ height: theme.spacing(30) }}>
          <Paper sx={{ height: '100%' }}>
            {elem}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
