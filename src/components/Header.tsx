import { Link } from "react-router-dom"
import Layout from "./Layout"
import { useApp } from "../contexts/AppContext"

function Logo() {
  return (
    <Link to='/'>
      <p className='text-xl text-white font-bold'>Logo</p>
    </Link>
  )
}
function Navbar() {

  const { isAuthtenticated } = useApp()

  if (isAuthtenticated)
    return (
      <nav>
        <ul className="flex gap-4">
          <li className="text-white">
            <Link to='/profile'>Perfil</Link>
          </li>
        </ul>
      </nav>
    )
  return (
    <nav>
      <ul className="flex gap-4">
        <li className="text-white">
          <Link to='/register'>Registrate</Link>
        </li>
        <li className="text-white">
          <Link to='/login'>Inicia sesion</Link>
        </li>
      </ul>
    </nav>
  )
}

function Header() {
  return (
    <header className='bg-primary py-4 shadow'>
      <Layout>
        <div className="flex justify-between">
          <Logo />
          <Navbar />
        </div>
      </Layout>
    </header>
  )
}

export default Header