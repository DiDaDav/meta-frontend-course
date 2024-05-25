import { Button } from '@chakra-ui/react'
import Card, { CardProps } from './HighlightCard'
import greekSalad from '../assets/greek-salad.jpg'
import bruschetta from '../assets/bruschetta.jpg'
import frozenLemon from '../assets/frozen-lemon.jpg'

const specials: CardProps[] = [
  {
    imageUrl: greekSalad,
    title: 'Greek salad',
    price: '12.99',
  },
  {
    imageUrl: bruschetta,
    title: 'Bruschetta',
    price: '5.49',
  },
  {
    imageUrl: frozenLemon,
    title: 'Frozen Lemon',
    price: '8.90',
  },
]

function Highlights() {
  return (
    <section id='highlights' className='row'>
      <div className='row align-items-center justify-content-center'>
        <h1 className='section-title col-3'>Specials</h1>
        <Button className='col-2' role='button'>
          Online Menu
        </Button>
      </div>
      <div className='row align-items-start justify-content-center'>
        {specials.map((s) => (
          <Card
            key={s.title}
            imageUrl={s.imageUrl}
            title={s.title}
            price={s.price}
            description={s.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Highlights
