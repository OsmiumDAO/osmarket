import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import LearnMoreButton from '../components/buttons/LearnMoreButton'

function SectionOne() {
  return (
    <Container
      sx={{
        backgroundColor: 'primary.main',
        minHeight: { xs: 'none', lg: '80vh' },
        color: '#ffff',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 1,
        py: { xs: 1, md: 1.5, lg: 2 },
      }}
    >
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography
          variant='h2'
          fontWeight={'700'}
          sx={{ fontSize: { xs: '1.8em', md: '2.5em', lg: '3em' } }}
        >
          Power Your Trading Experience With our Innovative MarketPlace
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 'small', md: 'normal', lg: 'large' } }}
        >
          <List sx={{ px: 0, '& > *': { pl: 0 } }}>
            <ListItem>
              FT Bundles: List token bundles for sale, each deriving its value
              from real-time aggregated data on DEX platforms.
            </ListItem>
            <ListItem>
              NFT2NFT Swap: Swap NFTs seamlessly. Our streamlined process
              matches compatible swaps automatically, notifying you for easy
              decisions.
            </ListItem>
            <ListItem>
              NFT2FT Swap: Swap NFTs for chosen FTs effortlessly. Define
              acceptable tokens for swaps. Initiate swap contracts and receive
              notifications for suitable trades.
            </ListItem>
            <ListItem>
              Fiat2Crypto Exchange: Seamlessly exchange fiat and crypto with our
              smart contract-based escrow.
            </ListItem>
          </List>
        </Typography>
        <Box
          gap={1}
          display={'flex'}
          sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
          my={1}
        >
          <Button
            variant='outlined'
            sx={{
              bgcolor: '#ffffff',
              color: 'primary.main',
              fontSize: { xs: 'x-small', md: 'small' },
              px: { xs: 1, md: 1.8, lg: 2.1 },
              ':hover': {
                backgroundColor: 'primary.main',
                color: '#ffffff',
                border: 'solid 1px #ffffff',
              },
            }}
            endIcon={<FaLongArrowAltRight />}
          >
            Let's Get You Started
          </Button>
          <LearnMoreButton />
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
            maxWidth: '420px',
            width: 'calc(100% - 15%)',
            height: 'calc(100% - 15%)',
          }}
          src='/images/landing/section_one.png'
          alt='landing image'
        />
      </Box>
    </Container>
  )
}

export default SectionOne
