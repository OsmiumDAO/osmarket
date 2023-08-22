import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

function SectionTwo() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'primary.main',
        minHeight: { xs: '65vh', md: '80vh' },
        backgroundColor: ' #FFF8E1',
        gap: 2,
        py: 4,
      }}
    >
      <Typography
        textAlign={'center'}
        variant='h2'
        sx={{
          fontSize: { md: '40px', xs: '25px' },
          fontWeight: '700',
          maxWidth: '677px',
          mx: 'auto',
        }}
      >
        We give you a perfect solution to manage your crypto currency
      </Typography>
      <Grid container mt={5}>
        <Grid xs={12} md={6} item>
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
                maxWidth: '420px',
                width: 'calc(100% - 8%)',
                height: 'calc(100% - 8%)',
              }}
              src='/images/landing/section_two.png'
              alt='landing image'
            />
          </Box>
        </Grid>
        <Grid
          xs={12}
          md={6}
          item
          mt={4}
          maxWidth={'543px'}
          display={'flex'}
          flexDirection={'column'}
          gap={2}
        >
          <Typography
            textAlign={'center'}
            variant='h2'
            sx={{
              fontSize: { md: '40px', xs: '25px' },
              fontWeight: '700',
              maxWidth: '677px',
              mx: 'auto',
            }}
          >
            Problem Statement
          </Typography>
          <Typography textAlign={'justify'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cum
            doloremque sequi culpa deserunt enim iste fugiat ab adipisci
            consectetur.
          </Typography>
          <Button
            variant='contained'
            endIcon={<FaLongArrowAltRight />}
            sx={{
              maxWidth: '250px',
              ':hover': {
                border: 'solid 1px #ffffff',
              },
              fontSize: { xs: 'x-small', md: 'small' },
              px: { xs: 1, md: 1.8, lg: 2.1 },
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SectionTwo
