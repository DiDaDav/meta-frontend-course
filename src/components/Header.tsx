import Nav from './commons/Nav'
import Image from './commons/Image'
import logoUrl from '../assets/logo_color.png'

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
    link: '#Reservations',
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
    <header>
      <Image src={logoUrl} alt='Little Lemon logo' />
      <Nav list={menuList} />
    </header>
  )
}

export default Header
