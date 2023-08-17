import React from 'react'
import type { Metadata } from 'next'
import RootLayout from '@/app/layouts/layout'

export const metadata: Metadata = {
  title: 'Osmium Market',
  description: 'Peer to Peer Cardano Blockchain Market',
}

function IndexPage() {
  return (
    <RootLayout>
      <div>IndexPage</div>
    </RootLayout>
  )
}

export default IndexPage
