import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import FAQService from 'services/FAQService';
import HttpClient from 'services/client/HttpClient';
import Card from '../components/Card';
import PreloaderSpinner from 'components/PreloaderSpinner';

const initialFieldValues = {
    question: '',
    reponse: '',
}

function EditFAQ() {
    const navigate = useNavigate();
    const { id } = useParams();

    const faqService = new FAQService(HttpClient);

    const [isLoading, setIsLoading] = useState(true);
    const [values, setValues] = useState(initialFieldValues);

    useEffect(() => {
        const fetchFAQ = async () => {
            try {
                const faq = await faqService.getFAQ(id)
                setValues(faq)
            } catch (error) {
                console.log(error)
            }
        }

        fetchFAQ()
    }, []);

    useEffect(() => {
        if (values !== initialFieldValues) setIsLoading(false);
    }, [values]);

    const HandleInputChange = (event) => {
        const { name, value } = event.target.
            setValues({
                ...values,
                [name]: value
            });
    }

    const editFAQ = async () => {
        let formData = new FormData();
        formData.append('question', values.question)
        formData.append('reponse', values.reponse)

        try {
            const res = await faqService.updateFAQ(id, formData)
            console.log(res)
            if (res) {
                return navigate('/admin/faqs')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const labels = [
        { type: "text", name: "question", value: values.question, onChange: HandleInputChange },
        { type: "textarea", name: "reponse", value: values.reponse, onChange: HandleInputChange },
    ]

    return (
        <>
            {isLoading ?
                <PreloaderSpinner />
                :
                <div className='flex flex-col items-end pt-3 px-5'>
                    <div className='grid grid-cols-1 w-full'>
                        <Card cardTitle={'Modifier un FAQ'} labels={labels} item={values} editItem={editFAQ} />
                    </div>
                </div>
            }
        </>
    )
}

export default EditFAQ