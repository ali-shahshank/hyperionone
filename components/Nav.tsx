'use client';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
  Button,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { TertiaryButton } from './tertiary-button';
import { SecondaryButton } from './secondary-button';

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const pages = [
    { name: 'Product', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources', icon: <ArrowDropDownIcon /> },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: 'transparent',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Toolbar
          sx={{
            px: { xs: 2, md: 3 },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Typography sx={{ fontSize: '24px', color: 'black' }}>
              Logo
            </Typography>
          </Link>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                variant="text"
                sx={{
                  color: 'black',
                  borderRadius: '24px',
                  '&:hover': { backgroundColor: 'rgba(0,0,0,0.05)' },
                }}
                href="/sign-in"
              >
                Sign-in
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: 'black',
                  borderColor: 'black',
                  borderRadius: '24px',
                  '&:hover': {
                    backgroundColor: 'black',
                    color: 'white',
                  },
                }}
                href="/sign-up"
              >
                Get Started
              </Button>
            </Box>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: '#ffffff' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          bgcolor: '#000000',
          width: 280,
          borderLeft: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: '#ffffff' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <ListItem disablePadding>
            <Link
              href="/sign-in"
              style={{ width: '100%', textDecoration: 'none' }}
              onClick={() => setDrawerOpen(false)}
            >
              <TertiaryButton
                label="Sign In"
                fullWidth
                sx={{
                  color: 'rgba(255,255,255,0.6)',
                  justifyContent: 'flex-start',
                  '&:hover': {
                    color: '#ffffff',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                  },
                }}
              />
            </Link>
          </ListItem>

          <ListItem disablePadding>
            <Link
              href="/sign-up"
              style={{ width: '100%', textDecoration: 'none' }}
              onClick={() => setDrawerOpen(false)}
            >
              <SecondaryButton
                label="Get Started"
                fullWidth
                sx={{
                  color: '#ffffff',
                  borderColor: 'rgba(255,255,255,0.5)',
                  borderRadius: '999px',
                  '&:hover': {
                    borderColor: '#ffffff',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                  },
                }}
              />
            </Link>
          </ListItem>
        </List>
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar sx={{ height: 64 }} />
    </>
  );
}
