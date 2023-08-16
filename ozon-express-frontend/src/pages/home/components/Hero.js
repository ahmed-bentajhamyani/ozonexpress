import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { BiSolidUser } from 'react-icons/bi'
import deliveryWoman from 'assets/images/1.png'
import Button from 'components/Button'

function Hero() {

    const Buttons = [
        {
            style: 'flex justify-center items-center w-72 lg:w-64 xl:w-72 xl:px-12 py-3 space-x-1 text-white bg-ozon-red hover:bg-ozon-red-tone cursor-pointer rounded whitespace-nowrap active:ring-4 active:outline-none active:ring-ozon-red-tint',
            icon: <FiSearch />,
            iconStyle: 'text-xl',
            text: 'Votre colis?'
        },
        {
            style: 'flex justify-center items-center w-72 lg:w-64 xl:w-72 xl:px-12 py-3 space-x-1 text-ozon-red border border-ozon-red cursor-pointer rounded whitespace-nowrap hover:text-white hover:bg-ozon-red-tone active:ring-4 active:outline-none active:ring-ozon-red-tint dark:text-ozon-yellow dark:border-ozon-yellow dark:hover:text-black dark:hover:bg-ozon-yellow dark:ring-ozon-yellow/50',
            icon: <BiSolidUser />,
            iconStyle: 'text-xl',
            text: 'Espace client?'
        },
    ]

    return (
        <section className="container flex flex-col lg:flex-row justify-center lg:items-center mx-auto pt-20 px-5 md:px-10 xl:px-20">
            <div className="flex flex-col items-start mt-3 lg:mt-0 lg:w-1/2">
                <p className="font-extrabold text-4xl lg:text-5xl 2xl:text-6xl mt-1 dark:text-white">
                    Votre partenaire <br className='lg:hidden' /> <span className='whitespace-nowrap'>e-commerce</span> <br className='lg:hidden' /> de confiance au Maroc
                </p>
                <p className="text-base 2xl:text-xl mt-2 2xl:mt-5 dark:text-white">
                    Fiabilité, Rapidité et Responsabilité à chaque livraison
                </p>

                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 font-semibold mt-4 md:mt-6">
                    {Buttons.map((button, index) => (
                        <Button button={button} key={index}/>
                    ))}
                </div>
            </div>

            <div className="flex justify-end items-end lg:w-1/2">
                <img src={deliveryWoman} alt="" className='h-auto xl:h-[500px] 2xl:h-[600px]' />
            </div>
        </section>
    )
}

export default Hero