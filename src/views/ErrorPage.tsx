import { useRouteError } from 'react-router-dom'
import '../../src/css/error.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

type RouteError = {
  status: number
  statusText: string
  internal: boolean
  data: string
  error: Error
}

const ErrorPage = () => {
  const error = useRouteError() as RouteError
  return (
    <>
      <Header />
      <main id='error-page'>
        <h1>Oops! We encountered a {error.status} error</h1>
        <h2>{error.statusText}</h2>
        {!error.internal && <p>{error.data}</p>}
      </main>
      <Footer />
    </>
  )
}

export default ErrorPage
