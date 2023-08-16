import React from 'react'
import { Link as SmoothLink } from 'react-scroll'
import OzonLogo from 'assets/brand/ozonexpress_logo.png'
import Button from './Button';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {

    const Links = [
        { titre: "Services", url: 'services' },
        { titre: "Comment ça marche?", url: 'faqs' },
        { titre: "Tarifs", url: 'tarifs' },
        { titre: "Agences", url: 'Agences' },
        { titre: "OZON Market", url: 'market', style: 'font-bold text-ozon-red dark:text-ozon-yellow' },
        { titre: "Blog", url: 'blogs' }
    ]

    const Politiques = [
        { titre: "Conditions générales", url: '' },
        { titre: "Politique de confidentialité", url: '' }
    ]

    const year = new Date().getFullYear();

    return (
        <footer id='footer' className="bg-ozon-gray pt-10 py-5 rounded-t-3xl dark:bg-ozon-dark-gray">
            <div className="container flex flex-col justify-center mx-auto px-5 md:px-10 xl:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col justify-start items-start mb-8 lg:mb-0">
                        {/* Logo */}
                        <SmoothLink smooth to={"home"} className="mb-4 lg:mb-0 cursor-pointer">
                            <img src={OzonLogo} className='' alt="Logo" />
                        </SmoothLink>

                        <p className='text-sm xl-text-base mt-5 lg:mt-7 w-52 dark:text-white'>Découvrez notre processus logistique étape par étape pour une expérience fluide.</p>

                        <div className="flex justify-between space-x-4 mt-6 lg:mt-8">
                            <a href="http://" target="_blank" rel="noopener noreferrer" className='text-lg xl:text-xl hover:text-ozon-red duration-300 dark:text-white dark:hover:text-ozon-yellow'>
                                <FaFacebook />
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer" className='text-lg xl:text-xl hover:text-ozon-red duration-300 dark:text-white dark:hover:text-ozon-yellow'>
                                <FaInstagram />
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer" className='text-lg xl:text-xl hover:text-ozon-red duration-300 dark:text-white dark:hover:text-ozon-yellow'>
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    <div className="mb-8 lg:mb-0 lg:w-56">
                        <p className="font-bold text-2xl mb-5 dark:text-white">OzonExpress</p>
                        <ul className="mt-3">
                            {Links.map((link, index) => (
                                <li className="mb-3" key={index}>
                                    <SmoothLink smooth to={link.url} className={`text-sm xl-text-base cursor-pointer whitespace-nowrap hover:text-ozon-red duration-300 select-none dark:hover:text-ozon-yellow ${link.style || 'dark:text-white'}`}>{link.titre}</SmoothLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:grid lg:block grid-cols-2 mb-8 lg:mb-0">
                        <div className="mb-8 lg:mb-0">
                            <p className="font-bold text-2xl mb-5 dark:text-white">Politiques</p>
                            <ul className="mt-4">
                                {Politiques.map((politique, index) => (
                                    <li className="mb-3" key={index}>
                                        <SmoothLink smooth to={politique.url} className="text-sm xl-text-base cursor-pointer whitespace-nowrap hover:text-ozon-red duration-300 select-none dark:text-white dark:hover:text-ozon-yellow">{politique.titre}</SmoothLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="md:hidden lg:block mt-8">
                            <p className="font-bold text-2xl dark:text-white">Inscrivez-vous à nos newsletters.</p>

                            {/* Email */}
                            <form className='mt-5'>
                                <label className="flex justify-between w-full rounded-full border border-ozon-red dark:border-ozon-yellow">
                                    <input type="email" className="text-ozon-red bg-transparent placeholder:text-ozon-red/60 text-xs sm:text-sm outline-none ml-3 xl:ml-5 mx-2 xl:mx-5 dark:text-ozon-yellow dark:placeholder:text-ozon-yellow/60" placeholder='exemple@gmail.com' />
                                    <button className='bg-ozon-red hover:bg-ozon-red-tone rounded-full text-bg-blue text-xs sm:text-sm py-2.5 px-6 xl:px-10 my-1 mr-1 focus:ring-4 focus:outline-none focus:ring-ozon-red-tint dark:bg-ozon-yellow dark:hover:bg-ozon-yellow-tone dark:focus:ring-ozon-yellow/50'>
                                        <span className='font-semibold text-white dark:text-black'>S'abonner</span>
                                    </button>
                                </label>
                            </form>
                        </div>
                    </div>

                    {/* Tablet version */}
                    <div className="hidden md:block lg:hidden w-full">
                        <p className="font-bold text-2xl">Inscrivez-vous à nos newsletters.</p>

                        {/* Email */}
                        <form className='mt-5'>
                            <label className="flex justify-between w-full rounded-full border border-ozon-red dark:border-ozon-yellow">
                                <input type="email" className="text-ozon-red bg-transparent placeholder:text-ozon-red/60 text-xs sm:text-base outline-none ml-3 mx-1 dark:text-ozon-yellow dark:placeholder:text-ozon-yellow/60" placeholder='exemple@gmail.com' />
                                <button className='bg-ozon-red hover:bg-ozon-red-tone rounded-full text-bg-blue text-xs sm:text-base py-2.5 px-6 my-1 mr-2 focus:ring-4 focus:outline-none focus:ring-ozon-red-tint dark:bg-ozon-yellow dark:hover:bg-ozon-yellow-tone dark:focus:ring-ozon-yellow/50'>
                                    <span className='font-semibold text-white dark:text-black'>S'abonner</span>
                                </button>
                            </label>
                        </form>
                    </div>
                </div>

                <div className="mt-10">
                    <p className="text-xs md:text-sm text-center whitespace-nowrap dark:text-white">© {year} OzonExpress. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer