import { Button, Grid, Link, styled } from '@mui/material'

export const FooterButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'primary.main',
  border: `solid 1px ${theme.palette.primary.light}`,
  color: '#ffffff',
  fontSize: 'small',
  textTransform: 'capitalize',

  ':hover': {
    transform: 'translateY(-3px)',
    transition: '0.5s',
  },
}))

export const FooterGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  margin: theme.spacing(2) + ' 0',
  justifyContent: 'flex-end',
  '& > *': {
    width: '100%',
  },
}))

export const FooterLink = styled(Link)(({ theme }) => ({
  padding: '0 ' + theme.spacing(1),
  fontWeight: '600',
  [theme.breakpoints.up('xs')]: {
    fontSize: 'xx-small',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: 'x-small',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 'small',
  },
  cursor: 'pointer',
  borderRight: 'solid 1px #FFFFFF',
}))
