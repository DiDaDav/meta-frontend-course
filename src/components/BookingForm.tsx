import { useForm } from 'react-hook-form'
import { submitApi } from '../utils/fakeApi'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

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
  }, [submitted])

  const onSubmit = handleSubmit((data) => setSubmitted(submitApi(data)))
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='res-date'>Choose date</label>
      <input
        type='date'
        defaultValue={getCurrentDate()}
        {...register('date', {
          required: true,
          onChange: (e) => {
            props.setDate(e.target.value)
          },
        })}
      />
      <label htmlFor='res-time'>Choose time</label>
      <select id='res-time' {...register('time', { required: true })}>
        {props.timeSlots &&
          props.timeSlots.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
      </select>
      <label htmlFor='guests'>Number of guests</label>
      <input
        type='number'
        placeholder='1'
        min='1'
        max='10'
        defaultValue='1'
        {...register('guests', { required: true })}
      />
      <label htmlFor='occasion'>Occasion</label>
      <select id='occasion' {...register('occasion', { required: true })}>
        <option>None</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type='submit' value='Make Your reservation' />
    </form>
  )
}

export default BookingForm
