import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from '@mui/material'
import MuiLink from '@mui/material/Link'
import React from 'react'
import BrandName from '../components/BrandName'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineLogin } from 'react-icons/ai'
import { LiaRegistered } from 'react-icons/lia'
import { BsCloudDownload } from 'react-icons/bs'
import Logo from '../components/Logo'

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <header>
      <Container
        sx={{
          borderRadius: { xs: '6px 6px 0 0', md: '12px 12px 0 0' },
          minHeight: { xs: '65px', md: '80px' },
          bgcolor: 'primary.main',
          w: '100%',
          color: '#ffffff',
          borderBottom: 'solid 1px #ffffff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: { xs: 1.5, md: 2.5 },
        }}
      >
        {/* Brand Section */}
        <Box>
          {/* <BrandName /> */}
          <Logo number={2} />
        </Box>

        {/* Login Section for Mobile */}
        <Box
          sx={{ display: { xs: 'flex', md: 'none' } }}
          flex={'1'}
          justifyContent={'flex-end'}
        >
          <IconButton
            onClick={handleClick}
            size='large'
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          >
            <GiHamburgerMenu
              style={{ width: '32px', height: '32px', color: '#ffffff' }}
            />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            id='account-menu'
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& a': {
                  textDecoration: 'none',
                },
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <MuiLink href={'/white_paper.pdf'} download={true}>
                <ListItemIcon>
                  <BsCloudDownload fontSize='small' />
                </ListItemIcon>
                White Paper
              </MuiLink>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <Link href={'/comingsoon'}>
                <ListItemIcon>
                  <AiOutlineLogin fontSize='small' />
                </ListItemIcon>
                Login
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href={'/comingsoon'}>
                <ListItemIcon>
                  <LiaRegistered fontSize='small' />
                </ListItemIcon>
                Signup
              </Link>
            </MenuItem>
          </Menu>
        </Box>

        {/* Login section for Desktop + Tab */}

        <Box
          sx={{ display: { xs: 'none', md: 'flex' } }}
          flex={'1'}
          justifyContent={'flex-end'}
        >
          <MuiLink href={'/white_paper.pdf'} download={true}>
            <Button sx={{ color: '#ffffff', mr: 10 }}>White Paper</Button>
          </MuiLink>
          <Box display={'flex'}>
            {/* <Link href={'/login'}>
              <Button sx={{ color: '#ffffff' }}>Login</Button>
            </Link> */}
            <Link href={'/comingsoon'}>
              <Button variant='contained'>Launch App</Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </header>
  )
}

export default Header
