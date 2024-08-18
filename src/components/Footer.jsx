import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ padding: 2, marginTop: 'auto', backgroundColor: '#f1f1f1' }}>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} NewsApp. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
