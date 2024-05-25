import {
  CardBody,
  CardFooter,
  CardHeader,
  Card as ChakraCard,
  Image,
} from '@chakra-ui/react'

export type CardProps = {
  title: string
  price: string
  description?: string
  imageUrl: string
}

const Card = (cardProps: CardProps) => {
  return (
    <article className='col-9 col-sm-5 col-lg-2'>
      <ChakraCard>
        <CardHeader>
          <Image
            objectFit='fill'
            src={cardProps.imageUrl}
            width={{ base: '100%' }}
            height={{ base: '25vh' }}
            borderTopRadius={{ base: '16pt' }}
          />
        </CardHeader>
        <CardBody>
          <div className='row'>
            <h1 className='card-title col'>{cardProps.title}</h1>
            <p className='card-price col-4 text-nowrap'>${cardProps.price}</p>
          </div>
          <p>
            {cardProps.description ??
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
          </p>
        </CardBody>
        <CardFooter>
          <a>Order a delivery +1</a>
        </CardFooter>
      </ChakraCard>
    </article>
  )
}

export default Card
