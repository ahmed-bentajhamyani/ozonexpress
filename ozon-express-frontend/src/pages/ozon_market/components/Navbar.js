import React from 'react'
import { Link } from 'react-scroll'
import OzonLogo from 'assets/brand/ozonexpress_logo.png'
import { BiSolidUser } from 'react-icons/bi'
import { HiOutlineMoon, HiOutlineShoppingCart } from 'react-icons/hi'
import Button from 'components/Button'
import useToggle from 'hooks/useToggle'
import { usePanier } from 'context/PanierContext'
import { useDarkMode } from 'context/DarkModeContext'
import { BsSun } from 'react-icons/bs'


function Navbar() {

    const [navbarOpen, setNavbarOpen] = useToggle(false)
    const { setShowPanier } = usePanier();

    const Links = [
        { title: "Home", goTo: 'services' },
        { title: "Blog", goTo: 'faqs' },
    ]

    const Buttons = [
        {
            action: () => setShowPanier(true),
            style: 'flex justify-center items-center w-12 h-10 p-3 border rounded hover:text-ozon-red duration-300 active:duration-0 active:ring-4 active:outline-none active:ring-ozon-red-tint',
            icon: <HiOutlineShoppingCart />,
            iconStyle: 'text-2xl',
            mobile: true
        },
        {
            style: 'flex justify-center items-center w-12 h-10 p-3  bg-ozon-red hover:bg-ozon-red-tone rounded duration-300 active:duration-0 active:ring-4 active:outline-none active:ring-ozon-red-tint',
            icon: <BiSolidUser />,
            iconStyle: 'text-2xl text-white',
            mobile: true
        },
        {
            action: () => setShowPanier(true),
            style: 'cursor-pointer hover:text-ozon-red-tone dark:text-white dark:hover:text-ozon-yellow',
            icon: <HiOutlineShoppingCart />,
            iconStyle: 'text-xl'
        },
        {
            style: 'cursor-pointer hover:text-ozon-red-tone dark:text-white dark:hover:text-ozon-yellow',
            icon: <BiSolidUser />,
            iconStyle: 'text-xl'
        },
    ]

    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <nav className={`h-16 lg:h-20 fixed top-0 left-0 w-full bg-white z-40 dark:bg-black`}>
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
                        <Link smooth to={"/"} onClick={() => setNavbarOpen(false)} className="cursor-pointer">
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

                        {Buttons.filter(button => button.mobile).map((button, index) => (
                            <Button button={button} key={index}/>
                        ))}
                    </div>
                </div>

                {/* link items */}
                <ul className={`container px-5 md:px-10 lg:px-0 py-3 lg:py-0 lg:flex lg:items-center lg:text-sm lg:space-x-4 absolute lg:static bg-white lg:bg-transparent lg:z-auto z-[-1] left-0 w-full lg:w-auto transition-all duration-500 ease-in dark:bg-black dark:lg:bg-transparent ${navbarOpen ? 'top-16' : 'top-[-490px]'}`}>
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
                        {Buttons.filter(button => !button.mobile).map((button, index) => (
                            <Button button={button} key={index} />
                        ))}
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar