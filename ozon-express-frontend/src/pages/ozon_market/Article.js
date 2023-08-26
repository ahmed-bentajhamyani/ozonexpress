import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Articles from './components/Articles'
import ArticleDetails from './components/ArticleDetails'
import ArticleService from 'services/ArticleService'
import CategorieService from 'services/CategorieService'
import HttpClient from 'services/client/HttpClient'
import OneArticleSkeleton from './components/OneArticleSkeleton'

function Article() {
    const { id } = useParams();

    const articleService = new ArticleService(HttpClient);

    const [isLoading, setIsLoading] = useState(true);

    const [article, setArticle] = useState();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticle();
    }, []);

    const fetchArticle = async () => {
        try {
            const article = await articleService.getArticle(id);
            fetchArticlesFromCategorie(article);

            const categorie = await getCategorieById(article.categorieId);

            const newArticle = {
                id: article.id,
                nom: article.nom,
                description: article.description,
                imageName: '',
                imageSrc: article.imageSrc,
                imageFile: null,
                prix: article.prix,
                quantite: article.quantite,
                "categorie": categorie
            };

            setArticle(newArticle);
        } catch (error) {
            console.log(error);
        }
    }

    async function getCategorieById(id) {
        const categorieService = new CategorieService(HttpClient);
        try {
            const res = await categorieService.getCategorie(id);
            return res.nom;
        } catch (error) {
            console.log(error);
        }
    }

    const fetchArticlesFromCategorie = async (article) => {
        try {
            const articles = await articleService.getArticles();
            setArticles(articles.filter((art) => art.categorieId === article.categorieId && art.id !== article.id));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (article) setIsLoading(false);
    }, [article, articles]);

    return (
        <>
            {isLoading ?
                <OneArticleSkeleton />
                :
                <>
                    {article &&
                        <ArticleDetails article={article} />
                    }
                    {articles.length > 0 &&
                        <div className="mt-10">
                            <Articles title={'Plus de cette catégorie'} articles={articles} />
                        </div>
                    }
                </>
            }
        </>
    )
}

export default Article