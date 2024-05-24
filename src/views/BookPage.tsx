import { useReducer, useState } from 'react'
import BookingForm from '../components/BookingForm'
import { fetchApi } from '../utils/fakeApi'

const initializeTimes = () => {
  return fetchApi(new Date())
}

const updateTimes = (_state: string[], action: string) => {
  console.log(action)
  return fetchApi(new Date(action))
}

const BookPage = () => {
  const [times, timeAction] = useReducer(updateTimes, initializeTimes())
  const [selectedDate] = useState()
  return (
    <>
      <h1>Table for the {selectedDate}</h1>
      <BookingForm timeSlots={times} setDate={timeAction} />
    </>
  )
}

export default BookPage
