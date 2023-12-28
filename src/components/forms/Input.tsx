import React from 'react'

interface InputInterface {
  type: string
  name: string
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputInterface> = ({
  type,
  name,
  value,
  onChange,
}: InputInterface) => {
  return (
    <>
      <div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e: any) => onChange(e)}
          className="border border-gray-400 w-full h-9 rounded-md px-4"
        />
      </div>
    </>
  )
}

export default Input
