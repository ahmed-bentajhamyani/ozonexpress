import React, { useEffect, useState } from 'react'
import Map from 'assets/images/3.jpg'
import { MdDeliveryDining, MdLocationOn } from 'react-icons/md'
import { BiSolidUser } from 'react-icons/bi'
import Button from 'components/Button'
import AgenceService from 'services/AgenceService'
import HttpClient from 'services/client/HttpClient'

function Agences() {

    const agenceService = new AgenceService(HttpClient)

    const [agences, setAgences] = useState([]);

    useEffect(() => {
        const fetchAgences = async () => {
            try {
                const agences = await agenceService.getAgences()
                setAgences(agences)
            } catch (error) {
                console.error(error)
            }
        }

        fetchAgences()
    }, []);

    const Buttons = [
        {
            style: 'flex justify-center items-center w-48 px-5 py-[12px] space-x-1 bg-ozon-yellow hover:bg-ozon-yellow-tone cursor-pointer rounded active:ring-4 active:outline-none active:ring-ozon-yellow/50',
            icon: <BiSolidUser />,
            iconStyle: '',
            text: '+ Devenir Client',
            textStyle: 'font-bold text-xs'
        },
        {
            style: 'flex justify-center items-center w-48 px-5 py-[12px] space-x-1 bg-ozon-yellow hover:bg-ozon-yellow-tone cursor-pointer rounded active:ring-4 active:outline-none active:ring-ozon-yellow/50',
            icon: <MdDeliveryDining />,
            iconStyle: '',
            text: '+ Devenir Livreur',
            textStyle: 'font-bold text-xs'
        },
    ]

    return (
        <section id='agences' className="relative bg-ozon-red w-full h-fit lg:h-[672px] mt-20">
            <div className='lg:container flex flex-col lg:flex-row justify-between lg:justify-start items-center mx-auto pt-10 lg:py-10 lg:px-10 xl:px-20'>

                {/* Mobile version */}
                <div className='lg:hidden container mx-auto px-5 md:px-10 mb-10'>
                    <p className='font-bold text-ozon-yellow text-xl md:text-2xl'>Réseau d'agences</p>
                    <p className='font-extrabold text-white text-3xl md:text-4xl xl:text-5xl mt-1'>
                        OzoneExpress : Présents partout où vous en avez besoin
                    </p>
                    <p className='my-8 text-white text-sm md:text-base'>
                        Nous sommes présent sur :
                    </p>

                    <div className="grid grid-cols-2 gap-x-10 md:gap-x-20 gap-y-2 md:gap-y-3">
                        {agences.map((agence, index) => (
                            <div className="flex items-center space-x-2 font-semibold text-ozon-yellow" key={index}>
                                <span><MdLocationOn /></span>
                                <span className='' key={index}>{agence.ville}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between md:space-x-3 md:mt-4">
                        {Buttons.map((button, index) => (
                            <a href="/market" className='mt-4 md:mt-0' key={index}>
                                <Button button={button} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Laptop version */}
                <div className='hidden lg:block mb-0 w-1/2'>
                    <p className='font-bold text-ozon-yellow text-xl md:text-2xl'>Réseau d'agences</p>
                    <p className='font-extrabold text-white text-3xl md:text-4xl xl:text-5xl mt-1'>
                        OzoneExpress : Présents partout où vous en avez besoin
                    </p>
                    <p className='my-8 text-white text-sm md:text-base'>
                        Nous sommes présent sur :
                    </p>

                    <div className="grid grid-cols-2 gap-x-10 md:gap-x-20 gap-y-2 md:gap-y-3">
                        {agences.map((agence, index) => (
                            <div className="flex items-center space-x-2 font-semibold text-ozon-yellow" key={index}>
                                <span><MdLocationOn /></span>
                                <span>{agence.ville}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-start items-start md:space-x-3 md:mt-8">
                        {Buttons.map((button, index) => (
                            <a href="/market" className='mt-4 md:mt-0' key={index}>
                                <Button button={button} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="-mx-5 md:-mx-10 lg:mx-0 lg:absolute lg:top-0 lg:right-0 flex items-center justify-center lg:w-1/2">
                    <img src={Map} alt='' className='object-cover w-screen h-fit md:h-[672px]' />
                </div>
            </div>
        </section>
    )
}

export default Agences