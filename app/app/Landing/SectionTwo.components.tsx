import { Grid, Typography } from '@mui/material'
import React from 'react'

export const SectionTwoHeader = ({ text }: { text: string }) => (
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
      maxWidth: '420px',
      width: 'calc(100% - 8%)',
      height: 'calc(100% - 8%)',
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
      item
      mt={3}
      maxWidth={'543px'}
      display={'flex'}
      flexDirection={'column'}
      gap={2}
    >
      {children}
    </Grid>
  )
}
