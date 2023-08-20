import { Container } from '@mui/material'
import React from 'react'

function SectionTwo() {
  return (
    <Container
      sx={{
        color: 'primary.main',
        minHeight: { xs: '65vh', md: '80vh' },
        backgroundColor: ' #FFF8E1',
      }}
    >
      This is the Lower Long White Section That Expands Two Sections
    </Container>
  )
}

export default SectionTwo
