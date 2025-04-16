'use client'

import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import Grid from '@mui/material/Grid2'; // Importing Grid2 for the `size` property
import './Home.css' // Importing external CSS file

function Home() {
  return (
    <Box className="home">
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Grid container spacing={4} alignItems="center" className="home-hero">
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h2" className="home-title">
              Welcome to OperIQ
            </Typography>
            <Typography variant="body1" className="home-description">
              Streamline your operations with AI-powered tools designed to optimize staffing, inventory, and costs.
            </Typography>
            <Button
              variant="contained"
              className="home-button"
              href="#get-started"
            >
              Get Started
            </Button>
          </Grid>

          {/* Right Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="home-illustration">
              {/* Placeholder for an image or illustration */}
              <Typography variant="body2" className="home-placeholder">
                [Illustration Placeholder]
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Features Section */}
        <Box className="home-features">
          <Typography variant="h4" className="home-features-title">
            Key Features
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box className="home-feature-card">
                <Typography variant="h6" className="home-feature-title">
                  Optimize Schedules
                </Typography>
                <Typography variant="body2" className="home-feature-description">
                  Automatically generate efficient staffing plans using AI forecasts.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box className="home-feature-card">
                <Typography variant="h6" className="home-feature-title">
                  Manage Inventory
                </Typography>
                <Typography variant="body2" className="home-feature-description">
                  Predict and control inventory with data-driven recommendations.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box className="home-feature-card">
                <Typography variant="h6" className="home-feature-title">
                  Analyze Costs
                </Typography>
                <Typography variant="body2" className="home-feature-description">
                  Discover hidden inefficiencies and improve profitability.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Home