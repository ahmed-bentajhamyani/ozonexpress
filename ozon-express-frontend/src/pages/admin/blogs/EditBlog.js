import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../components/Card'
import BlogService from 'services/BlogService'
import HttpClient from 'services/client/HttpClient'

const initialFieldValues = {
    titre: '',
    imageName: '',
    imageSrc: '',
    imageFile: null
}

function EditBlog() {
    const navigate = useNavigate();
    const { id } = useParams()

    const blogService = new BlogService(HttpClient)

    const [values, setValues] = useState(initialFieldValues)
    const [article, setArticle] = useState('')

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const blog = await blogService.getBlog(id)
                setValues(blog)
                setArticle(blog.article)
            } catch (error) {
                console.error(error)
            }
        }

        fetchBlog()
    }, []);

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

    const editBlog = async () => {
        let formData = new FormData();
        formData.append('titre', values.titre)
        formData.append('article', article)
        formData.append('imageName', values.imageName)
        formData.append('imageFile', values.imageFile)

        try {
            const res = await blogService.updateBlog(id, formData)
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
                <Card cardTitle={'Modifier un Blog'} labels={labels} item={values} imageSrc={values.imageSrc} deleteImage={deleteImage} editItem={editBlog} />
            </div>
        </div>
    )
}

export default EditBlog