'use client'

import {
  AppBar,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import { styled } from '@mui/material/styles'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import InventoryIcon from '@mui/icons-material/Inventory'
import InsightsIcon from '@mui/icons-material/Insights'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  height: '100%',
}))

export default function Home() {
  return (
    <>
      {/* Top Navigation */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight="bold" color="primary">
            OperIQ
          </Typography>
          <Stack direction="row" spacing={3}>
            <Typography variant="body1" sx={{ cursor: 'pointer' }}>
              Features
            </Typography>
            <Typography variant="body1" sx={{ cursor: 'pointer' }}>
              Pricing
            </Typography>
            <Button variant="contained" color="primary">
              Get Started
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              AI-Powered <br /> Operations Optimizer
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Streamline staffing, inventory, and expenses with intelligent insights
              for your business.
            </Typography>
            <Button variant="contained" size="large" color="primary">
              Get Started
            </Button>
          </Grid>

          {/* Right */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                backgroundColor: '#f5f5f5',
                height: 300,
                borderRadius: 4,
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography color="text.secondary">[Graph + Schedule Illustration]</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Container sx={{ pb: 10 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center" mb={6}>
          Key Features
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Item elevation={3}>
              <RocketLaunchIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Optimize Schedules
              </Typography>
              <Typography color="text.secondary">
                Automatically generate efficient staffing plans using AI forecasts.
              </Typography>
            </Item>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Item elevation={3}>
              <InventoryIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Manage Inventory
              </Typography>
              <Typography color="text.secondary">
                Predict and control inventory with data-driven recommendations.
              </Typography>
            </Item>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Item elevation={3}>
              <InsightsIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Analyze Costs
              </Typography>
              <Typography color="text.secondary">
                Discover hidden inefficiencies and improve profitability.
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}