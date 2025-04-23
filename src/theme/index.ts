// /theme/index.ts
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E40AF',
    },
    secondary: {
      main: '#F59E0B',
    },
    background: {
      default: '#f9f9f9',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), Roboto, Arial, sans-serif',
  },
})

export default theme
