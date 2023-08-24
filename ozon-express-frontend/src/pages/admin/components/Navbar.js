import { useAuth } from 'context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';
import Dropdown from './Dropdown';
import { BiSolidUser } from 'react-icons/bi';
import Button from 'components/Button';
import { useDarkMode } from 'context/DarkModeContext';
import { HiOutlineMoon } from 'react-icons/hi';
import { FiChevronDown, FiLogOut } from 'react-icons/fi';
import { BsSun } from 'react-icons/bs';
import { AiOutlineCheck, AiOutlineSetting } from 'react-icons/ai';

function Navbar({ sidebarOpen, toggleSidebarOpen }) {
    const { user, setJwtToken } = useAuth();
    const { darkMode, setDarkMode } = useDarkMode();

    const handleClick = (darkMode) => {
        setDarkMode(darkMode)
    }

    const darkModeDropdown = {
        style: 'bg-ozon-gray rounded-lg dark:text-white dark:bg-ozon-dark-gray',
        button:
            <p>
                {darkMode ?
                    <span className='flex items-center text-xs space-x-2 p-2'>
                        <HiOutlineMoon /> <span>Dark</span> <FiChevronDown />
                    </span>
                    :
                    <span className='flex items-center text-xs space-x-2 p-2'>
                        <BsSun /> <span>Light</span> <FiChevronDown />
                    </span>
                }
            </p>,
        ulStyle: 'w-[140%] left-0 bg-ozon-gray dark:bg-ozon-dark-gray dark:border-zinc-800 shadow-md border',
        lis: [
            <Button button={{
                action: () => handleClick(false),
                style: 'justify-between text-xs hover:text-white hover:bg-ozon-dark-gray p-1.5 w-full rounded-md dark:text-white dark:hover:text-black dark:hover:bg-ozon-gray',
                icon: <span className='flex items-center space-x-2'><BsSun /> <span>Light</span></span>,
                text: <span>{!darkMode && <AiOutlineCheck />}</span>
            }} />,
            <Button button={{
                action: () => handleClick(true),
                style: 'justify-between text-xs hover:text-white hover:bg-ozon-dark-gray p-1.5 w-full rounded-md dark:text-white dark:hover:text-black dark:hover:bg-ozon-gray',
                icon: <span className='flex items-center space-x-2'><HiOutlineMoon /> <span>Dark</span></span>,
                text: <span>{darkMode && <AiOutlineCheck />}</span>
            }} />
        ]
    }

    const userDropdown = {
        style: 'rounded-lg dark:text-white',
        button:
            <p className='flex items-center text-xs space-x-2'>
                <BiSolidUser /> <span>{user?.name}</span> <FiChevronDown />
            </p>,
        ulStyle: 'w-fit right-0 shadow-md border bg-white dark:bg-black dark:border-zinc-800',
        lis: [
            <Button button={{
                style: 'justify-between text-xs p-1.5 w-full rounded-md',
                icon: <span className='flex items-center space-x-2 whitespace-nowrap text-ozon-red dark:text-ozon-yellow'><AiOutlineSetting /> <span className='text-black hover:text-ozon-red dark:text-white dark:hover:text-ozon-yellow'>Paramétre</span></span>
            }} />,
            <Button button={{
                action: () => logout(),
                style: 'justify-between text-xs p-1.5 w-full rounded-md',
                icon: <span className='flex items-center space-x-2 whitespace-nowrap text-ozon-red dark:text-ozon-yellow'><FiLogOut /> <span className='text-black hover:text-ozon-red dark:text-white dark:hover:text-ozon-yellow'>Se déconnecter</span></span>
            }} />
        ]
    }

    const navigate = useNavigate();

    const logout = async () => {
        setJwtToken('');
        return navigate('/login')
    }

    return (
        <nav className={`flex justify-between items-center sticky h-16 top-0 right-0 w-full px-5 py-3 z-40 bg-white shadow-sm dark:bg-black`}>
            <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-[240px] lg:ml-0' : 'transition-none'}`}>
                <Button button={{
                    action: () => toggleSidebarOpen(),
                    style: 'hover:text-ozon-red dark:text-white dark:hover:text-ozon-yellow',
                    icon: <RiMenu3Fill />,
                    iconStyle: 'text-2xl p-2'
                }} />
            </div>

            <div className="flex items-center">
                <Dropdown dropdown={darkModeDropdown} />



                <div className='flex space-x-3 ml-4'>
                    <Dropdown dropdown={userDropdown} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar