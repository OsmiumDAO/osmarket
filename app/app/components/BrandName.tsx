import { Typography } from '@mui/material'
import React from 'react'

function BrandName() {
  return (
    <Typography
      variant='h2'
      fontWeight={'700'}
      textAlign={'center'}
      sx={{ fontSize: { xs: '1.5em', md: '2.1em' } }}
    >
      OSMARKET
    </Typography>
  )
}

export default BrandName
