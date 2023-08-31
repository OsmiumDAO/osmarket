import { Container } from '@mui/material'
import React from 'react'

function Logo({ number }: { number: 1 | 2 | 3 | 4 }) {
  return (
    <Container
      sx={{
        w: '143px',
        h: '53px',
        p: 0,
      }}
    >
      <img
        src={`/images/logo${number}.png`}
        alt='osmarket'
        style={{
          objectFit: 'contain',
          width: '143px',
          height: '53px',
        }}
      />
    </Container>
  )
}

export default Logo
