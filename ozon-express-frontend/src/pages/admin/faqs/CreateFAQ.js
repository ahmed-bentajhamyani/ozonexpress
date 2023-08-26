import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FAQService from 'services/FAQService';
import HttpClient from 'services/client/HttpClient';
import Card from '../components/Card';
import PreloaderSpinner from 'components/PreloaderSpinner';

const initialFieldValues = {
    question: '',
    reponse: '',
}

function CreateFAQ() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [values, setValues] = useState(initialFieldValues);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const HandleInputChange = (event) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        });
    }

    const createFAQ = async () => {
        let formData = new FormData();
        formData.append('question', values.question);
        formData.append('reponse', values.reponse);

        const faqService = new FAQService(HttpClient);
        try {
            const res = await faqService.createFAQ(formData);
            if (res.ok) {
                return navigate('/admin/faqs');
            }
        } catch (error) {
            console.log(error);
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
                        <Card cardTitle={'Ajouter un FAQ'} labels={labels} createItem={createFAQ} />
                    </div>
                </div>
            }
        </>
    )
}

export default CreateFAQ