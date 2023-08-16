import React from 'react'
import { Link } from 'react-scroll'
import deliveryPerson from 'assets/images/ozon_market.png'

function Hero() {
    return (
        <div className="container flex flex-col md:flex-row justify-center lg:items-center mx-auto pt-20 px-5 md:px-10 md:pb-10 xl:px-20">
            <div className="flex justify-center md:hidden">
                <img src={deliveryPerson} alt="" className='max-h-60 sm:max-h-64' />
            </div>

            <div className="flex flex-col items-start mt-3 md:mt-0 md:w-1/2">
                <p className="font-extrabold text-4xl lg:text-5xl 2xl:text-6xl mt-1 dark:text-white">
                    Optimisez votre logistique avec notre marketplace dédiée
                </p>
                <p className="font-semibold text-base md:text-lg 2xl:text-2xl mt-3 lg:mt-6 2xl:mt-10 dark:text-white">
                    Tous les accessoires d'emballage nécessaires pour des expéditions efficaces et professionnelles.
                </p>

                <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3 font-semibold mt-4">
                    <Link smooth to='#' className='flex justify-center items-center px-12 py-3 space-x-1 text-white bg-ozon-red hover:bg-ozon-red-tone cursor-pointer select-none rounded-full whitespace-nowrap active:ring-4 active:outline-none active:ring-ozon-red-tint'>
                        <span>Achetez maintenant</span>
                    </Link>
                </div>
            </div>

            <div className="hidden md:block w-1/2">
                <img src={deliveryPerson} alt="" className='max-h-96 xl:max-h-[500px]' />
            </div>
        </div>
    )
}

export default Hero