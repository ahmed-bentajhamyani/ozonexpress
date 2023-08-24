import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import useToggle from 'hooks/useToggle'
import { isMobile, isTablet } from 'react-device-detect'

function Admin() {

    const [sidebarOpen, setSidebarOpen] = useToggle(isMobile || isTablet ? false : true)

    return (
        <div className='flex min-h-screen bg-ozon-gray dark:bg-ozon-dark-gray'>
            <Sidebar sidebarOpen={sidebarOpen} toggleSidebarOpen={setSidebarOpen} />
            <div className='flex flex-col flex-1'>
                <Navbar sidebarOpen={sidebarOpen} toggleSidebarOpen={setSidebarOpen} />
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Admin