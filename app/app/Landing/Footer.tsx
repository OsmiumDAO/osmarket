import { Container } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <footer>
      <Container
        sx={{
          borderRadius: { xs: '0 0 6px 6px', md: '0 0 12px 12px' },
          minHeight: '297px',
          bgcolor: 'primary.main',
          w: '100%',
          color: '#ffffff',
        }}
      >
        This is The Footer
      </Container>
    </footer>
  )
}

export default Footer
