import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  let buttonClass = 'py-2 px-4 rounded focus:outline-none min-w-20'

  if (variant === 'primary') {
    buttonClass += 'bg-green-200 text-green-900 text-sm'
  } else if (variant === 'secondary') {
    buttonClass += 'bg-red-200 text-red-900 text-sm'
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}

export default Button
