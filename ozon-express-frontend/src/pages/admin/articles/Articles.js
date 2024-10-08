import { useEffect, useState } from 'react'
import ArticleService from 'services/ArticleService'
import CategorieService from 'services/CategorieService'
import HttpClient from 'services/client/HttpClient'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { BsPlus } from 'react-icons/bs'
import Card from '../components/Card'
import PreloaderSpinner from 'components/PreloaderSpinner'

function Articles() {
    const articleService = new ArticleService(HttpClient)

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const articles = await articleService.getArticles()
                if (articles) {
                    let newArticles = []

                    await Promise.all(articles.map(async (article) => {
                        const categorie = await getCategorieById(article.categorieId);

                        newArticles.push({
                            id: article.id,
                            nom: article.nom,
                            description: article.description,
                            imageName: '',
                            imageSrc: article.imageSrc,
                            imageFile: null,
                            prix: article.prix,
                            quantite: article.quantite,
                            "categorie": categorie
                        });
                    }));

                    setArticles(newArticles)
                }
            } catch (error) {
                setErrMsg(error)
            }
        }

        fetchArticles()
    }, []);

    async function getCategorieById(id) {
        const categorieService = new CategorieService(HttpClient)
        try {
            const res = await categorieService.getCategorie(id);
            if (res) return res.nom;
        } catch (error) {
            setErrMsg(new Error("Cannot fetch categories. Please try again later"));
        }
    }

    useEffect(() => {
        if(articles[0]) setIsLoading(false);
    }, [articles]);

    const deleteArticle = async (id) => {
        try {
            const res = await articleService.deleteArticle(id)
            if (res) {
                setArticles(articles => articles.filter(article => article.id !== id));
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
                            text: 'Nouveau Article'
                        }} />
                    </Link>
                    <div className='grid grid-cols-1 w-full'>
                        <Card cardTitle={'Articles'} items={articles} deleteItem={deleteArticle} errMsg={errMsg} />
                    </div>
                </div>
            }
        </>
    )
}

export default Articles