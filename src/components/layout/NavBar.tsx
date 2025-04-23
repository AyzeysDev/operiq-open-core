'use client'

import React, { useState, MouseEvent } from 'react'
import Link from 'next/link'
import {
  Toolbar,
  Container,
  Box,
  Menu,
  MenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import BoltIcon from '@mui/icons-material/Bolt'
import styles from './NavBar.module.css'

const navItems = [
  { label: 'Features', id: 'features' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'About', id: 'about' }, // Added About link
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
    <Box className={styles.navbarWrapper}>
      <Container maxWidth="lg" className={styles.navbarInner}>
        <Toolbar disableGutters>
          <BoltIcon className={styles.navbarIcon} />
          <Link href="/" className={styles.navbarBrand}>
            OperIQ
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <Box className={styles.navbarLinks}>
            {navItems.map(({ label, id }) => (
              <a key={id} href={`#${id}`} className={styles.navbarButton}>
                {label}
              </a>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <button onClick={handleOpenNavMenu} className={styles.menuIconButton}>
              <MenuIcon />
            </button>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              className={styles.navbarMenu}
            >
              {navItems.map(({ label, id }) => (
                <MenuItem
                  key={id}
                  onClick={handleCloseNavMenu}
                  className={styles.navbarMenuItem}
                >
                  <a href={`#${id}`} className={styles.menuLink}>
                    {label}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  )
}

export default NavBar