'use client'

import React, { useState } from 'react'
import { Box, Container } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Image from 'next/image'
import styles from './Home.module.css'

function Home() {
  const [page, setPage] = useState(1)

  // Dynamically generate image paths from the public folder
  const graphImages = Array.from({ length: 5 }, (_, index) => `/images/hero-graph-${index + 1}.png`)

  return (
    <Box className={styles.home}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" className={styles.homeHero}>
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <h1 className={styles.homeTitle}>AI-Powered Operational Intelligence</h1>
            <p className={styles.homeDescription}>
              OperIQ brings automation, insights, and precision to your operations — from predicting demand to optimizing staff, inventory, and costs.
            </p>
            <a href="#get-started" className={styles.homeButton}>
              Get Started
            </a>
          </Grid>

          {/* Right Content – Dynamic Image Pagination */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className={styles.homeGraphImageBox}>
              <Image
                src={graphImages[page - 1]} // Dynamically select the image based on the current page
                alt={`Graph ${page}`}
                width={500}
                height={320}
                className={styles.graphImage}
                priority
              />
              <Pagination
                count={graphImages.length} // Total number of images
                page={page}
                onChange={(_, value) => setPage(value)} // Update the page state on pagination click
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                  />
                )}
                className={styles.pagination}
                sx={{
                  '& .MuiPaginationItem-root': {
                    color: '#8665ba', // Purple color for pagination items
                  },
                  '& .Mui-selected': {
                    backgroundColor: '#3b82f6', // Purple background for selected item
                    color: '#f9f9f9', // White text for selected item
                  },
                  '& .MuiPaginationItem-root:hover': {
                    backgroundColor: '#f472b6', // Light purple hover effect
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Home