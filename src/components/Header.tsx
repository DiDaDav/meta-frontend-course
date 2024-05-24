import Nav from './commons/Nav'
import logoUrl from '../assets/logo_title.png'
import mobileLogoUrl from '../assets/logo_complete_color.png'
import { HStack, Image } from '@chakra-ui/react'

const menuList = [
  {
    id: 'Home',
    link: '/',
    desc: 'Home',
  },
  {
    id: 'About',
    link: '#About',
    desc: 'About',
  },
  {
    id: 'Menu',
    link: '#Menu',
    desc: 'Menu',
  },
  {
    id: 'Reservations',
    link: '/book',
    desc: 'Reservations',
  },
  {
    id: 'Order',
    link: '#Order',
    desc: 'Order online',
  },
  {
    id: 'Login',
    link: '#Login',
    desc: 'Login',
  },
]

function Header() {
  return (
    <header className='row'>
      <HStack>
        <figure className='col'>
          <picture>
            <source media='(max-width:30em)' srcSet={mobileLogoUrl} />
            <Image
              id='logo'
              className='img-fluid'
              objectFit='contain'
              width={{ base: '100%', md: '75%', lg: '50%', xl: '50%' }}
              maxHeight={{ base: '150px' }}
              src={logoUrl}
              alt='Little Lemon logo'
            />
          </picture>
        </figure>
        <Nav list={menuList} />
      </HStack>
    </header>
  )
}

export default Header
