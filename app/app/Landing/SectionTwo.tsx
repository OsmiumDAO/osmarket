import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function SectionTwo() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'primary.main',
        minHeight: { xs: '65vh', md: '80vh' },
        backgroundColor: ' #FFF8E1',
      }}
    >
      <Typography>
        This is the Lower Long White Section That Expands Two Sections
      </Typography>
      <Grid container>
        <Grid xs={12} md={6}>
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
                width: 'calc(100% - 15%)',
                height: 'calc(100% - 15%)',
              }}
              src='/images/landing/section_two.png'
              alt='landing image'
            />
          </Box>
        </Grid>
        <Grid xs={12} md={6}>
          This should be the right section
        </Grid>
      </Grid>
    </Container>
  )
}

export default SectionTwo
