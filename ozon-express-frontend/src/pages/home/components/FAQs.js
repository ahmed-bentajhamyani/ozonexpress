import React, { useEffect, useState } from 'react'
import FAQService from 'services/FAQService';
import HttpClient from 'services/client/HttpClient';

function FAQs() {

    const faqService = new FAQService(HttpClient)

    const [faqs, setFAQs] = useState([]);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const faqs = await faqService.getFAQs()
                setFAQs(faqs)
            } catch (error) {
                console.error(error)
            }
        }

        fetchFAQs()
    }, []);

    return (
        <section id='faqs' className='container flex flex-col lg:flex-row justify-center items-center mx-auto mt-20 px-5 md:px-10 xl:px-20'>
            <div className='flex flex-col items-start lg:w-1/2'>
                <p className='font-bold text-ozon-red text-xl md:text-2xl'>Comment ça marche ?</p>
                <p className='font-extrabold text-3xl md:text-4xl 2xl:text-5xl mt-1 dark:text-white'>
                    De la demande à la livraison<br className='hidden md:block' /> Notre méthode efficace
                </p>
                <p className='my-2 text-sm md:text-base dark:text-white'>
                    Découvrez notre processus logistique étape par étape pour une expérience fluide et transparente.
                </p>
            </div>

            <div className='flex flex-col items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
                {faqs.map((faq, index) => (
                    <div className="collapse collapse-plus px-2 md:px-4 pb-6 bg-transparent drop-shadow-black dark:drop-shadow-yellow" key={index}>
                        <input type="checkbox" className='peer' />
                        <div className="collapse-title text-white bg-ozon-red peer-checked:text-black peer-checked:bg-ozon-gray rounded-full peer-checked:rounded-t-3xl peer-checked:rounded-b-none dark:peer-checked:text-white dark:peer-checked:bg-ozon-dark-gray">
                            <p className='font-semibold text-xs md:text-base'>
                                {faq.question}
                            </p>
                        </div>
                        <div className="collapse-content peer-checked:bg-white rounded-b-3xl dark:text-white dark:peer-checked:bg-black">
                            <p className='py-3'>
                                {faq.reponse}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQs