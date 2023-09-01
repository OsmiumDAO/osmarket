import { Grid, Typography } from '@mui/material'
import React from 'react'

export const SectionTwoHeader = ({ text }: { text: string }) => (
  <Typography
    textAlign={'center'}
    variant='h2'
    sx={{
      fontSize: { md: '35px', xs: '22px' },
      fontWeight: '700',
      maxWidth: '677px',
      mx: 'auto',
    }}
  >
    {text}
  </Typography>
)

export const SectionTwoImage = ({
  image,
  alt,
}: {
  image: string
  alt: string
}) => (
  <img
    style={{
      objectFit: 'contain',
      margin: 'auto',
      width: '95%',
      height: '95%',
      maxHeight: '420px',
    }}
    src={`/images/landing/section_two_${image}.png`}
    alt='landing image'
  />
)

export function SectionTwoGridItem({ children }: { children: any }) {
  return (
    <Grid
      xs={12}
      md={6}
      p={2}
      item
      mt={1}
      maxWidth={'543px'}
      display={'flex'}
      flexDirection={'column'}
      gap={2}
    >
      {children}
    </Grid>
  )
}
