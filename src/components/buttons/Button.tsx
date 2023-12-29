import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  let buttonClass = 'py-2 px-4 rounded focus:outline-none min-w-20 text-sm'

  if (variant === 'primary') {
    buttonClass += ' bg-green-400 text-green-900'
  } else if (variant === 'secondary') {
    buttonClass += ' bg-red-200 text-red-900'
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}

export default Button
