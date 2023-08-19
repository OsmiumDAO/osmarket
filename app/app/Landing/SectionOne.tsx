import { Container } from '@mui/material'
import React from 'react'

function SectionOne() {
  return (
    <Container
      sx={{
        backgroundColor: 'primary.main',
        minHeight: { xs: '65vh', md: '80vh' },
        color: '#ffff',
      }}
    >
      This is the Section One With Call To Action
    </Container>
  )
}

export default SectionOne
