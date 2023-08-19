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
          sx={{ fontSize: { xs: '1.2em', md: '2em' } }}
        >
          OSMARKET
        </Typography>

        <Grid container justifyContent={'center'}>
          <Grid xs={12} md={6} lg={4}>
            <Typography>Join Our Newsletter</Typography>
            <Typography>
              We will Send you a nice letter weekly. No spam.
            </Typography>
            <Box>
              <Input placeholder='Your Email Address' />
              <Button variant='contained'>Subscribe</Button>
            </Box>
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Box>
              <Link>Privacy</Link>
              <Link>Help center</Link>
              <Link>Terms and Conditions</Link>
            </Box>
            <Box>
              <Link>
                <Button
                  variant='contained'
                  endIcon={<ImTwitter style={{ color: '#ffff' }} />}
                >
                  Twitter
                </Button>
              </Link>
              <Link>
                <Button
                  variant='contained'
                  endIcon={<BsGithub style={{ color: '#ffff' }} />}
                >
                  Github
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Typography>&copy;Osmarket 2023, All rights reserved.</Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
