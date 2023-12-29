import React, { useState, useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'
import { PiUsersThree } from 'react-icons/pi'
import { SidebarItem } from '..'

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640) // Set the breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640) // Set the breakpoint as needed
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex h-screen bg-gray-200  ">
      {/* Sidebar */}
      <div
        className={`bg-green-900 text-white text-center w-16 sm:w-44 overflow-hidden transition-all duration-300 ${
          isSmallScreen && !isOpen ? '-translate-x-full' : 'translate-x-0'
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
        <div className="w-44 flex flex-col items-center py-4">
          <h1 className="text-2xl font-bold">SAVIYNT</h1>
          {/* Sidebar Content */}
          <ul>
            <SidebarItem title="Customers" icon={<PiUsersThree />} path="/" />
          </ul>
        </div>
      </div>
      {/* Hamburger Icon */}
      {!isOpen && isSmallScreen && (
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
      {/* Mask for closing sidebar on small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        />
      )}
    </div>
  )
}

export default Sidebar
