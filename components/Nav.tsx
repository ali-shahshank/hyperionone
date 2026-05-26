'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountIcon from '@mui/icons-material/AccountCircle';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

const pages = ['Product', 'Blog', 'Resources', 'Pricing'];
const settings = [
  { title: 'Settings', icon: <SettingsIcon /> },
  { title: 'Logout', icon: <AccountIcon /> },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: 'transparent', boxShadow: 'none' }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 0,
              display: 'flex',
              fontWeight: 500,
              letterSpacing: '0rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Hyperion
          </Typography>
          {/* Nav Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, i) => (
              <Button
                key={i}
                onClick={handleCloseNavMenu}
                sx={{
                  color: 'black',
                  display: 'block',
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.03)',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* Nav Buttons */}
          <Box sx={{ gap: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              variant="text"
              sx={{
                color: 'black',
                borderRadius: '24px',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.03)',
                },
              }}
            >
              Sign-In
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: 'black',
                borderColor: 'black',
                borderRadius: '24px',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.03)',
                },
              }}
            >
              Get Started
            </Button>
          </Box>
          {/* Mobile Nav Menu */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none', bgcolor: 'none' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <MenuIcon sx={{ color: 'black' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ minWidth: '400px', display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Typography sx={{ m: 0, p: 0, textAlign: 'center' }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
              <Divider />
              {settings.map((settings, i) => (
                <MenuItem
                  key={i}
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <IconButton>{settings.icon}</IconButton>
                  <Typography sx={{ m: 0, p: 0, textAlign: 'center' }}>
                    {settings.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
