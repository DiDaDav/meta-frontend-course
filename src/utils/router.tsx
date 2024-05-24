import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import BookPage from '../views/BookPage'
import BookingConfirmation from '../views/BookingConfirmation'
import ErrorPage from '../views/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'book',
    element: <BookPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'book/confirmation',
    element: <BookingConfirmation />,
    errorElement: <ErrorPage />,
  },
])

export { router }
