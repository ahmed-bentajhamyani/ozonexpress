import Button from 'components/Button';
import React from 'react'
import { RiMenu3Fill } from 'react-icons/ri';
import Dropdown from './Dropdown';

function Navbar({ sidebarOpen, toggleSidebarOpen }) {

    return (
        <nav className={`flex items-center sticky min-h-16 top-0 right-0 w-full p-3 z-30 bg-white shadow-sm mb-3 dark:bg-black`}>
            <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-[240px] lg:ml-0' : 'transition-none'}`}>
                <Button button={{
                    action: () => toggleSidebarOpen(),
                    style: 'hover:text-ozon-red dark:text-white dark:hover:text-ozon-yellow',
                    icon: <RiMenu3Fill />,
                    iconStyle: 'text-2xl p-2'
                }} />
            </div>

            <Dropdown />
        </nav>
    )
}

export default Navbar