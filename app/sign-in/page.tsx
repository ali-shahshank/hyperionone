'use client';
import React from 'react';
import Nav from '@/components/Nav';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Divider from '@mui/material/Divider';

import Button from '@mui/material/Button';

const page = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <Nav />
      <Box
        sx={{
          p: 3,
          m: 0,
          gap: 3,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'black',
          height: '728px',
          width: '100%',
        }}
      >
        <Container
          sx={{
            height: '100%',
            maxWidth: '600px',
            m: 0,
            p: 3,
            bgcolor: 'white',
            borderRadius: '16px',
          }}
        >
          {/* Sign In Form */}
          <Box
            component="form"
            sx={{
              gap: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Stack
              sx={{
                m: 0,
                p: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              spacing={2}
            >
              <Typography variant="h4">Sign In</Typography>
              <Typography
                variant="h6"
                sx={{ color: 'rgba(0,0,0,0.7)', fontWeight: 400 }}
              >
                Please sign-in to your account.
              </Typography>
            </Stack>
            <Stack
              sx={{ width: '100%' }}
              spacing={2}
            >
              <Button
                variant="outlined"
                sx={{
                  borderRadius: 10,
                  width: '100%',
                  borderColor: 'black',
                  color: 'black',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.03)' },
                }}
                size="large"
              >
                Continue With Google
              </Button>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  justifyContent: 'space-between',
                }}
              >
                <Divider sx={{ borderColor: 'black' }} /> OR <Divider />
              </Box>
            </Stack>
            <Stack
              sx={{ width: '100%' }}
              spacing={2}
            >
              <TextField
                required
                id="outlined-required"
                label="Name"
                placeholder="John Doe"
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder="jdoe@example.com"
              />
              {/* Password Field */}
              <FormControl
                sx={{ m: 1, width: '100%' }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? 'hide the password'
                            : 'display the password'
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Stack>
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: 10,
                width: '100%',
                bgcolor: 'black',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.8)',
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </Container>
        <Container
          sx={{
            height: '100%',
            width: '100%',
            m: 0,
            p: 0,
            bgcolor: '#f9f9f9',
            borderRadius: '16px',
            border: 'var(--border-dark)',
          }}
        ></Container>
      </Box>
    </>
  );
};

export default page;
