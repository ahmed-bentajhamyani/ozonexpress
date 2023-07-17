import React, { useState } from 'react'
import { Link } from 'react-scroll'
import OzonLogo from './../../assets/ozonexpress.png'
import { FiMenu } from 'react-icons/fi'
import { MdDeliveryDining } from 'react-icons/md'
import { BiSolidUser } from 'react-icons/bi'


function Navbar() {

    const [fix, setFix] = useState(false)
    const [open, setOpen] = useState(false)

    function setFixed() {
        if (window.scrollY) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener("scroll", setFixed)

    let Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "CONTACT", link: "/" },
    ];

    return (
        // <nav className={`h-20 transition-all duration-600 ease-in lg:transition-none ${fix ? 'sticky top-0' : ''} ${open ? '' : ''}`}>
        //     <div className="container mx-auto px-5 md:px-10 xl:px-20 py-3 flex flex-col lg:flex-row justify-between items-center bg-white z-50">
        //         <div className="flex justify-between items-center w-full z-50 select-none">
        //             {/* Logo */}
        //             <Link smooth to={"home"} className="cursor-pointer">
        //                 <img src={OzonLogo} className='' alt="Logo" />
        //             </Link>

        //             <div onClick={() => setOpen(!open)} className='flex justify-center items-center w-16 h-12 px-7 py-3 border cursor-pointer rounded lg:hidden'>
        //                 <span className=''><FiMenu /></span>
        //             </div>
        //         </div>

        //         {/* Link */}
        //         <ul className={`flex flex-col lg:flex-row justify-center w-full lg:text-sm lg:space-x-4 absolute md:static md:z-auto z-50 transition-all duration-500 ease-in md:transition-none ${open ? 'bg-white dark:bg-darkbg md:bg-transparent top-24' : 'top-[-490px]'} ${fix ? 'rounded-b-2xl md:rounded-none border-t-2 md:border-t-0' : 'rounded-2xl md:rounded-none'}`}>
        //             <li className='mt-2 lg:mt-0'>
        //                 <Link smooth to={"services"} onClick={() => setOpen(!open)} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-orange-400 duration-300 select-none">Services</Link>
        //             </li>
        //             <li className='mt-2 lg:mt-0'>
        //                 <Link smooth to={"faqs"} onClick={() => setOpen(!open)} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-orange-400 duration-300 select-none">Comment ça marche?</Link>
        //             </li>
        //             <li className='mt-2 lg:mt-0'>
        //                 <Link smooth to={"tarifs"} onClick={() => setOpen(!open)} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-orange-400 duration-300 select-none">Tarifs</Link>
        //             </li>
        //             <li className='mt-2 lg:mt-0'>
        //                 <Link smooth to={"agences"} onClick={() => setOpen(!open)} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-orange-400 duration-300 select-none">Agences</Link>
        //             </li>
        //             <li className='mt-2 lg:mt-0'>
        //                 <Link smooth to={"market"} onClick={() => setOpen(!open)} className="font-bold dark:text-white cursor-pointer whitespace-nowrap hover:text-orange-400 duration-300 select-none">OZON Market</Link>
        //             </li>
        //             <li className='mt-2 lg:mt-0'>
        //                 <Link smooth to={"footer"} onClick={() => setOpen(!open)} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-orange-400 duration-300 select-none">Contact</Link>
        //             </li>
        //             <li className='mt-2 lg:mt-0'>
        //                 <Link smooth to={"blogs"} onClick={() => setOpen(!open)} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-orange-400 duration-300 select-none">Blog</Link>
        //             </li>
        //             <div className='flex space-x-3 md:mx-4'>
        //                 <li onClick={() => setOpen(!open)} className='flex justify-center items-center w-16 h-12 px-7 py-3 border cursor-pointer rounded hover:text-orange-400 active:ring-4 active:outline-none active:ring-orange-200'>
        //                     <span className='text-xl'><MdDeliveryDining /></span>
        //                 </li>
        //                 <li onClick={() => setOpen(!open)} className='flex justify-center items-center w-16 h-12 px-7 py-3 bg-orange-400 hover:bg-orange-300 cursor-pointer rounded active:ring-4 active:outline-none active:ring-orange-200'>
        //                     <span className='text-xl text-white'><BiSolidUser /></span>
        //                 </li>
        //             </div>
        //         </ul>
        //     </div>
        // </nav >
        <div className={`h-20 fixed top-0 left-0 w-full z-50`}>
            <div className={`container relative mx-auto px-5 md:px-10 xl:px-20 py-3 lg:flex items-center justify-between bg-white lg:bg-transparent lg:backdrop-blur transition-all duration-500 ease-in`}>
                <div className="flex justify-between items-center w-full select-none">
                    {/* Logo */}
                    <Link smooth to={"home"} onClick={() => setOpen(false)} className="cursor-pointer">
                        <img src={OzonLogo} className='' alt="Logo" />
                    </Link>

                    <div onClick={() => setOpen(!open)} className='flex justify-center items-center w-16 h-12 px-7 py-3 border cursor-pointer rounded lg:hidden'>
                        <span className=''><FiMenu /></span>
                    </div>
                </div>

                {/* linke items */}
                <ul className={`container px-5 md:px-0 py-3 lg:py-0 lg:flex lg:items-center lg:self-end lg:text-sm lg:space-x-4 absolute lg:static bg-white lg:bg-transparent lg:z-auto z-[-1] left-0 w-full lg:w-auto transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'}`}>
                    <li className='mt-2 lg:mt-0'>
                        <Link smooth to={"services"} onClick={() => setOpen(!open)} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-orange-400 duration-300 select-none">Services</Link>
                    </li>
                    <li className='mt-2 lg:mt-0'>
                        <Link smooth to={"faqs"} onClick={() => setOpen(!open)} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-orange-400 duration-300 select-none">Comment ça marche?</Link>
                    </li>
                    <li className='mt-2 lg:mt-0'>
                        <Link smooth to={"tarifs"} onClick={() => setOpen(!open)} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-orange-400 duration-300 select-none">Tarifs</Link>
                    </li>
                    <li className='mt-2 lg:mt-0'>
                        <Link smooth to={"agences"} onClick={() => setOpen(!open)} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-orange-400 duration-300 select-none">Agences</Link>
                    </li>
                    <li className='mt-2 lg:mt-0'>
                        <Link smooth to={"market"} onClick={() => setOpen(!open)} className="font-bold dark:text-white cursor-pointer whitespace-nowrap hover:text-orange-400 duration-300 select-none">OZON Market</Link>
                    </li>
                    <li className='mt-2 lg:mt-0'>
                        <Link smooth to={"blogs"} onClick={() => setOpen(!open)} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-orange-400 duration-300 select-none">Blog</Link>
                    </li>
                    <li className='mt-2 lg:mt-0'>
                        <Link smooth to={"footer"} onClick={() => setOpen(!open)} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-orange-400 duration-300 select-none">Contact</Link>
                    </li>

                    {/* button */}
                    <div className='flex space-x-3 mt-2 lg:mt-0 lg:ml-4'>
                        <li onClick={() => setOpen(!open)} className='flex justify-center items-center w-16 h-12 px-7 py-3 border cursor-pointer rounded hover:text-orange-400 active:ring-4 active:outline-none active:ring-orange-200'>
                            <span className='text-xl'><MdDeliveryDining /></span>
                        </li>
                        <li onClick={() => setOpen(!open)} className='flex justify-center items-center w-16 h-12 px-7 py-3 bg-orange-400 hover:bg-orange-300 cursor-pointer rounded active:ring-4 active:outline-none active:ring-orange-200'>
                            <span className='text-xl text-white'><BiSolidUser /></span>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar