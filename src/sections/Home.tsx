'use client'

import React from 'react'
import { Box, Container } from '@mui/material'
import Grid from '@mui/material/Grid2'
import styles from './Home.module.css'

function Home() {
  return (
    <Box className={styles.home}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" className={styles.homeHero}>
          <Grid size={{ xs: 12, md: 6 }}>
            <h1 className={styles.homeTitle}>Welcome to OperIQ</h1>
            <p className={styles.homeDescription}>
              Streamline your operations with AI-powered tools designed to optimize staffing, inventory, and costs.
            </p>
            <a href="#get-started" className={styles.homeButton}>
              Get Started
            </a>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box className={styles.homeIllustration}>
              <p className={styles.homePlaceholder}>[Illustration Placeholder]</p>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Home