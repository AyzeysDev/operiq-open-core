'use client'

import React, { useState, MouseEvent } from 'react'
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SmartToyIcon from '@mui/icons-material/SmartToy'

const navItems = [
  { label: 'Features', id: 'features' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Get Started', id: 'get-started' },
]

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(90deg, #04d9a4, #090909)',
        boxShadow: '0px 4px 15px rgba(4, 217, 164, 0.5)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Brand Icon + Name (Desktop) */}
          <SmartToyIcon
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, color: '#186955' }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#090909',
              textDecoration: 'none',
              '&:hover': {
                color: '#04d9a4',
                textShadow: '0px 0px 10px rgba(4, 217, 164, 0.8)',
              },
            }}
          >
            OperIQ
          </Typography>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{
                mt: '45px',
                '& .MuiPaper-root': {
                  backgroundColor: '#090909',
                  color: '#fff',
                },
              }}
            >
              {navItems.map(({ label, id }) => (
                <MenuItem key={id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Brand for Mobile */}
          <Typography
            variant="h5"
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#090909',
              textDecoration: 'none',
              '&:hover': {
                color: '#04d9a4',
              },
            }}
          >
            OperIQ
          </Typography>

          {/* Desktop Links */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navItems.map(({ label, id }, index) => (
              <Button
                key={index}
                sx={{
                  my: 2,
                  px: 2,
                  py: 1,
                  color: '#fff',
                  fontWeight: 'bold',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: '#090909',
                    color: '#04d9a4',
                    boxShadow: '0px 0px 15px rgba(4, 217, 164, 0.7)',
                    transform: 'scale(1.05)',
                  },
                }}
                href={`#${id}`}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
