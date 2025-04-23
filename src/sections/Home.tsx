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

        <Box className={styles.homeFeatures}>
          <h2 className={styles.homeFeaturesTitle}>Key Features</h2>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box className={styles.homeFeatureCard}>
                <h3 className={styles.homeFeatureTitle}>Optimize Schedules</h3>
                <p className={styles.homeFeatureDescription}>
                  Automatically generate efficient staffing plans using AI forecasts.
                </p>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box className={styles.homeFeatureCard}>
                <h3 className={styles.homeFeatureTitle}>Manage Inventory</h3>
                <p className={styles.homeFeatureDescription}>
                  Predict and control inventory with data-driven recommendations.
                </p>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box className={styles.homeFeatureCard}>
                <h3 className={styles.homeFeatureTitle}>Analyze Costs</h3>
                <p className={styles.homeFeatureDescription}>
                  Discover hidden inefficiencies and improve profitability.
                </p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Home