import { Container } from '@mui/material'
import React from 'react'

function Logo({ number }: { number: 1 | 2 | 3 | 4 }) {
  return (
    <Container
      sx={{
        w: '210px',
        h: '70px',
        p: 0,
      }}
    >
      <img
        src={`/images/logo${number}.png`}
        alt='osmarket'
        style={{
          objectFit: 'contain',
          width: 'calc(100% - 15%)',
          height: 'calc(100% - 15%)',
        }}
      />
    </Container>
  )
}

export default Logo
