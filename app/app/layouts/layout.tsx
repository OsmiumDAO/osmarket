import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { defaultTheme } from '@/app/themes'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='rootlayout'>
      <ThemeProvider theme={defaultTheme}>
        {children}
        <CssBaseline />
      </ThemeProvider>
    </div>
  )
}

