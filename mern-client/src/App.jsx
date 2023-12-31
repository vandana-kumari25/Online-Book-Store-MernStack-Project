
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import FooterMain from './components/FooterMain'
import { useContext } from 'react'
import { AuthContext } from './contexts/AuthProvider'

function App() {
  const {user} = useContext(AuthContext)

  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
      <Outlet/>
    </div>
    <FooterMain/>
    </>
  )
}

export default App
