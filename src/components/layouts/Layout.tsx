import React from 'react'
import { Sidebar } from '@components/layouts'

interface LayoutInterface {
  children: React.ReactNode
}

const Layout: React.FC<LayoutInterface> = ({ children }: LayoutInterface) => {
  return (
    <>
      <div className="h-screen flex w-full overflow-y-hidden">
        <Sidebar />
        <div className="w-full py-4 overflow-y-scroll scrollbar-hidden">
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
