import React from 'react'
import Icon1 from 'assets/icons/cargo-truck.png'
import Icon2 from 'assets/icons/motorbike.png'
import Icon3 from 'assets/icons/support.png'
import Icon4 from 'assets/icons/interactivity.png'
import { MdDeliveryDining } from 'react-icons/md'
import { BiSolidUser } from 'react-icons/bi'
import Button from 'components/Button'

function Services() {

    const services = [
        {
            image: Icon1,
            nom: "Ramassage",
            description: "Un service de ramassage efficace et fiable pour collecter vos marchandises où vous le souhaitez."
        },
        {
            image: Icon2,
            nom: "Livraison",
            description: "Une livraison rapide et sécurisée de vos envois à leur destination, en respectant les délais convenus."
        },
        {
            image: Icon3,
            nom: "Service client",
            description: "Un support client dévoué et réactif pour répondre à toutes vos questions et vous offrir une assistance personnalisée."
        },
        {
            image: Icon4,
            nom: "Système 100% Digitalsé",
            description: "Un système logistique entièrement digitalisé pour une gestion transparente de vos expéditions et livraisons."
        }
    ]

    const Buttons = [
        {
            style: 'flex justify-center items-center w-52 px-6 py-[12px] space-x-1 text-white bg-ozon-red hover:bg-ozon-red-tone cursor-pointer rounded active:ring-4 active:outline-none active:ring-ozon-red-tint',
            icon: <BiSolidUser />,
            iconStyle: 'text-xl',
            text: '+ Devenir Client',
            textStyle: 'font-bold text-sm'
        },
        {
            style: 'flex justify-center items-center w-52 px-6 py-[12px] space-x-1 text-white bg-ozon-red hover:bg-ozon-red-tone cursor-pointer rounded active:ring-4 active:outline-none active:ring-ozon-red-tint',
            icon: <MdDeliveryDining />,
            iconStyle: 'text-xl',
            text: '+ Devenir Livreur',
            textStyle: 'font-bold text-sm'
        },
    ]

    return (
        <section id='services' className=''>
            <div className='flex flex-col md:items-center'>
                <div className="bg-ozon-red flex-1 w-full">
                    <p className='container mx-auto pt-4 pb-16 md:pt-8 md:pb-20 px-5 md:px-10 xl:px-20 font-extrabold text-white text-4xl lg:text-5xl 2xl:text-6xl md:text-center mt-1'>
                        Gérez vos expéditions en toute confiance avec OzonExpress
                    </p>
                </div>

                <div className="container mx-auto -mt-10 md:-mt-12 px-5 md:px-10 xl:px-20 flex flex-col justify-center items-center">
                    <div className="grid place-items-center grid-cols-1 md:grid-cols-2 gap-20">
                        {services.map((service, index) => (
                            <div className="flex flex-col justify-center items-center bg-ozon-gray w-64 lg:w-72 xl:w-80 h-72 xl:h-80 rounded-3xl dark:bg-ozon-dark-gray" key={index}>
                                <img src={service.image} alt='' className='max-h-14 xl:max-h-16' />
                                <p className='font-bold text-base lg:text-lg xl:text-xl mt-4 dark:text-white'>{service.nom}</p>
                                <p className='mt-3 xl:text-lg text-center px-2 xl:px-4 dark:text-white'>{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col justify-center items-center space-x-4 mt-8">
                        <p className='font-extrabold text-xl text-center dark:text-white'>Profitez de nos services dès aujourd'hui!</p>
                        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-3 md:mt-4">
                            {Buttons.map((button, index) => (
                                <a href="/market" className='mt-4 md:mt-0' key={index}>
                                    <Button button={button}/>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services