import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom';
import ArticleService from 'services/ArticleService';
import HttpClient from 'services/client/HttpClient';
import CategorieService from 'services/CategorieService';

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

function CreateArticle() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState()

  useEffect(() => {
    const fetchCategories = async () => {
      const categorieService = new CategorieService(HttpClient)

      try {
        const categories = await categorieService.getCategories()
        setCategories(categories)
      } catch (error) {
        console.error(error)
      }
    }

    fetchCategories()
  }, []);

  const [values, setValues] = useState(initialFieldValues)

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

  const createArticle = async () => {
    let formData = new FormData();
    formData.append('nom', values.nom)
    formData.append('description', values.description)
    formData.append('imageName', values.imageName)
    formData.append('imageFile', values.imageFile)
    formData.append('prix', values.prix)
    formData.append('quantite', values.quantite)

    const articleService = new ArticleService(HttpClient)
    try {
      const res = await articleService.createArticle(formData)
      if (res.ok) {
        return navigate('/admin/articles')
      }
    } catch (error) {
      console.error(error)
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
    <div className='flex flex-col items-end pt-3 px-5'>
      <div className='grid grid-cols-1 w-full'>

        <Card cardTitle={'Ajouter un article'} labels={labels} items={categories} imageSrc={values.imageSrc} deleteImage={deleteImage} createItem={createArticle} />
      </div>
    </div>
  )
}

export default CreateArticle