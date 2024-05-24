import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className='container gy-4'>
      <Header />
      <main className='container'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
