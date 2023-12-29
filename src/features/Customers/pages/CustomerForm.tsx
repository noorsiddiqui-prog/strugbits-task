import React, { useEffect, useState } from 'react'
import { FieldGenerator } from '@components/forms'
import * as Yup from 'yup'
import {
  useAddCustomerMutation,
  useFetchSingleCustomerQuery,
  useUpdateCustomerMutation,
} from '../service'
import { useParams } from 'react-router-dom'

interface CustomerFormInterface {
  id?: number | string
}

const CustomerForm: React.FC<CustomerFormInterface> = ({}: CustomerFormInterface) => {
  const paramId = useParams()
  const { id } = paramId
  const fieldConfig: any[] = [
    {
      name: 'first_name',
      type: 'text',
      label: 'Customer First Name',
      validation: Yup.string().required('Customer Name is required'),
    },
    {
      name: 'last_name',
      type: 'text',
      label: 'Customer Last Name',
      validation: Yup.string().required('Customer Name is required'),
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      validation: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    },
    {
      name: 'avatar',
      type: 'dropzone',
      label: 'Image',
      validation: Yup.mixed().nullable(),
    },
  ]
  const [addCustomer] = useAddCustomerMutation()
  const [updateCustomer] = useUpdateCustomerMutation()
  const {
    data: singleCustomer,
    isLoading,
    isError,
    error,
    refetch,
  } = useFetchSingleCustomerQuery(id)

  const [initialValues, setInitialValues] = useState<{ [key: string]: any }>({
    first_name: '',
    last_name: '',
    email: '',
  })

  const [formInitialized, setFormInitialized] = useState(false)

  useEffect(() => {
    if (singleCustomer?.data) {
      const {
        first_name = '',
        last_name = '',
        email = '',
      } = singleCustomer.data
      setInitialValues({ first_name, last_name, email })
      setFormInitialized(true)
    }
  }, [singleCustomer])

  if (!formInitialized) {
    return <div>Loading...</div> // Or a loading indicator while data is being fetched
  }

  const handleSubmit = async (values: any) => {
    try {
      if (!id) {
        const newCustomerData = {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
        }

        const { data } = await addCustomer(newCustomerData).unwrap()
        console.log('New Customer Added:', data)
      } else {
        const updateCustomerData = {
          first_name: values.first_name || '',
          last_name: values.last_name || '',
          email: values.email || '',
        }
        const response = await updateCustomer(updateCustomerData)
        if ('data' in response) {
          console.log('Updated post:', response.data)
        } else if ('error' in response) {
          console.error('Update error:', response.error)
        }
      }
    } catch (error) {
      console.error('Error adding customer:', error)
    }
  }

  // const initialValues: { [key: string]: any } = {
  //   first_name: singleCustomer?.data?.first_name || '',
  //   last_name: singleCustomer?.data?.last_name || '',
  //   email: singleCustomer?.data?.email || '',
  // }

  return (
    <div className="w-full p-4 sm:p-12 ">
      <h1 className="text-2xl font-medium mb-8 text-center">
        {id ? 'Edit Customer' : 'Add Customer'}
      </h1>
      <FieldGenerator
        fieldConfig={fieldConfig}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        isEditMode={id ? true : false}
      />
    </div>
  )
}

export default CustomerForm
