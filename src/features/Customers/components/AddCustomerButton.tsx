import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

interface AddCustomerButtonInterface {}

const AddCustomerButton: React.FC<AddCustomerButtonInterface> = ({}: AddCustomerButtonInterface) => {
  const onNavigate = useNavigate()

  return (
    <>
      <button
        onClick={() => {
          onNavigate('/add')
        }}
        className="bg-gradient-to-r from-green-500 via-green-700 to-green-800 flex justify-center items-center py-3 px-4 rounded-md font-medium text-white uppercase text-sm"
      >
        <div className="mr-2 ">
          <IoMdAdd />
        </div>
        Add New Customer
      </button>
    </>
  )
}

export default AddCustomerButton
