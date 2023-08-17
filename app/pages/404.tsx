import { Container, Typography } from '@mui/material'
import React from 'react'

function PageNotFound() {
  return (
    <Container sx={{ w: 'full', h: 'full', textAlign: 'center' }}>
      <Typography color={'red'} fontWeight={'700'}>
        Oops The Page you are looking for can not be found
      </Typography>
    </Container>
  )
}

export default PageNotFound
