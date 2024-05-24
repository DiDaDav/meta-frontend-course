import { Button, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import pizzaUrl from '../assets/pizza.jpg'

function HeroSection() {
  return (
    <section id='heroSection' className='row'>
      <div className='col-6'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Laurem ipsum</p>
        <Button role='button'>
          <Link to='/book'>Reserve a table</Link>
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
