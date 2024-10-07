import { useState, ChangeEvent, FormEvent } from 'react'
import Input from './Input'
import Button from "./Button"

function ReserveForm() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  function handleDate(event: ChangeEvent<HTMLInputElement>) {
    setDate(event.target.value)
  }

  function handleTime(event: ChangeEvent<HTMLInputElement>) {
    setTime(event.target.value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form
      className='w-full max-w-[400px] flex flex-col gap-4'
      onSubmit={handleSubmit}
    >
      <h2 className='text-2xl text-gray-700 font-bold mb-2 text-center'>Crear una reserva</h2>
      <Input label='Fecha' placeholder='Fecha' value={date} onChange={handleDate} />
      <Input label='Hora' placeholder='Hora' value={time} onChange={handleTime} />
      <Button type='submit'>Reservar</Button>
    </form>
  )
}

export default ReserveForm
