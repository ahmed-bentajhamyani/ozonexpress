import Collapse from 'components/Collapse';
import { useEffect, useState } from 'react'
import { useErrorBoundary } from 'react-error-boundary';
import FAQService from 'services/FAQService';
import HttpClient from 'services/client/HttpClient';

function FAQs({ setFaqsLoaded, isLoaded }) {

    const faqService = new FAQService(HttpClient)

    const [faqs, setFAQs] = useState([]);

    const { showBoundary } = useErrorBoundary();

    useEffect(() => {
        setFaqsLoaded(false)
        const fetchFAQs = async () => {
            try {
                const faqs = await faqService.getFAQs();
                if (faqs) {
                    setFAQs(faqs);
                }
            } catch (error) {
                showBoundary(error)
            }
        }

        fetchFAQs()
    }, []);

    useEffect(() => {
        if (faqs[0]) setFaqsLoaded(true);
    }, [faqs]);

    return (
        <>
            {isLoaded &&
                <section id='faqs' className='container flex flex-col lg:flex-row justify-center items-center mx-auto mt-20 px-5 md:px-10 xl:px-20'>
                    < div className='flex flex-col items-start lg:w-1/2' >
                        <p className='font-bold text-ozon-red text-xl md:text-2xl'>Comment ça marche ?</p>
                        <p className='font-extrabold text-3xl md:text-4xl 2xl:text-5xl mt-1 dark:text-white'>
                            De la demande à la livraison<br className='hidden md:block' /> Notre méthode efficace
                        </p>
                        <p className='my-2 text-sm md:text-base dark:text-white'>
                            Découvrez notre processus logistique étape par étape pour une expérience fluide et transparente.
                        </p>
                    </div >

                    <div className='flex flex-col items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
                        {faqs.map((faq, index) => (
                            <Collapse faq={faq} key={index} />
                        ))}
                    </div>
                </section >
            }
        </>
    )
}

export default FAQs