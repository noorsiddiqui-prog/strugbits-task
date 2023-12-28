import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'
import { PiUsersThree } from 'react-icons/pi'
import { SidebarItem } from '..'

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <div
        className={`bg-green-900 text-white  text-center w-16 sm:w-44 overflow-hidden transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:relative sm:translate-x-0`}
      >
        {isOpen && (
          <button
            className="block sm:hidden absolute top-0 right-0 m-4 focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Close Sidebar"
          >
            <IoClose />
          </button>
        )}
        <div className=" w-44 flex flex-col items-center py-4">
          <h1 className="text-2xl font-bold">SAVIYNT</h1>
          {/* Sidebar Content */}
          <ul>
            <SidebarItem title="Customers" icon={<PiUsersThree />} path="/" />
          </ul>
        </div>
      </div>
      {/* Hamburger Icon */}
      {!isOpen && (
        <div className="sm:hidden absolute top-0 left-0 m-4">
          <button
            className="focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      )}
    </div>
  )
}

export default Sidebar
