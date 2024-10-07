import { ReactNode } from 'react'

type Props = {
  variant?: 'normal' | 'outline'
  type?: 'button' | 'submit' | 'reset'
  children?: ReactNode
}

function Button({
  variant = 'normal',
  type = 'button',
  children
}: Props) {

  if (variant === 'outline')
    return (
      <button
        className="bg-transparent hover:bg-secondary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded"
        type={type}
      >
        {children}
      </button>
    )

  return (
    <button
      className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
      type={type}
    >
      {children}
    </button>
  )
}

export default Button