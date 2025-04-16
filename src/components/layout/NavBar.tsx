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
  MenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import BoltIcon from '@mui/icons-material/Bolt';
import './NavBar.css' // Importing external CSS file

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
    <AppBar position="fixed" className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Brand Icon + Name */}
          <BoltIcon className="navbar-icon" />
          <Typography
            component="a"
            href="/"
            className="navbar-brand"
          >
            OperIQ
          </Typography>

          {/* Spacer to push nav items to the right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Links */}
          <Box className="navbar-links">
            {navItems.map(({ label, id }, index) => (
              <Button
                key={index}
                className="navbar-button"
                href={`#${id}`}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              className="navbar-menu-icon"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              className="navbar-menu"
            >
              {navItems.map(({ label, id }) => (
                <MenuItem
                  key={id}
                  onClick={handleCloseNavMenu}
                  className="navbar-menu-item"
                >
                  <Typography textAlign="center">{label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar