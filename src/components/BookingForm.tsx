import { useForm } from 'react-hook-form'
import { submitApi } from '../utils/fakeApi'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Button, FormLabel, Input, Select, VStack } from '@chakra-ui/react'

type FormValues = {
  date: Date
  time: Date
  guests: number
  occasion: string
}

type BookingProps = {
  timeSlots: string[]
  setDate: React.Dispatch<string>
}

const getCurrentDate = () => {
  const today = new Date()
  const numberOfDaysToAdd = 3
  const date = today.setDate(today.getDate() + numberOfDaysToAdd)
  return new Date(date).toISOString().split('T')[0] // yyyy-mm-dd
}

function BookingForm(props: BookingProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (submitted) {
      navigate('confirmation')
    }
  }, [navigate, submitted])

  const onSubmit = handleSubmit((data) => setSubmitted(submitApi(data)))
  return (
    <form onSubmit={onSubmit}>
      <VStack>
        <FormLabel htmlFor='res-date'>Choose date</FormLabel>
        <Input
          type='date'
          defaultValue={getCurrentDate()}
          {...register('date', {
            required: true,
            onChange: (e) => {
              props.setDate(e.target.value)
            },
          })}
        />
        <FormLabel htmlFor='res-time'>Choose time</FormLabel>
        <Select id='res-time' {...register('time', { required: true })}>
          {props.timeSlots &&
            props.timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
        </Select>
        <FormLabel htmlFor='guests'>Number of guests</FormLabel>
        <Input
          type='number'
          placeholder='1'
          min='1'
          max='10'
          defaultValue='2'
          {...register('guests', { required: true })}
        />
        <FormLabel htmlFor='occasion'>Occasion</FormLabel>
        <Select id='occasion' {...register('occasion', { required: true })}>
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </Select>
        <Button type='submit'>Make your reservation</Button>
      </VStack>
    </form>
  )
}

export default BookingForm
