import { useReducer } from 'react'
import BookingForm from '../components/BookingForm'
import { fetchApi } from '../utils/fakeApi'

const initializeTimes = () => {
  return fetchApi(new Date())
}

const updateTimes = (_state: string[], action: string) => {
  return fetchApi(new Date(action))
}

const BookPage = () => {
  const [times, timeAction] = useReducer(updateTimes, initializeTimes())
  return (
    <div id='bookingForm' className='row justify-content-center'>
      <BookingForm timeSlots={times} setDate={timeAction} />
    </div>
  )
}

export default BookPage
