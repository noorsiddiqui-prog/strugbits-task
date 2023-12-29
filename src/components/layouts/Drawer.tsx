import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'
import { PiUsersThree } from 'react-icons/pi'
import { SidebarItem } from '..'

const Drawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex h-screen">
      {/* Hamburger Icon */}
      <div className="sm:hidden fixed top-0 left-0 m-4">
        <button
          className="focus:outline-none"
          onClick={toggleDrawer}
          aria-label="Toggle Drawer"
        >
          {isOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>

      {/* Drawer */}
      <div
        className={`bg-green-900 text-white w-48 fixed top-0 left-0 h-screen overflow-y-auto z-50 transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:static md:translate-x-0`}
      >
        <div className="py-2 px-4 flex justify-between items-center">
          {/* Close Icon */}
          <button
            onClick={toggleDrawer}
            className="focus:outline-none text-white sm:hidden"
          >
            <IoClose size={24} />
          </button>
        </div>
        {/* Drawer Content */}
        <div className="w-44 flex flex-col items-center py-4">
          <h1 className="text-2xl font-bold">SAVIYNT</h1>
          {/* Sidebar Content */}
          <ul>
            <SidebarItem title="Customers" icon={<PiUsersThree />} path="/" />
          </ul>
        </div>
      </div>

      {/* Mask for closing drawer on small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleDrawer}
        />
      )}
    </div>
  )
}

export default Drawer
