import { createBrowserRouter } from 'react-router-dom'
import BookPage from '../views/BookPage'
import BookingConfirmation from '../views/BookingConfirmation'
import ErrorPage from '../views/ErrorPage'
import HomePage from '../views/HomePage'
import App from '../App'

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'book',
        element: <BookPage />,
      },
      {
        path: 'book/confirmation',
        element: <BookingConfirmation />,
      },
    ],
  },
])

export { router }
