import Nav from './commons/Nav'
import Image from './commons/Image'
import logoUrl from '../assets/logo_title.png'
import mobileLogoUrl from '../assets/logo_complete_color.png'

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
    <header className='row'>
      <Image src={logoUrl} mobileSrc={mobileLogoUrl} alt='Little Lemon logo' />
      <Nav list={menuList} />
    </header>
  )
}

export default Header
