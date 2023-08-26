import PreloaderSpinner from 'components/PreloaderSpinner';
import { useAuth } from 'context/AuthContext';
import Card from 'pages/admin/components/Card';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserService from 'services/UserService';
import HttpClient from 'services/client/HttpClient';

const initialFieldValues = {
    name: '',
    email: '',
    password: '',
}

function CreatePersonnel() {
    const { jwtToken } = useAuth();
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

    const createUser = async () => {
        let formData = new FormData();
        formData.append('name', values.name)
        formData.append('email', values.email)
        formData.append('password', values.password)

        const userService = new UserService(HttpClient)
        try {
            const res = await userService.createUser(jwtToken, formData)
            if (res.ok) {
                return navigate('/admin/personnels')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const labels = [
        { type: "text", name: "name", value: values.name, onChange: HandleInputChange },
        { type: "email", name: "email", value: values.email, onChange: HandleInputChange },
        { type: "password", name: "password", value: values.password, onChange: HandleInputChange },
    ]

    return (
        <>
            {isLoading ?
                <PreloaderSpinner />
                :
                <div className='flex flex-col items-end pt-3 px-5'>
                    <div className='grid grid-cols-1 w-full'>
                        <Card cardTitle={'Ajouter un Personnel'} labels={labels} createItem={createUser} />
                    </div>
                </div>
            }
        </>
    )
}

export default CreatePersonnel