import logoUrl from '../assets/logo_complete_color.png'
import { menuList } from '../utils/router'
import { Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'

function Footer() {
  const itemList = menuList.map((item) => {
    return (
      <Link
        key={item.id ?? item.link}
        to={item.link}
        className='nav-link'
        role='link'
      >
        {item.desc}
      </Link>
    )
  })

  return (
    <footer className='row align-items-center'>
      <figure className='figure col-3'>
        <Image
          id='footer-logo'
          className='figure-img img-fluid'
          objectFit='contain'
          maxHeight={{ base: '150px' }}
          src={logoUrl}
          alt='Little Lemon logo'
        />
      </figure>
      <nav className='col row'>
        <div className='col'>
          <h3>Document Navigation</h3>
          <ul className='nav flex-column'>{itemList}</ul>
        </div>
        <div className='col'>
          <h3>Contact</h3>
          <ul className='nav flex-column'>
            {['Address', 'Phone Number', 'Email'].map((it) => {
              return (
                <li key={it} className='nav-link'>
                  {it}
                </li>
              )
            })}
          </ul>
        </div>
        <div className='col'>
          <h3>Social Media Links</h3>
          <ul className='nav flex-column'>
            {['Address', 'Phone Number', 'Email'].map((it) => {
              return (
                <li key={it} className='nav-link'>
                  {it}
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
