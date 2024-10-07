import { ChangeEvent } from 'react'

type Props = {
  className?: string
  label?: string
  placeholder?: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function Input({ className = '', label = '', placeholder = '', value, onChange }: Props) {
  return (
    <div className={className}>
      <label
        className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`input-${label}`}
      >
        {label}
      </label>
      <input
        id={`input-${label}`}
        className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input