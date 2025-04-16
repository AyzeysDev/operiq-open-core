'use client'

import { Button, Typography, Container } from '@mui/material'

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Typography variant="h3" gutterBottom>
        🧠 OperIQ Open Core
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        An open-source UI kit for integrating POS, staff, and inventory ops into AI-powered workflows.
      </Typography>
      <Button variant="contained" color="primary">
        Connect to Square
      </Button>
    </Container>
  )
}
