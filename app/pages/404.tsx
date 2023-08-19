import RootLayout from '@/app/layouts/layout'
import { Container, Typography } from '@mui/material'
import React from 'react'

function PageNotFound() {
  return (
    <RootLayout>
      <Container sx={{ w: 'full', h: 'full', textAlign: 'center' }}>
        <Typography color={'red'} fontWeight={'700'}>
          Oops The Page you are looking for can not be found
        </Typography>
      </Container>
    </RootLayout>
  )
}

export default PageNotFound
