import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Customer, CustomerForm } from './Customers/pages'
import { Layout } from '@components/layouts'

interface AppRoutesInterface {}

const AppRoutes: React.FC<AppRoutesInterface> = ({}: AppRoutesInterface) => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Customer />} />
          <Route path="/add" element={<CustomerForm />} />
          <Route path="/edit/:id" element={<CustomerForm />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default AppRoutes
