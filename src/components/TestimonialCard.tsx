import {
  Avatar,
  Box,
  CardBody,
  CardHeader,
  Card as ChakraCard,
  Flex,
  Heading,
} from '@chakra-ui/react'

export type TestimonialProps = {
  person: {
    name: string
    avatar: string
  }
  rating: number
  review: string
}

const Testimonial = (props: TestimonialProps) => {
  return (
    <div className='carousel-item active' style={{ width: '33%' }}>
      <ChakraCard>
        <CardHeader>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar name={props.person.name} src={props.person.avatar} />
            <Box>
              <Heading size='sm'>{props.person.name}</Heading>
              <p>{props.rating}/5</p>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody>
          <p>{props.review}</p>
        </CardBody>
      </ChakraCard>
    </div>
  )
}

export default Testimonial
