import React, { useEffect, useState } from 'react'
import CategorieService from 'services/CategorieService';
import ArticleService from 'services/ArticleService';
import HttpClient from 'services/client/HttpClient';
import Hero from './Hero'
import Articles from './components/Articles'

function Home() {
    const categorieService = new CategorieService(HttpClient);
    const articleService = new ArticleService(HttpClient);

    const [categories, setCategories] = useState([]);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchCategories()
        fetchArticles()
    }, []);

    const fetchCategories = async () => {
        try {
            const categories = await categorieService.getCategories()
            setCategories(categories)
        } catch (error) {
            console.error(error)
        }
    }

    const fetchArticles = async () => {
        try {
            const articles = await articleService.getArticles()
            setArticles(articles)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main className='mb-20'>
            <Hero />
            <Articles title={'Meilleurs articles'} articles={articles} />
            {categories.map((categorie) => (
                <Articles title={categorie.nom} articles={articles.filter((article) => article.categorieId === categorie.id)} />
            ))}
        </main>
    )
}

export default Home