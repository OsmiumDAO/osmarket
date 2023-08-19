import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import { defaultTheme } from '@/app/themes'
import { useState } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mode, setMode] = useState<'dark' | 'light'>('light')
  return (
    <ThemeProvider theme={defaultTheme(mode)}>
      <Container
        className='rootlayout'
        sx={{
          minWidth: '100%',
          minHeight: '100vh',
          fontFamily: 'roboto',
          display: 'flex',
          flexDirection: 'column',
          p: 0,
        }}
      >
        {children}
        <CssBaseline />
      </Container>
    </ThemeProvider>
  )
}

