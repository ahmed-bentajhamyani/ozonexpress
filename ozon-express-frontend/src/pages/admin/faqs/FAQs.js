import React, { useEffect, useState } from 'react'
import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import FAQService from 'services/FAQService';
import HttpClient from 'services/client/HttpClient';
import Card from '../components/Card';
import Button from '../components/Button';
import PreloaderSpinner from 'components/PreloaderSpinner';

function FAQs() {
    const faqService = new FAQService(HttpClient);

    const [faqs, setFAQs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const faqs = await faqService.getFAQs()
                if (faqs) {
                    setFAQs(faqs);
                }
            } catch (error) {
                setErrMsg(error);
            }
        }

        fetchFAQs();
    }, []);

    useEffect(() => {
        if(faqs[0]) setIsLoading(false);
    }, [faqs]);

    const deleteFAQ = async (id) => {
        try {
            const res = await faqService.deleteFAQ(id)
            if (res) {
                setFAQs(faqs => faqs.filter(faq => faq.id !== id));
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {isLoading ?
                <PreloaderSpinner />
                :
                <div className='flex flex-col items-end pt-3 px-5'>
                    <Link to={'create'}>
                        <Button button={{
                            style: 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-200',
                            icon: <BsPlus />,
                            text: 'Nouveau FAQ'
                        }} />
                    </Link>
                    <div className='grid grid-cols-1 w-full'>
                        <Card cardTitle={'FAQs'} items={faqs} deleteItem={deleteFAQ} errMsg={errMsg} />
                    </div>
                </div>
            }
        </>
    )
}

export default FAQs