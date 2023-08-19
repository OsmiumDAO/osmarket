import { createTheme } from '@mui/material'

export const defaultTheme = (mode: 'dark' | 'light') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#13334F',
        light: '#7422DD',
      },
      secondary: {
        main: '#f50057',
      },
    },
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            color: 'inherit',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          contained: {
            backgroundColor: '#7422DD',
            textTransform: 'capitalize',
          },
          outlined: {
            textTransform: 'capitalize',
          },
        },
      },
    },
  })
