import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CategorieService from 'services/CategorieService';
import HttpClient from 'services/client/HttpClient';
import Card from '../components/Card'

const initialFieldValues = {
    nom: '',
}

function EditCategorie() {
    const navigate = useNavigate();
    const { id } = useParams()

    const categorieService = new CategorieService(HttpClient)

    const [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        const fetchCategorie = async () => {
            try {
                const categorie = await categorieService.getCategorie(id)
                setValues(categorie)
            } catch (error) {
                console.error(error)
            }
        }

        fetchCategorie()
    }, []);

    const HandleInputChange = (event) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        });
    }

    const editCategorie = async () => {
        let formData = new FormData();
        formData.append('nom', values.nom)

        try {
            const res = await categorieService.updateCategorie(id, formData)
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
                <Card cardTitle={'Modifier un Categorie'} labels={labels} item={values} editItem={editCategorie} />
            </div>
        </div>
    )
}

export default EditCategorie