
import { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { Web3Context } from './providers/Web3Provider'
import { shortenAddress } from '../utils/format'
import NavItem from './NavItem'

const pages = [
  {
    title: 'Market',
    href: '/'
  },
  {
    title: 'MY NFTs',
    href: '/creator-dashboard'
  }
]

const NavBar = () => {
  const { account, initializeWeb3 } = useContext(Web3Context)
  const logo = '🖼️'

  const buttonText = typeof window !== 'undefined' && window.ethereum ? 'Connect' : 'Download Metamask'
  const onClick = () => {
    if (window.ethereum) {
      return initializeWeb3()
    }

    return window.open('https://metamask.io/', '_blank')
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ p: '10px', flexGrow: { xs: 1, md: 0 }, display: 'flex' }}
          >
            {logo}
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            {pages.map(({ title, href }) => <NavItem title={title} href={href} key={title}/>)}
          </Box>
          {shortenAddress(account) || <Button color="inherit" onClick={onClick}>{buttonText}</Button> }

        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBar
