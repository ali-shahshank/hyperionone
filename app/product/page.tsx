'use client';
import '../globals.css';
import { useTheme } from '@mui/material/styles';
import Nav from '@/components/Nav';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const page = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Nav />
      <Container
        component="main"
        sx={{
          mt: 8,
          mb: 2,
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
        >
          Product
        </Typography>
      </Container>
    </Box>
  );
};

export default page;
