import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import BasicGrid from 'app/components/grid/BasicGrid';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.n-juan.com/">
        n-juan
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <BasicGrid />
        <Copyright />
      </Box>
    </Container>
  );
}