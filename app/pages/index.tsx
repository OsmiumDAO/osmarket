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
      <div>This is a landing page</div>
    </RootLayout>
  )
}

export default IndexPage
