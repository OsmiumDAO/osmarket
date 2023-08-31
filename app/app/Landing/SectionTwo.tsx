import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import LearnMoreButton from '../components/buttons/LearnMoreButton'
import Logo from '../components/Logo'

const SectionTwoHeader = ({ text }: { text: string }) => (
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

const SectionTwoImage = ({ image, alt }: { image: string; alt: string }) => (
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

function SectionTwoGridItem({ children }: { children: any }) {
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

function SectionTwo() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'primary.main',
        minHeight: { xs: 'none', lg: '70vh' },
        // backgroundColor: ' #FFF8E1',
        gap: 2,
        py: 4,
      }}
    >
      <SectionTwoHeader text='We give you a perfect solution to manage your crypto currency' />

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
            <SectionTwoImage image='1' alt='problem statement' />
          </Box>
        </Grid>
        <SectionTwoGridItem>
          <SectionTwoHeader text='Problem Statement' />
          <Typography textAlign={'justify'}>
            Current Cardano NFT marketplaces offer distinct features but lack
            user-friendly personalization and trading flexibility. Swapping NFT
            for NFT or NFT for chosen native tokens is not possible. Liquidity
            issues hinder traders from exiting their positions, leading to ADA
            lock-ins and unrealized gains. Moreover, the absence of direct
            fiat-crypto acquisition due to complex KYC and risks from
            non-custodial platforms limits blockchain entry. OSMarket tackles
            these obstacles, revolutionizing NFT trading and easing the barriers
            to entry.
          </Typography>
          <LearnMoreButton />
        </SectionTwoGridItem>
      </Grid>
      <Grid container mt={5}>
        <SectionTwoGridItem>
          <SectionTwoHeader text='Value Proposition' />
          <Typography textAlign={'justify'}>
            Experience Limitless Trading: Escape liquidity challenges, ADA
            lock-ins, and complex fiat entry with our unique marketplace
            offering. Unlock an Unbounded Trading Experience: Say goodbye to
            liquidity hurdles, ADA lock-ins, and the convoluted maze of fiat
            entry barriers through our one-of-a-kind marketplace solution.
            Embrace the freedom to trade without constraints, and empower
            yourself with an unparalleled trading journey that transcends
            limitations.
          </Typography>
          <LearnMoreButton />
        </SectionTwoGridItem>
        <Grid
          xs={12}
          md={6}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          item
        >
          <SectionTwoImage image='2' alt='value proposition' />
        </Grid>
      </Grid>

      <Grid container mt={5}>
        <Grid xs={12} md={6} item sx={{ display: { xs: 'none', md: 'flex' } }}>
          {/* <Logo number={1} /> */}
        </Grid>
        <SectionTwoGridItem>
          <SectionTwoHeader text='Competitive Advantage' />
          <Typography textAlign={'justify'}>
            Enhancing Unparalleled Flexibility OSMarket addresses critical gaps
            in the current Cardano NFT marketplaces, setting itself apart
            through unique features that enhance user experience. Enjoy
            unmatched personalization and trade flexibility, swapping NFTs
            effortlessly. Say goodbye to liquidity obstacles and ADA lock-ins.
            Plus, acquire crypto assets seamlessly with direct fiat. Join
            OSMarket for a new era of inclusive, dynamic, and secure trading.
          </Typography>
          <LearnMoreButton />
        </SectionTwoGridItem>
      </Grid>
    </Container>
  )
}

export default SectionTwo
