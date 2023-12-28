import React from 'react'
import { useNavigate } from 'react-router-dom'

interface SidebarItemInterface {
  icon: React.ReactNode
  title: string
  path: string
}

const SidebarItem: React.FC<SidebarItemInterface> = ({
  icon,
  title,
  path,
}: SidebarItemInterface) => {
  const onNavigate = useNavigate()
  return (
    <>
      <li className="py-2 mt-8">
        <button
          onClick={() => {
            onNavigate(path)
          }}
          className="bg-[#013220] py-2 px-4 rounded-md uppercase font-medium text-sm flex items-center shadow-md shadow-green-800"
        >
          <div className="mr-2">{icon}</div>
          {title}
        </button>
      </li>
    </>
  )
}

export default SidebarItem
