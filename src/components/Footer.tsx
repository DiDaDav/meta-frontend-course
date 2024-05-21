import Nav from './commons/Nav'
import Image from './commons/Image'
import logoUrl from '../assets/logo_color.png'

const footerList = [
  {
    id: 'Home',
    link: '',
    desc: 'Home',
  },
]

function Footer() {
  return (
    <footer>
      <p>contact info</p>
      <a>Social media links</a>
      <Image src={logoUrl} alt='Little Lemon logo' />
      <Nav list={footerList} />
    </footer>
  )
}

export default Footer
