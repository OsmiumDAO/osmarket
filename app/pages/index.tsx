import React from 'react'
import type { Metadata } from 'next'
import RootLayout from '@/app/layouts/layout'
import Header from '@/app/Landing/Header'
import SectionOne from '@/app/Landing/SectionOne'
import SectionTwo from '@/app/Landing/SectionTwo'
import Footer from '@/app/Landing/Footer'
import { Container } from '@mui/material'

export const metadata: Metadata = {
  title: 'Osmium Market',
  description: 'Peer to Peer Cardano Blockchain Market',
}

function IndexPage() {
  return (
    <RootLayout>
      <Container sx={{ py: { xs: 0.5, md: 1, lg: 2 } }}>
        <Header />
        <SectionOne />
        <SectionTwo />
        <Footer />
      </Container>
    </RootLayout>
  )
}

export default IndexPage
