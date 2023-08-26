import { useState } from 'react'
import { Link } from 'react-scroll'
import OzonLogo from 'assets/brand/ozonexpress_logo.png'
import { BiSolidUser } from 'react-icons/bi'
import useToggle from 'hooks/useToggle'
import { BsSun } from 'react-icons/bs'
import { HiOutlineMoon } from 'react-icons/hi'
import { useDarkMode } from 'context/DarkModeContext'
import { useNavigate } from 'react-router-dom'
import Button from 'components/Button'

function Navbar() {
    const navigate = useNavigate();

    const [navbarOpen, setNavbarOpen] = useToggle(false)
    const [fix, setFix] = useState(false)

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            setFix(true);
        } else {
            setFix(false);
        }
    });

    const Links = [
        { title: "Services", goTo: 'services' },
        { title: "Comment ça marche?", goTo: 'faqs' },
        { title: "Tarifs", goTo: 'tarifs' },
        { title: "Agences", goTo: 'agences' },
        { title: "OZON Market", goTo: 'market', style: 'font-bold' },
        { title: "Blog", goTo: 'blogs' },
        { title: "Contact", goTo: 'footer' },
    ]

    const Buttons = [
        // {
        //     style: 'w-9 h-9 border hover:text-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300',
        //     icon: <MdDeliveryDining />,
        //     iconStyle: 'text-2xl',
        //     mobile: true
        // },
        {
            action: () => {navigate('/login')},
            style: 'cursor-pointer hover:text-ozon-red-tone dark:text-white dark:hover:text-ozon-yellow',
            icon: <BiSolidUser />,
            iconStyle: 'text-2xl',
            mobile: true
        },
        // {
        //     style: 'w-9 h-9 text-rose-600 border border-rose-600 cursor-pointer hover:text-white hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300',
        //     icon: <MdDeliveryDining />,
        //     iconStyle: 'text-xl'
        // },
        {
            action: () => {navigate('/login')},
            style: 'cursor-pointer hover:text-ozon-red-tone dark:text-white dark:hover:text-ozon-yellow',
            icon: <BiSolidUser />,
            iconStyle: 'text-lg'
        },
    ]

    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <nav className={`h-16 lg:h-20 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${fix && 'bg-white dark:bg-black'}`}>
            <div className='container relative mx-auto px-5 md:px-10 xl:px-20 py-3 lg:flex lg:items-center justify-between transition-all duration-500 ease-in'>
                <div className="flex justify-between items-center w-full select-none">
                    <div className="flex justify-between items-center">
                        {/* Menu button */}
                        <div className="block lg:hidden mr-2">
                            <button className="flex flex-col justify-center items-center z-50" onClick={() => setNavbarOpen()}>
                                <span className={`h-0.5 mb-1.5 w-6 bg-black dark:bg-white ease-in-out duration-300 ${navbarOpen && 'rotate-45 translate-y-2'}`}>
                                </span>
                                <span className={`h-0.5 mb-1.5 w-6 bg-black dark:bg-white ease-in-out duration-150 ${navbarOpen && 'opacity-0'}`}>
                                </span>
                                <span className={`h-0.5 w-6 bg-black dark:bg-white ease-in-out duration-300 ${navbarOpen && '-rotate-45 -translate-y-2'}`}>
                                </span>
                            </button>
                        </div>

                        {/* Logo */}
                        <Link 
                        smooth to={"home"} onClick={() => setNavbarOpen(false)} className="cursor-pointer">
                            <img src={OzonLogo} className='h-11 lg:h-auto' alt="Logo" />
                        </Link>
                    </div>

                    {/* mobile version buttons */}
                    <div className='flex lg:hidden justify-between items-center space-x-2'>
                        {/* Darkmode */}
                        <div className={`flex items-center`}>
                            <input type="checkbox" id="darkmode-toggle" onClick={() => setDarkMode(!darkMode)} />
                            <label className='darkmode-toggle' htmlFor="darkmode-toggle">
                                <span className='sun text-xs'><BsSun /></span>
                                <span className='moon text-xs'><HiOutlineMoon /></span>
                            </label>
                        </div>

                        {
                            Buttons.filter(button => button.mobile).map((button, index) => (
                                <Button button={button} key={index} />
                            ))
                        }
                    </div>
                </div>

                {/* link items */}
                <ul className={`container px-5 md:px-10 lg:px-0 py-3 lg:py-0 lg:flex lg:items-center lg:text-sm lg:space-x-4 absolute lg:static bg-white lg:bg-transparent lg:z-auto z-[-1] left-0 w-full lg:w-auto transition-all duration-500 ease-in dark:bg-black dark:lg:bg-transparent ${navbarOpen ? 'top-16' : 'top-[-490px]'}`
                }>
                    {Links.map((link, index) => (
                        <li className='mt-2 lg:mt-0' key={index}>
                            <Link smooth to={link.goTo} onClick={() => setNavbarOpen()} className={`cursor-pointer whitespace-nowrap hover:text-rose-700 duration-300 select-none dark:text-white dark:hover:text-ozon-yellow ${link.style}`}>
                                {link.title}
                            </Link>
                        </li>
                    ))}

                    {/* Darkmode */}
                    <div className="hidden lg:flex items-center">
                        <input type="checkbox" id="darkmode-toggle" onClick={() => setDarkMode(!darkMode)} />
                        <label className='darkmode-toggle' htmlFor="darkmode-toggle">
                            <span className='sun text-white text-xs'><BsSun /></span>
                            <span className='moon text-white text-xs'><HiOutlineMoon /></span>
                        </label>
                    </div>

                    {/* button */}
                    <div className='hidden lg:flex space-x-3 ml-4'>
                        {Buttons.filter((button) => !button.mobile).map((button, index) => (
                            <Button button={button} key={index} />

                        ))}
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar