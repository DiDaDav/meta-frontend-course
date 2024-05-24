import logoUrl from '../assets/logo_title.png'
import mobileLogoUrl from '../assets/logo_complete_color.png'
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { menuList } from '../utils/router'

function Header() {
  const itemList = menuList.map((item) => {
    return (
      <Link key={item.id ?? item.link} to={item.link} className='nav-link'>
        {item.desc}
      </Link>
    )
  })

  return (
    <header className='row align-items-center'>
      <figure className='figure col-3'>
        <picture>
          <source media='(max-width:576px)' srcSet={mobileLogoUrl} />
          <Image
            id='logo'
            className='figure-img img-fluid'
            objectFit='contain'
            width={{ base: '100%', md: '75%', lg: '50%', xl: '50%' }}
            maxHeight={{ base: '150px' }}
            src={logoUrl}
            alt='Little Lemon logo'
          />
        </picture>
      </figure>
      <nav className='col-9 nav nav-fill flex-column flex-sm-row align-items-center'>
        {itemList}
      </nav>
    </header>
  )
}

export default Header
