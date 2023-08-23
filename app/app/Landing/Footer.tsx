import React from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  Link,
  Typography,
} from '@mui/material'
import { ImTwitter } from 'react-icons/im'
import { BiLogoDiscordAlt } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { FooterGrid, FooterLink, FooterButton } from './Footer.components'
import BrandName from '../components/BrandName'

function Footer() {
  return (
    <footer>
      <Container
        sx={{
          borderRadius: { xs: '0 0 6px 6px', md: '0 0 12px 12px' },
          minHeight: '297px',
          bgcolor: 'primary.main',
          w: '100%',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          pt: 4,
        }}
      >
        <BrandName />

        <Grid container justifyContent={'center'}>
          <FooterGrid xs={12} md={6} lg={4}>
            <Typography textAlign={'left'} fontWeight={700}>
              Join Our Newsletter
            </Typography>
            <Typography textAlign={'left'} fontSize={'small'}>
              We will Send you a nice letter weekly. No spam.
            </Typography>
            <Box display={'flex'}>
              <Input
                sx={{
                  flex: '0.8',
                  outline: 'none',
                  backgroundColor: '#ffff',
                  px: 1,
                  fontSize: 'small',
                }}
                size='small'
                placeholder='Your Email Address'
              />
              <Button
                size='small'
                style={{
                  borderRadius: '0px',
                }}
                sx={{ flex: '0.2' }}
                variant='contained'
              >
                Subscribe
              </Button>
            </Box>
          </FooterGrid>
          <FooterGrid xs={12} md={6} lg={4}>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                justifyContent: 'center',
              }}
            >
              <FooterLink>Privacy</FooterLink>
              <FooterLink>Help center</FooterLink>
              <FooterLink>Terms and Conditions</FooterLink>
            </Box>
            <Box display='flex' gap={2} justifyContent={'center'} my={2}>
              <Link target='_blank' href='https://twitter.com/OSMarket__'>
                <FooterButton
                  endIcon={<ImTwitter style={{ color: '#ffff' }} />}
                >
                  Twitter
                </FooterButton>
              </Link>
              <Link target='_blank' href='https://github.com/OsmiumDao'>
                <FooterButton endIcon={<BsGithub style={{ color: '#ffff' }} />}>
                  Github
                </FooterButton>
              </Link>
              <Link target='_blank' href='https://discord.gg/6j3AuJYCDK'>
                <FooterButton
                  endIcon={<BiLogoDiscordAlt style={{ color: '#ffff' }} />}
                >
                  Discord
                </FooterButton>
              </Link>
            </Box>
          </FooterGrid>
          <FooterGrid xs={12} md={6} lg={4}>
            <Typography textAlign={'center'}>
              &copy;{' '}
              <Link href='https://osmiumdao.io'>OsmiumDAO Community</Link>, All
              rights reserved.
            </Typography>
          </FooterGrid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
