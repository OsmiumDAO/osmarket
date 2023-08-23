import { Button } from '@mui/material'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

function LearnMoreButton() {
  return (
    <Button
      variant='contained'
      endIcon={<FaLongArrowAltRight />}
      sx={{
        maxWidth: { xs: 'none', md: '250px' },
        ':hover': {
          border: 'solid 1px #ffffff',
        },
        fontSize: { xs: 'x-small', md: 'small' },
        px: { xs: 1, md: 1.8, lg: 2.1 },
      }}
    >
      Learn More
    </Button>
  )
}

export default LearnMoreButton
