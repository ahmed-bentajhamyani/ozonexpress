import React from 'react'
import Icon1 from './../assets/icon1.png'
import Icon2 from './../assets/icon2.png'
import Icon3 from './../assets/icon3.png'
import Icon4 from './../assets/icon4.png'

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

    return (
        <section id='services' className='container flex flex-col md:flex-row justify-center items-center mx-auto py-20 px-5 md:px-10 xl:px-20'>
            <div className='flex flex-col md:items-center'>
                <p className='font-extrabold text-4xl lg:text-5xl 2xl:text-6xl md:text-center md:px-5 mt-1 dark:text-white'>
                    Gérez vos expéditions en toute confiance avec OzonExpress
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                    {services.map((service, index) => (
                        <div className="" key={index}>
                            <img src={service.image} alt='' className='max-h-16 -mx-4' />
                            <p className='font-bold text-base lg:text-lg mt-4 dark:text-white'>{service.nom}</p>
                            <p className='mt-3 dark:text-white'>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services