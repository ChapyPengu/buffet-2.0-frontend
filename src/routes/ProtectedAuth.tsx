import { Navigate, Outlet } from 'react-router-dom'
import { useApp } from '../contexts/AppContext'

function ProtectedAuth() {

  const { isAuthtenticated } = useApp()

  if (!isAuthtenticated)
    return <Navigate to='/home' />

  return <Outlet />
}

export default ProtectedAuth