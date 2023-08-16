import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import BlogService from 'services/BlogService';
import HttpClient from 'services/client/HttpClient';
import { useNavigate } from 'react-router-dom';

const initialFieldValues = {
    titre: '',
    imageName: '',
    imageSrc: '',
    imageFile: null
}

function CreateBlog() {
    const navigate = useNavigate();
    const [values, setValues] = useState(initialFieldValues)
    const [article, setArticle] = useState('')

    const HandleInputChange = (event) => {
        const { name, value } = event.target
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
                })
            }
            reader.readAsDataURL(imageFile);
        }
        else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: ''
            })
        }
    }

    function deleteImage() {
        setValues({
            ...values,
            imageFile: null,
            imageSrc: ''
        })
    }

    const createBlog = async () => {
        let formData = new FormData();
        formData.append('titre', values.titre)
        formData.append('article', article)
        formData.append('imageName', values.imageName)
        formData.append('imageFile', values.imageFile)

        const blogService = new BlogService(HttpClient)
        try {
            const res = await blogService.createBlog(formData)
            if (res.ok) {
                return navigate('/admin/blogs')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const labels = [
        { type: "text", name: "titre", value: values.titre, onChange: HandleInputChange },
        { type: "richTextEditor", name: "article", value: article, onChange: setArticle },
        { type: "file", name: "image", value: values.imageName, onChange: HandleImageChange },
    ]

    return (
        <div className='flex flex-col items-end pt-3 px-5'>
            <div className='grid grid-cols-1 w-full'>
                <Card cardTitle={'Ajouter un blog'} labels={labels} imageSrc={values.imageSrc} deleteImage={deleteImage} createItem={createBlog} />
            </div>
        </div>
    )
}

export default CreateBlog