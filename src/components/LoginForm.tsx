import { useState, ChangeEvent, FormEvent } from 'react'
import Input from './Input'
import Button from "./Button"
import { useApp } from '../contexts/AppContext'

function LoginForm() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useApp()

  function handleChangeUsername(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value)
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await login(username, password)
  }

  return (
    <form
      className='w-full max-w-[400px] flex flex-col gap-4'
      onSubmit={handleSubmit}
    >
      <h2 className='text-2xl text-gray-700 font-bold mb-2 text-center'>Iniciar sesion</h2>
      <Input label='Nombre de usuario' placeholder='Nombre de usuario' value={username} onChange={handleChangeUsername} />
      <Input label='Contrasenia' placeholder='Contrasenia' value={password} onChange={handleChangePassword} />
      <Button type='submit'>Iniciar sesion</Button>
    </form>
  )
}

export default LoginForm
