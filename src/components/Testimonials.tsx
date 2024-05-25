import Testimonial from './TestimonialCard'
import { TestimonialProps } from './TestimonialCard'

const testimonials: TestimonialProps[] = [
  {
    person: {
      name: 'Kev',
      avatar: 'https://picsum.photos/200',
    },
    rating: 5,
    review: 'Best restaurant ever. Would do it again.',
  },
  {
    person: {
      name: 'Melissa',
      avatar: 'https://picsum.photos/200',
    },
    rating: 4.5,
    review: 'LOLZ, food was good, and waiter was cute as hell <3',
  },
  {
    person: {
      name: 'Anna',
      avatar: 'https://picsum.photos/200',
    },
    rating: 4.5,
    review: 'Nice restaurant, with food for all the family.',
  },
]

function Testimonials() {
  return (
    <section id='testimonials' className='row'>
      <h1 className='section-title text-center'>Testimonials</h1>
      <div className='carousel slide' data-bs-ride='carousel'>
        <div
          className='carousel-inner'
          style={{ marginLeft: '33%', marginRight: '33%' }}
        >
          {testimonials.map((t) => (
            <Testimonial
              key={t.person.name}
              person={t.person}
              rating={t.rating}
              review={t.review}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
