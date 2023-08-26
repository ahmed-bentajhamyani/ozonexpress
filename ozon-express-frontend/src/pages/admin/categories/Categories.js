import { useEffect, useState } from 'react'
import CategorieService from 'services/CategorieService'
import HttpClient from 'services/client/HttpClient'
import Card from '../components/Card'
import Button from '../components/Button'
import { BsPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import PreloaderSpinner from 'components/PreloaderSpinner'

function Categories() {
    const categorieService = new CategorieService(HttpClient)

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await categorieService.getCategories()
                if (categories) setCategories(categories)
            } catch (error) {
                setErrMsg(error)
            }
        }

        fetchCategories()
    }, []);

    useEffect(() => {
        if(categories[0]) setIsLoading(false);
    }, [categories]);

    const deleteCategorie = async (id) => {
        try {
            const res = await categorieService.deleteCategorie(id)
            if (res) {
                setCategories(categories => categories.filter(categorie => categorie.id !== id));
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {isLoading ?
                <PreloaderSpinner />
                :
                <div className='flex flex-col items-end pt-3 px-5'>
                    <Link to={'create'}>
                        <Button button={{
                            style: 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-200',
                            icon: <BsPlus />,
                            text: 'Nouveau Categorie'
                        }} />
                    </Link>
                    <div className='grid grid-cols-1 w-full'>
                        <Card cardTitle={'Categories'} items={categories} deleteItem={deleteCategorie} errMsg={errMsg} />
                    </div>
                </div>
            }
        </>
    )
}

export default Categories