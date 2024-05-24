import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <main className='container-fluid gx-0'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
