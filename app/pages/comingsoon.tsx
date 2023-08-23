import RootLayout from '@/app/layouts/layout'
import { Container, Typography } from '@mui/material'
import React from 'react'

function Comingsoon() {
  return (
    <RootLayout>
      <Container
        sx={{
          display: 'flex',
          w: '100%',
          h: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 'large',
          fontWeight: '700',
          fontStyle: 'italic',
        }}
      >
        Coming Soon!
      </Container>
    </RootLayout>
  )
}

export default Comingsoon
