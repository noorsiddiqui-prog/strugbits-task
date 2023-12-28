import React from 'react'
import { AddCustomerButton, CustomerList } from '..'

interface CustomerInterface {}

const Customer: React.FC<CustomerInterface> = ({}: CustomerInterface) => {
  return (
    <>
      <div className="px-4 bg-green-50">
        <AddCustomerButton />
        <CustomerList
          items={[
            {
              name: 'Noor',
              email: 'noorsiddiqui048@gmail.com',
              imageUrl: 'https://picsum.photos/200/300',
              id: 1,
            },
            {
              name: 'Noor',
              email: 'noorsiddiqui048@gmail.com',
              imageUrl: 'https://picsum.photos/200/300',
              id: 1,
            },
            {
              name: 'Noor',
              email: 'noorsiddiqui048@gmail.com',
              imageUrl: 'https://picsum.photos/200/300',
              id: 1,
            },
            {
              name: 'Noor',
              email: 'noorsiddiqui048@gmail.com',
              imageUrl: 'https://picsum.photos/200/300',
              id: 1,
            },
            {
              name: 'Noor',
              email: 'noorsiddiqui048@gmail.com',
              imageUrl: 'https://picsum.photos/200/300',
              id: 1,
            },
            {
              name: 'Noor',
              email: 'noorsiddiqui048@gmail.com',
              imageUrl: 'https://picsum.photos/200/300',
              id: 1,
            },
          ]}
        />
      </div>
    </>
  )
}

export default Customer
