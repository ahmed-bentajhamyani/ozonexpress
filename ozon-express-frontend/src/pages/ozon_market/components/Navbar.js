import OzonLogo from 'assets/brand/ozonexpress_logo.png'
import { BiSearch, BiSolidUser } from 'react-icons/bi'
import { HiOutlineMoon, HiOutlineShoppingCart } from 'react-icons/hi'
import Button from 'components/Button'
import useToggle from 'hooks/useToggle'
import { useDarkMode } from 'context/DarkModeContext'
import { BsSearch, BsSun } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import MobileNavbar from './MobileNavbar'
import { usePanier } from 'context/PanierContext'
import SearchBox from 'components/SearchBox'
import { isMobile } from 'react-device-detect'
import SearchArticleCard from './SearchArticleCard'
import SearchArticleCardSkeleton from './SearchArticleCardSkeleton'

function Navbar({ HandleInputChange, searchBoxOpen, isLoading, searchResult }) {
    const navigate = useNavigate();

    const [navbarOpen, setNavbarOpen] = useToggle(false);
    const [fix, setFix] = useState(false);

    const { darkMode, setDarkMode } = useDarkMode();

    const { setShowPanier } = usePanier();

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            setFix(true);
        } else {
            setFix(false);
        }
    });

    const Links = [
        { title: "Home", url: '/' },
        { title: "Blog", url: '/blogs' },
    ]

    const goTo = (route) => {
        navigate(route);

        // Close navbar in mobile
        if (isMobile) setNavbarOpen();
    }

    const Buttons = [
        {
            action: () => setShowPanier(true),
            style: 'flex justify-center items-center w-12 h-12 p-3 border rounded-xl hover:text-ozon-red duration-300 active:duration-0 active:ring-4 active:outline-none active:ring-ozon-red-tint dark:text-white',
            icon: <HiOutlineShoppingCart />,
            iconStyle: 'text-2xl',
            mobile: true
        },
        {
            style: 'flex justify-center items-center w-12 h-12 p-3 bg-ozon-red hover:bg-ozon-red-tone rounded-xl duration-300 active:duration-0 active:ring-4 active:outline-none active:ring-ozon-red-tint',
            icon: <BiSearch />,
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

    return (
        <nav className={`h-fit lg:h-20 fixed top-0 left-0 w-full z-30 transition-all duration-300 ${fix && 'bg-white dark:bg-black'}`}>
            <div className='container relative mx-auto px-5 md:px-10 xl:px-20 py-3 lg:flex lg:items-center justify-between transition-all duration-500 ease-in'>
                <div className="flex justify-between items-center select-none">
                    <div className="flex justify-between items-center">
                        {/* Menu button */}
                        <div className="block lg:hidden mr-2">
                            <button className="flex flex-col justify-center items-center" onClick={() => setNavbarOpen()}>
                                <span className={`h-0.5 mb-1.5 w-6 bg-black dark:bg-white ease-in-out duration-300 ${navbarOpen && 'rotate-45 translate-y-2'}`}>
                                </span>
                                <span className={`h-0.5 mb-1.5 w-6 bg-black dark:bg-white ease-in-out duration-150 ${navbarOpen && 'opacity-0'}`}>
                                </span>
                                <span className={`h-0.5 w-6 bg-black dark:bg-white ease-in-out duration-300 ${navbarOpen && '-rotate-45 -translate-y-2'}`}>
                                </span>
                            </button>
                        </div>

                        {/* Logo */}
                        <div onClick={() => navigate('/market')} className="cursor-pointer">
                            <img src={OzonLogo} className='h-11 lg:h-auto' alt="Logo" />
                        </div>
                    </div>

                    {/* mobile version buttons */}
                    <div className='flex lg:hidden justify-between items-center space-x-2'>
                        {Buttons.filter(button => button.mobile).map((button, index) => (
                            <Button button={button} key={index} />
                        ))}
                    </div>
                </div>

                {/* Search box */}
                <div className={`relative flex flex-col items-center`}>
                    <div className="hidden lg:flex items-center space-x-2 px-4 py-2 bg-ozon-gray text-sm text-gray-700 w-[450px] h-9 rounded-full dark:bg-ozon-dark-gray dark:text-white">
                        <span><BsSearch /></span>
                        <input type="text" className='bg-transparent w-full focus:outline-none' placeholder='Rechercher des articles ...' onChange={HandleInputChange} />
                    </div>

                    <SearchBox
                        searchBoxOpen={searchBoxOpen}
                        isLoading={isLoading}
                        searchResult={searchResult}
                        skeleton={<SearchArticleCardSkeleton />}
                        cards={searchResult?.map((item, index) => (
                            <SearchArticleCard article={item} key={index} />
                        ))}
                    />
                </div>

                {/* link items */}
                <ul className='container px-5 md:px-10 lg:px-0 py-3 lg:py-0 h-full hidden lg:flex lg:flex-row lg:items-center lg:text-sm lg:space-x-4 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto transition-all duration-500 ease-in'>
                    {Links.map((link, index) => (
                        <li className='mt-2 lg:mt-0' key={index}>
                            <div onClick={() => goTo(link.url)} className={`cursor-pointer whitespace-nowrap hover:text-rose-700 duration-300 select-none dark:text-white dark:hover:text-ozon-yellow ${link.style}`}>
                                {link.title}
                            </div>
                        </li>
                    ))}

                    {/* Darkmode Desktop */}
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

            <MobileNavbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        </nav>
    )
}

export default Navbar