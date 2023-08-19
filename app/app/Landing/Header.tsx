import { AppBar, Container } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <header>
      <Container
        sx={{
          borderRadius: { xs: '6px 6px 0 0', md: '12px 12px 0 0' },
          height: { xs: '65px', md: '80px' },
          bgcolor: 'primary.main',
          w: '100%',
          color: '#ffffff',
          borderBottom: 'solid 1px #ffffff',
        }}
      >
        This The Header
      </Container>
    </header>
  )
}

export default Header
