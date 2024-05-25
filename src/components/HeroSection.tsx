import { Button, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import pizzaUrl from '../assets/pizza.jpg'

function HeroSection() {
  return (
    <section
      id='heroSection'
      className='row align-items-center justify-content-evenly'
    >
      <div className='col-4 col-sm-4'>
        <h1 className='title'>Little Lemon</h1>
        <h2 className='subtitle'>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button role='button'>
          <Link to='/book' role='link'>
            Reserve a table
          </Link>
        </Button>
      </div>
      <figure className='figure col-3'>
        <Image
          id='footer-logo'
          className='col figure-img img-fluid'
          objectFit='contain'
          src={pizzaUrl}
          alt='Little Lemon Pizza'
        />
      </figure>
    </section>
  )
}

export default HeroSection
