import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ReservePage from './pages/ReservePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function ProtectedAuth() {
  
}

function App() {
  return (
    <div className='min-h-screen overflow-hidden'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/reserve' element={<ReservePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route element>

        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App