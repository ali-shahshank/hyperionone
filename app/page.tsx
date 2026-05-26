import './globals.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const page = () => {
  return (
    <>
      <Box sx={{ m: 0, p: 4, bgcolor: '#f7f7f7' }}>
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', fontWeight: '400' }}
        >
          The Ultimate AI Productivity Platform
        </Typography>
        <Typography variant="h3">Subheading Text</Typography>
      </Box>
    </>
  );
};

export default page;
