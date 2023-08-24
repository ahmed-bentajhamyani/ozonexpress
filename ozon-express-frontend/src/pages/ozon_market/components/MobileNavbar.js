import { useNavigate } from "react-router-dom";
import OzonLogo from 'assets/brand/ozonexpress_logo.png'
import Button from "components/Button";
import { BiSearch } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { HiOutlineMoon, HiOutlineShoppingCart } from "react-icons/hi";
import { useDarkMode } from "context/DarkModeContext";
import { usePanier } from "context/PanierContext";


function MobileNavbar({ navbarOpen, setNavbarOpen }) {
    const navigate = useNavigate();
    const { darkMode, setDarkMode } = useDarkMode();

    const { setShowPanier } = usePanier();

    const Links = [
        { title: "Home", url: '/' },
        { title: "Blog", url: '/blogs' },
    ]

    const goTo = (route) => {
        navigate(route);
        setNavbarOpen();
    }

    const Buttons = [
        {
            action: () => setShowPanier(true),
            style: 'flex justify-center items-center w-12 h-12 p-3 border rounded-xl hover:text-ozon-red duration-300 active:duration-0 active:ring-4 active:outline-none active:ring-ozon-red-tint dark:text-white',
            icon: <HiOutlineShoppingCart />,
            iconStyle: 'text-2xl'
        },
        {
            style: 'flex justify-center items-center w-12 h-12 p-3 bg-ozon-red hover:bg-ozon-red-tone rounded-xl duration-300 active:duration-0 active:ring-4 active:outline-none active:ring-ozon-red-tint',
            icon: <BiSearch />,
            iconStyle: 'text-2xl text-white'
        }
    ]

    return (
        <div className={`bg-white fixed w-full h-screen top-0 left-0 right-0 z-50 dark:bg-black duration-300 ${navbarOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className='container mx-auto px-5 md:px-10 xl:px-20 py-3 flex flex-col justify-center items-center h-screen outline-none focus:outline-none'>
                {/*header*/}
                <div className="flex justify-between items-center w-full select-none">
                    <div className="flex justify-between items-center">
                        {/* Menu button */}
                        <div className="mr-2">
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
                        <div onClick={() => goTo('/market')} className="cursor-pointer">
                            <img src={OzonLogo} className='h-11' alt="Logo" />
                        </div>
                    </div>

                    {/* mobile version buttons */}
                    <div className='flex justify-between items-center space-x-2'>
                        {Buttons.map((button, index) => (
                            <Button button={button} key={index} />
                        ))}
                    </div>
                </div>

                {/*body*/}
                <div className='flex flex-1 flex-col justify-between w-full mt-8'>
                    <ul className="text-xl">
                        {/* Links */}
                        {Links.map((link, index) => (
                            <li className='mt-2' key={index}>
                                <div onClick={() => goTo(link?.url)} className={`cursor-pointer whitespace-nowrap hover:text-rose-700 duration-300 select-none dark:text-white dark:hover:text-ozon-yellow ${link.style}`}>
                                    {link.title}
                                </div>
                            </li>
                        ))}

                        {/* Darkmode Mobile */}
                        <li className='mt-2'>
                            <div className='flex justify-between items-center'>
                                <label className='text-lg whitespace-nowrap duration-300 select-none dark:text-white' htmlFor="darkmode-toggle">
                                    Night mode
                                </label>
                                <input type="checkbox" id="darkmode-toggle" onClick={() => setDarkMode(!darkMode)} />
                                <label className='darkmode-toggle' htmlFor="darkmode-toggle">
                                    <span className='sun text-xs'><BsSun /></span>
                                    <span className='moon text-xs'><HiOutlineMoon /></span>
                                </label>
                            </div>
                        </li>
                    </ul>

                    {/*footer*/}
                    <button type='button' className='flex justify-center items-center font-medium text-lg w-full h-14 px-10 py-3 space-x-1 text-white bg-ozon-red hover:bg-ozon-red-tone cursor-pointer rounded-full whitespace-nowrap focus:ring-4 focus:outline-none focus:ring-ozon-red-tint' onClick={() => navigate('/login')}>
                        Se connecter
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar