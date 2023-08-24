import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../components/Card'
import ArticleService from 'services/ArticleService';
import HttpClient from 'services/client/HttpClient';
import CategorieService from 'services/CategorieService';
import PreloaderSpinner from 'components/PreloaderSpinner';

const initialFieldValues = {
    nom: '',
    description: '',
    imageName: '',
    imageSrc: '',
    imageFile: null,
    prix: 0.0,
    quantite: 0,
    categorieId: ''
}

function EditArticle() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [categories, setCategories] = useState();

    const articleService = new ArticleService(HttpClient);


    const [isLoading, setIsLoading] = useState(true);
    const [values, setValues] = useState(initialFieldValues);

    useEffect(() => {
        fetchCategories()
        fetchArticle()
    }, []);

    useEffect(() => {
        if (values !== initialFieldValues) setIsLoading(false);
    }, [values]);

    const fetchCategories = async () => {
        const categorieService = new CategorieService(HttpClient);

        try {
            const categories = await categorieService.getCategories();
            setCategories(categories);
        } catch (error) {
            console.error(error);
        }
    }

    const fetchArticle = async () => {
        try {
            const article = await articleService.getArticle(id);
            setValues(article);
        } catch (error) {
            console.error(error);
        }
    }

    const HandleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const HandleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let imageFile = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (x) => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                });
            }
            reader.readAsDataURL(imageFile);
        }
        else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: ''
            });
        }
    }

    function deleteImage() {
        setValues({
            ...values,
            imageFile: null,
            imageSrc: ''
        });
    }

    const editArticle = async () => {
        let formData = new FormData();
        formData.append('nom', values.nom);
        formData.append('description', values.description);
        formData.append('imageName', values.imageName);
        formData.append('imageFile', values.imageFile);
        formData.append('prix', values.prix);
        formData.append('quantite', values.quantite);
        formData.append('categorieId', values.categorieId);

        try {
            const res = await articleService.updateArticle(id, formData);
            if (res.ok) {
                return navigate('/admin/articles');
            }
        } catch (error) {
            console.error(error);
        }
    }

    const labels = [
        { type: "text", name: "nom", value: values.nom, onChange: HandleInputChange },
        { type: "textarea", name: "description", value: values.description, onChange: HandleInputChange },
        { type: "file", name: "image", onChange: HandleImageChange },
        { type: "number", name: "prix", value: values.prix, onChange: HandleInputChange },
        { type: "number", name: "quantite", value: values.quantite, onChange: HandleInputChange },
        { type: "select", title: "categorie", defaultOption: 'Choisir un categorie', name: "categorieId", option: 'nom', onChange: HandleInputChange },
    ]

    return (
        <>
            {isLoading ?
                <PreloaderSpinner />
                :
                <div className='flex flex-col items-end pt-3 px-5'>
                    <div className='grid grid-cols-1 w-full'>
                        <Card cardTitle={'Modifier un article'} labels={labels} items={categories} item={values} imageSrc={values.imageSrc} deleteImage={deleteImage} editItem={editArticle} />
                    </div>
                </div>
            }
        </>
    )
}

export default EditArticle