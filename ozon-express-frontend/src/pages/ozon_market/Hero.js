import React from 'react'
import { Link } from 'react-scroll'
import deliveryPerson from 'assets/images/ozon_market.png'

function Hero() {
    return (
        <div className="container mx-auto pt-40 px-5 md:px-10 md:pb-10 xl:px-20">
            <div className="flex flex-col items-start mt-3 md:mt-0 md:w-1/2">
                <p className="font-extrabold text-4xl lg:text-5xl 2xl:text-6xl mt-1 dark:text-white">
                    Optimisez votre logistique avec notre marketplace dédiée
                </p>
                <p className="font-semibold text-base md:text-lg 2xl:text-2xl mt-3 lg:mt-6 2xl:mt-10 dark:text-white">
                    Tous les accessoires d'emballage nécessaires pour des expéditions efficaces et professionnelles.
                </p>
            </div>
        </div>
    )
}

export default Hero