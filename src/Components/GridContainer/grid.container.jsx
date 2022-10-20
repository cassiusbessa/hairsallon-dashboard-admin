import React from 'react';
import { Grid } from '@mui/material';

function GridContainer({ children }) {
  console.log(children);
  return (
    <Grid container spacing={children.length}>
      {children.map((elem) => (
        <Grid key={Math.random()} item xs={6} className={elem.props.className}>
          {elem}
        </Grid>
      ))}
    </Grid>
  );
}

export default GridContainer;
