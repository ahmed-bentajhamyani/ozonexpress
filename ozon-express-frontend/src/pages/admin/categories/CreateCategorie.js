import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CategorieService from 'services/CategorieService';
import HttpClient from 'services/client/HttpClient';
import Card from '../components/Card'

const initialFieldValues = {
    nom: '',
}

function CreateCategorie() {
    const navigate = useNavigate();

    const [values, setValues] = useState(initialFieldValues)

    const HandleInputChange = (event) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        });
    }

    const createCategorie = async () => {
        let formData = new FormData();
        formData.append('nom', values.nom)

        const categorieService = new CategorieService(HttpClient)
        try {
            const res = await categorieService.createCategorie(formData)
            if (res.ok) {
                return navigate('/admin/categories')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const labels = [
        { type: "text", name: "nom", value: values.nom, onChange: HandleInputChange },
    ]

    return (
        <div className='flex flex-col items-end pt-3 px-5'>
            <div className='grid grid-cols-1 w-full'>
                <Card cardTitle={'Ajouter un Categorie'} labels={labels} createItem={createCategorie} />
            </div>
        </div>
    )
}

export default CreateCategorie