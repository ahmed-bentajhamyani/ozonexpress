import React, { useEffect, useState } from 'react'
import DeliveryPerson from './../assets/212.png'

function FAQs() {

    // const [faqs, setFAQs] = useState([]);

    const faqs = [
        {
            question: "Comment ajouter mon premier colis ?",
            reponse: "Découvrez notre processus logistique étape par étape."
        },
        {
            question: "Comment ajouter mon premier colis ?",
            reponse: "Découvrez notre processus logistique étape par étape."
        },
        {
            question: "Comment ajouter mon premier colis ?",
            reponse: "Découvrez notre processus logistique étape par étape."
        }
    ]

    useEffect(() => {
        // fetch("https://localhost:7094/api/faq")
        //     .then(res => res.json())
        //     .then(result => {
        //         setFAQs(result);
        //         console.log(faqs)
        //     })
    }, []);

    return (
        <section id='faqs' className='container flex flex-col lg:flex-row justify-center items-center mx-auto py-20 px-5 md:px-10 xl:px-20'>
            <div className='flex flex-col items-start lg:w-1/2'>
                <p className='font-bold text-base lg:text-lg dark:text-white'>Comment ça marche ?</p>
                <p className='font-extrabold text-4xl 2xl:text-5xl mt-1 dark:text-white'>
                    De la demande à la livraison<br className='hidden md:block'/> Notre méthode efficace
                </p>
                <p className='my-2 dark:text-white'>
                    Découvrez notre processus logistique étape par étape pour une expérience fluide et transparente.
                </p>

                {faqs.map((faq, index) => (
                    <div className="mt-4" key={index}>
                        <p className='font-bold text-base lg:text-lg dark:text-white'>{faq.question}</p>
                        <p className='dark:text-white'>{faq.reponse}</p>
                    </div>
                ))}
            </div>

            <div className='flex items-center justify-center lg:w-1/2'>
                <img src={DeliveryPerson} alt='' className='max-h-[300px]' />
            </div>
        </section>
    )
}

export default FAQs