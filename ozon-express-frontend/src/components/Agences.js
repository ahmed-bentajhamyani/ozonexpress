import React from 'react'
import BackgroundImage from './../assets/shape.png'
import MoroccoMap from './../assets/2.png'
import { MdDeliveryDining } from 'react-icons/md'
import { BiSolidUser } from 'react-icons/bi'
import { Link } from 'react-scroll'

function Agences() {

    const villes = [
        "Rabat",
        "Casablanca",
        "Berchid",
        "Tanger",
        "Fes",
        "Meknes",
        "Ouajda",
    ]

    return (
        <div id='agences' className='container flex flex-col lg:flex-row justify-center items-center mx-auto py-20 px-5 md:px-10 xl:px-20'>
            <div className='flex flex-col items-start lg:w-1/2' style={{backgroundImage: {BackgroundImage}}}>
                <p className='font-extrabold text-4xl 2xl:text-5xl mt-1 dark:text-white'>
                    Réseau d'agences OzoneExpress : Présents partout où vous en avez besoin<br />
                </p>
                <p className='mt-4 mb-3 dark:text-white'>
                    Nous sommes présent sur :
                </p>

                <div className="grid grid-cols-2 gap-2">
                    {villes.map((ville, index) => (
                        <p className='dark:text-white' key={index}>- {ville}</p>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5 xl:space-x-10 font-semibold mt-5">
                    <Link smooth to='#' className='flex justify-center items-center px-6 py-[12px] space-x-1 text-white bg-orange-400 hover:bg-orange-300 cursor-pointer rounded active:ring-4 active:outline-none active:ring-orange-200'>
                        <span className='text-xl'><BiSolidUser /></span>
                        <span>+ Devenir Client</span>
                    </Link>
                    <Link smooth to='#' className='flex justify-center items-center px-6 py-[12px] space-x-1 text-white bg-orange-400 hover:bg-orange-300 cursor-pointer rounded active:ring-4 active:outline-none active:ring-orange-200'>
                        <span className='text-xl'><MdDeliveryDining /></span>
                        <span>+ Devenir Livreur</span>
                    </Link>
                </div>
            </div>

            <div className='flex items-center justify-center lg:w-1/2'>
                <img src={MoroccoMap} alt='' className='max-h-[550px]' />
            </div>
        </div>
    )
}

export default Agences