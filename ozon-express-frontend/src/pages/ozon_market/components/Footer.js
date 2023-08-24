import React from 'react'
import { Link } from 'react-scroll'
import OzonLogo from 'assets/brand/ozonexpress_logo.png'

function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer id='market_footer' className="container flex flex-col justify-center mx-auto pt-20 px-5 md:px-10 xl:px-20 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t pt-7">
                {/* Logo */}
                <Link smooth to={"home"} className="mb-4 lg:mb-0 cursor-pointer">
                    <img src={OzonLogo} className='' alt="Logo" />
                </Link>

                <div className="mb-4 lg:mb-0">
                    <p className="text-lg">OzonExpress</p>
                    <ul className="mt-4">
                        <li className="mb-1">
                            <Link smooth to={"pricing"} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-ozon-red duration-300 select-none">Services</Link>
                        </li>
                        <li className="mb-1">
                            <Link smooth to={"pricing"} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-ozon-red duration-300 select-none">Comment ça marche</Link>
                        </li>
                        <li className="mb-1">
                            <Link smooth to={"pricing"} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-ozon-red duration-300 select-none">Tarifs</Link>
                        </li>
                        <li className="mb-1">
                            <Link smooth to={"pricing"} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-ozon-red duration-300 select-none">Ozon Market</Link>
                        </li>
                        <li className="mb-1">
                            <Link smooth to={"pricing"} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-ozon-red duration-300 select-none">Agences</Link>
                        </li>
                    </ul>
                </div>
                <div className="mb-4 lg:mb-0">
                    <p className="text-lg">Politiques</p>
                    <ul className="mt-4">
                        <li className="mb-1">
                            <Link smooth to={"pricing"} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-ozon-red duration-300 select-none">Conditions générales</Link>
                        </li>
                        <li className="mb-1">
                            <Link smooth to={"pricing"} className="dark:text-white cursor-pointer whitespace-nowrap hover:text-ozon-red duration-300 select-none">Politique de confidentialité</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col mb-4 lg:mb-0">
                    <p className="text-lg">Inscrivez-vous à nos newsletters.</p>
                    <div className="mt-4">
                        <input className="border px-4 py-3 mb-4 rounded focus:ring-4 focus:outline-none focus:ring-ozon-red-tint" type="email" placeholder="Enter your email" name='email' />

                        <Link smooth to='#' className='flex justify-center items-center w-fit px-8 py-1.5 space-x-1 text-white bg-ozon-red hover:bg-ozon-red-tone cursor-pointer rounded active:ring-4 active:outline-none active:ring-ozon-red-tint'>
                            Inscription
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t mt-10 pt-3">
                <p className="text-xs md:text-sm text-center whitespace-nowrap">© {year} OzonExpress - Made with ❤️ by IN-SIDE TECH MA</p>
            </div>
        </footer>
    )
}

export default Footer