import React from 'react'
import { Button } from '..'
import { useNavigate } from 'react-router-dom'
import { useDeleteCustomerMutation } from '@features/Customers'

interface ItemInterface {
  id: number
  name: string
  email: string
  imageUrl: string
}

const Item: React.FC<ItemInterface> = ({
  id,
  name,
  email,
  imageUrl,
}: ItemInterface) => {
  const onNavigate = useNavigate()

  const [onDelete] = useDeleteCustomerMutation()

  return (
    <tr className="bg-white rounded-lg ">
      <td className="px-3  py-4 w-16 rounded-l-lg">
        <div className="flex justify-center items-center h-14 w-16 overflow-hidden">
          <img
            src={imageUrl}
            alt="image"
            width={'100%'}
            height={'auto'}
            className="object-cover rounded w-full h-full"
          />
        </div>
      </td>
      <td className="mx-4 text-center">{id}</td>
      <td className="text-center">{name}</td>
      <td className="text-center">{email}</td>
      <td className="rounded-r-lg ">
        <div className="flex">
          <div>
            <Button onClick={() => onNavigate(`/edit/${id}`)}>Edit</Button>
          </div>
          <div className="ml-4">
            <Button variant="secondary" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default Item
