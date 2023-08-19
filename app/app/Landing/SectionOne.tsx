import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

function SectionOne() {
  return (
    <Container
      sx={{
        backgroundColor: 'primary.main',
        minHeight: { xs: '65vh', md: '80vh' },
        color: '#ffff',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 1,
        py: { xs: 1, md: 1.5, lg: 2 },
      }}
    >
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography
          component={'h1'}
          variant='h2'
          fontWeight={'700'}
          sx={{ fontSize: { xs: '1.8em', md: '2.5em', lg: '3em' } }}
        >
          Power Your Trading Experience With our Innovative MarketPlace
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 'small', md: 'normal', lg: 'large' } }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
          delectus. Enim sed libero nam sequi eaque quasi, autem eos tempore
          ipsa necessitatibus, nobis quo sit hic aliquid ipsum, sapiente natus.
          Perferendis exercitationem, ea rem hic, quasi vitae eligendi iusto
          animi placeat sunt sequi sit id atque maiores blanditiis magnam est.
        </Typography>
        <Box gap={1} display={'flex'} my={1}>
          <Button
            variant='outlined'
            sx={{
              bgcolor: '#ffffff',
              color: 'primary.main',
              fontSize: { xs: 'x-small', md: 'small' },
              px: { xs: 1, md: 1.8, lg: 2.1 },
            }}
            endIcon={<FaLongArrowAltRight />}
          >
            Let's Get You Started
          </Button>
          <Button
            variant='contained'
            endIcon={<FaLongArrowAltRight />}
            sx={{
              fontSize: { xs: 'x-small', md: 'small' },
              px: { xs: 1, md: 1.8, lg: 2.1 },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          style={{
            objectFit: 'contain',
            maxWidth: 'calc(100% - 15%)',
            maxHeight: 'calc(100% - 15%)',
          }}
          src='/images/landing/section_one.png'
          alt='landing image'
        />
      </Box>
    </Container>
  )
}

export default SectionOne
