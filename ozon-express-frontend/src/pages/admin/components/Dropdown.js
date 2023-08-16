import Button from 'components/Button';
import { useDarkMode } from 'context/DarkModeContext';
import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai';
import { BsChevronCompactDown, BsSun } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { HiOutlineMoon } from 'react-icons/hi';

function Dropdown() {

    const [isOpen, setIsOpen] = useState(false);
    const { darkMode, setDarkMode } = useDarkMode();

    const handleClick = (darkmode) => {
        setIsOpen(false)
        setDarkMode(darkmode)
    }

    return (
        <div className="relative flex flex-col items-center bg-ozon-gray rounded-lg dark:text-white dark:bg-ozon-dark-gray">
            <button onClick={() => setIsOpen((prev) => !prev)} className=''>
                {darkMode ?
                    <p className='flex items-center text-xs space-x-2 p-2'>
                        <HiOutlineMoon /> <span>Dark</span> <FiChevronDown />
                    </p>
                    :
                    <p className='flex items-center text-xs space-x-2 p-2'>
                        <BsSun /> <span>Light</span> <FiChevronDown />
                    </p>
                }
            </button>
            {isOpen &&
                <div className='absolute top-9 left-0 bg-ozon-gray w-[140%] p-2 shadow-md border rounded-lg dark:bg-ozon-dark-gray dark:border-zinc-800'>
                    {/* <button onClick={() => handleClick(false)} className='flex justify-between items-center text-xs hover:text-white hover:bg-ozon-dark-gray p-1.5 w-full rounded-md dark:text-white dark:hover:text-black dark:hover:bg-ozon-gray'>
                        <span className='flex items-center space-x-2'><BsSun /> <span>Light</span></span>
                        <span>{!darkMode && <AiOutlineCheck />}</span>
                    </button>
                    <button onClick={() => handleClick(true)} className='flex justify-between items-center text-xs hover:text-white hover:bg-ozon-dark-gray p-1.5 w-full rounded-md dark:text-white dark:hover:text-black dark:hover:bg-ozon-gray'>
                        <span className='flex items-center space-x-2'><HiOutlineMoon /> <span>Dark</span></span>
                        <span>{darkMode && <AiOutlineCheck />}</span>
                    </button> */}
                    
                    <Button button={{
                        action: () => handleClick(false),
                        style: 'justify-between text-xs hover:text-white hover:bg-ozon-dark-gray p-1.5 w-full rounded-md dark:text-white dark:hover:text-black dark:hover:bg-ozon-gray',
                        icon: <span className='flex items-center space-x-2'><BsSun /> <span>Light</span></span>,
                        text: <span>{!darkMode && <AiOutlineCheck />}</span>
                    }} />
                    <Button button={{
                        action: () => handleClick(true),
                        style: 'justify-between text-xs hover:text-white hover:bg-ozon-dark-gray p-1.5 w-full rounded-md dark:text-white dark:hover:text-black dark:hover:bg-ozon-gray',
                        icon: <span className='flex items-center space-x-2'><HiOutlineMoon /> <span>Dark</span></span>,
                        text: <span>{darkMode && <AiOutlineCheck />}</span>
                    }} />
                </div>
            }
        </div>
    )
}

export default Dropdown