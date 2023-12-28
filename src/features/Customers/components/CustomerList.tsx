import { Item } from '@components/items'
import React, { useEffect, useState } from 'react'
import { TbArrowsMoveVertical } from 'react-icons/tb'
import { useFetchCutomersQuery } from '..'

interface ListItem {
  id: number
  name: string
  email: string
  imageUrl: string
}

interface CustomerListInterface {
  items: ListItem[]
  customerId?: number | string
}
const CustomerList: React.FC<CustomerListInterface> = ({
  customerId,
}: CustomerListInterface) => {
  const { data: customers, isLoading, isError } = useFetchCutomersQuery({
    limit: '20',
    page: '0',
  })

  const [customersData, setCustomersData] = useState([])

  useEffect(() => {
    console.log('Customers:', customers)
  }, [customers])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching data</div>
  }
  return (
    <>
      <table className="table- w-full border-separate border-spacing-y-3 border-1 border-red-900">
        <thead>
          <tr className="bg-green-200">
            <th className="w-16 h-12 rounded-l-lg "></th>
            <th>
              <div className="flex items-center justify-center">
                <div>Customer ID</div>
                <TbArrowsMoveVertical
                  style={{ width: '18px', height: '16px', marginLeft: '5px' }}
                />
              </div>
            </th>
            <th>
              <div className="flex items-center justify-center">
                <div>Customer Name</div>
                <TbArrowsMoveVertical
                  style={{ width: '18px', height: '16px', marginLeft: '5px' }}
                />
              </div>
            </th>
            <th>
              <div className="flex items-center justify-center">
                <div>Email</div>
                <TbArrowsMoveVertical
                  style={{ width: '18px', height: '16px', marginLeft: '5px' }}
                />
              </div>
            </th>
            <th className="rounded-r-lg"></th>
          </tr>
        </thead>
        <tbody>
          {customers &&
            customers.data.length > 0 &&
            customers.data.map((item: any) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.first_name + ' ' + item.last_name}
                email={item.email}
                imageUrl={item.avatar}
              />
            ))}
        </tbody>
      </table>
    </>
  )
}

export default CustomerList
