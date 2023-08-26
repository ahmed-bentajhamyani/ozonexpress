import { useEffect, useState } from 'react'
import Card from '../components/Card'
import BlogService from 'services/BlogService';
import HttpClient from 'services/client/HttpClient';
import { useNavigate } from 'react-router-dom';
import PreloaderSpinner from 'components/PreloaderSpinner';

const initialFieldValues = {
    titre: '',
    imageName: '',
    imageSrc: '',
    imageFile: null
}

function CreateBlog() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [values, setValues] = useState(initialFieldValues)
    const [article, setArticle] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

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
        });
    }

    const createBlog = async () => {
        let formData = new FormData();
        formData.append('titre', values.titre);
        formData.append('article', article);
        formData.append('imageName', values.imageName);
        formData.append('imageFile', values.imageFile);

        const blogService = new BlogService(HttpClient);
        try {
            const res = await blogService.createBlog(formData);
            if (res.ok) {
                return navigate('/admin/blogs');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const labels = [
        { type: "text", name: "titre", value: values.titre, onChange: HandleInputChange },
        { type: "richTextEditor", name: "article", value: article, onChange: setArticle },
        { type: "file", name: "image", value: values.imageName, onChange: HandleImageChange },
    ]

    return (
        <>
            {isLoading ?
                <PreloaderSpinner />
                :
                <div className='flex flex-col items-end pt-3 px-5'>
                    <div className='grid grid-cols-1 w-full'>
                        <Card cardTitle={'Ajouter un blog'} labels={labels} imageSrc={values.imageSrc} deleteImage={deleteImage} createItem={createBlog} />
                    </div>
                </div>
            }
        </>
    )
}

export default CreateBlog