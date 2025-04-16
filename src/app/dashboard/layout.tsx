'use client'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
// import OperIQSidebar from '@/components/layout/OperIQSidebar'
import { Box, Toolbar } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E40AF', // OperIQ Blue
    },
    secondary: {
      main: '#F59E0B', // Accent color
    },
  },
})

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        {/* <OperIQSidebar /> */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar /> {/* Offset for AppBar if needed */}
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  )
}
