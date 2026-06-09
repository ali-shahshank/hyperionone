'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ArticleIcon from '@mui/icons-material/Article';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AppDrawer from './drawer';

export interface Page {
  title: string;
  Icon: React.ElementType;
}

const pages: Page[] = [
  { title: 'Product', Icon: AutoAwesomeIcon },
  { title: 'Blog', Icon: ArticleIcon },
  { title: 'Resources', Icon: LibraryBooksIcon },
  { title: 'Pricing', Icon: CheckCircleIcon },
];

export default function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

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
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            aria-label="Hyperion home"
            sx={{
              fontWeight: 500,
              color: 'black',
              textDecoration: 'none',
              width: '202px',
            }}
          >
            Hyperion
          </Typography>

          {/* Desktop Nav Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                sx={{
                  fontSize: '16px',
                  textTransform: 'none',
                  fontWeight: 400,
                  color: 'black',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.03)' },
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* Desktop Auth Buttons */}
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
                width: '202px',
              },
              gap: 1,
            }}
          >
            <Button
              variant="text"
              sx={{
                color: 'black',
                borderRadius: 6,
                '&:hover': { bgcolor: 'rgba(0,0,0,0.03)' },
              }}
            >
              Sign In
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: 'black',
                borderColor: 'black',
                borderRadius: 6,
                '&:hover': { bgcolor: 'rgba(0,0,0,0.03)' },
              }}
            >
              Get Started
            </Button>
          </Box>

          {/* Mobile Hamburger — FIX: hidden on desktop */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </IconButton>
            <AppDrawer
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              pages={pages}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
