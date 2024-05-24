import { createBrowserRouter } from 'react-router-dom'
import BookPage from '../views/BookPage'
import BookingConfirmation from '../views/BookingConfirmation'
import ErrorPage from '../views/ErrorPage'
import HomePage from '../views/HomePage'
import App from '../App'

const menuList = [
  {
    id: 'Home',
    link: '/',
    desc: 'Home',
  },
  {
    id: 'About',
    link: '/about',
    desc: 'About',
  },
  {
    id: 'Menu',
    link: '/menu',
    desc: 'Menu',
  },
  {
    id: 'Reservations',
    link: '/book',
    desc: 'Reservations',
  },
  {
    id: 'Order',
    link: '/order',
    desc: 'Order online',
  },
  {
    id: 'Login',
    link: '/login',
    desc: 'Login',
  },
]

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

export { router, menuList }
