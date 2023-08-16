import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FAQService from 'services/FAQService';
import HttpClient from 'services/client/HttpClient';
import Card from '../components/Card';

const initialFieldValues = {
    question: '',
    reponse: '',
}

function CreateFAQ() {
    const navigate = useNavigate();

    const [values, setValues] = useState(initialFieldValues)

    const HandleInputChange = (event) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        });
    }

    const createFAQ = async () => {
        let formData = new FormData();
        formData.append('question', values.question)
        formData.append('reponse', values.reponse)

        const faqService = new FAQService(HttpClient)
        try {
            const res = await faqService.createFAQ(formData)
            if (res.ok) {
                return navigate('/admin/faqs')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const labels = [
        { type: "text", name: "question", value: values.question, onChange: HandleInputChange },
        { type: "textarea", name: "reponse", value: values.reponse, onChange: HandleInputChange },
    ]

    return (
        <div className='flex flex-col items-end pt-3 px-5'>
            <div className='grid grid-cols-1 w-full'>

                <Card cardTitle={'Ajouter un FAQ'} labels={labels} createItem={createFAQ} />
            </div>
        </div>
    )
}

export default CreateFAQ