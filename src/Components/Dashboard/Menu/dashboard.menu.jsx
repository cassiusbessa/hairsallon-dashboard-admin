import React from 'react';
import { Box, IconButton, Typography, Link } from '@mui/material';

export default function DashMenu({ label, icon }) {
  return (
    <Box style={{ display: 'flex', alignItems: 'center' }}>
      <Link href={`${label.toLowerCase()}`}>
        <IconButton>
          {icon}
        </IconButton>
        <Typography variant="h7">{label}</Typography>
      </Link>
    </Box>
  );
}
