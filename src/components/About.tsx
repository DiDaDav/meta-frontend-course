import { Image } from '@chakra-ui/react'
import mario from '../assets/mario.png'
import luigi from '../assets/Luigi.png'

function About() {
  return (
    <section
      id='about'
      className='row align-items-center justify-content-evenly'
    >
      <div className='col-4 col-sm-4'>
        <h1 className='title'>Little Lemon</h1>
        <h2 className='subtitle'>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <aside className='col-3'>
        <figure className='figure col-4'>
          <Image
            className='col figure-img img-fluid'
            objectFit='contain'
            src={mario}
            alt='Mario'
          />
        </figure>
        <figure className='figure col-4'>
          <Image
            className='figure-img img-fluid'
            objectFit='contain'
            src={luigi}
            alt='Lugi'
          />
        </figure>
      </aside>
    </section>
  )
}

export default About
