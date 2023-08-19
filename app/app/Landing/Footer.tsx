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
import { BsGithub } from 'react-icons/bs'
import { FooterGrid, FooterLink, FooterButton } from './Footer.components'

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
        }}
      >
        <Typography
          variant='h2'
          fontWeight={'700'}
          textAlign={'center'}
          my={4}
          sx={{ fontSize: { xs: '1em', md: '1.5em' } }}
        >
          OSMARKET
        </Typography>

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
              <Link target='_blank' href='https://twitter.com/OsmiumDao'>
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
            </Box>
          </FooterGrid>
          <FooterGrid xs={12} md={6} lg={4}>
            <Typography textAlign={'center'}>
              &copy;Osmarket 2023, All rights reserved.
            </Typography>
          </FooterGrid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
