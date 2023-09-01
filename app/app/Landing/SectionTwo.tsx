import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import LearnMoreButton from '../components/buttons/LearnMoreButton'
import {
  SectionTwoGridItem,
  SectionTwoHeader,
  SectionTwoImage,
} from './SectionTwo.components'

function SectionTwo() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'primary.main',
        minHeight: { xs: 'none', lg: '70vh' },
        backgroundColor: '#F5F7F9', //'#FFF8E1',//#F5F7F9
        gap: 2,
        py: 4,
      }}
    >
      <SectionTwoHeader text='We give you a perfect solution to manage your crypto currency' />

      <Grid container mt={5}>
        <SectionTwoGridItem>
          <SectionTwoImage image='1' alt='problem statement' />
        </SectionTwoGridItem>
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
          <SectionTwoHeader text='Experience Limitless Trading' />
          <Typography textAlign={'justify'}>
            Escape liquidity challenges, ADA lock-ins, and complex fiat entry
            with our unique marketplace offering. Unlock an Unbounded Trading
            Experience: Say goodbye to liquidity hurdles, ADA lock-ins, and the
            convoluted maze of fiat entry barriers through our one-of-a-kind
            marketplace solution. Embrace the freedom to trade without
            constraints, and empower yourself with an unparalleled trading
            journey that transcends limitations.
          </Typography>
          <LearnMoreButton />
        </SectionTwoGridItem>
        <SectionTwoGridItem>
          <SectionTwoImage image='2' alt='value proposition' />
        </SectionTwoGridItem>
      </Grid>

      <Grid container mt={5}>
        <SectionTwoGridItem>{/* <Logo number={1} /> */}</SectionTwoGridItem>
        <SectionTwoGridItem>
          <SectionTwoHeader text='Enhancing Unparalleled Flexibility' />
          <Typography textAlign={'justify'}>
            OSMarket addresses critical gaps in the current Cardano NFT
            marketplaces, setting itself apart through unique features that
            enhance user experience. Enjoy unmatched personalization and trade
            flexibility, swapping NFTs effortlessly. Say goodbye to liquidity
            obstacles and ADA lock-ins. Plus, acquire crypto assets seamlessly
            with direct fiat. Join OSMarket for a new era of inclusive, dynamic,
            and secure trading.
          </Typography>
          <LearnMoreButton />
        </SectionTwoGridItem>
      </Grid>
    </Container>
  )
}

export default SectionTwo
