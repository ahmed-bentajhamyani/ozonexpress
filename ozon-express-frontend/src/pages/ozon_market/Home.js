import { useEffect, useState } from 'react'
import CategorieService from 'services/CategorieService';
import ArticleService from 'services/ArticleService';
import HttpClient from 'services/client/HttpClient';
import Hero from './Hero'
import Articles from './components/Articles'
import MarketSkeleton from './components/MarketSkeleton';

function Home() {
    const categorieService = new CategorieService(HttpClient);
    const articleService = new ArticleService(HttpClient);

    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await categorieService.getCategories();
                setCategories(categories);
                fetchArticles();
            } catch (error) {
                console.log(error);
            }
        }

        const fetchArticles = async () => {
            try {
                const articles = await articleService.getArticles();
                setArticles(articles);
            } catch (error) {
                console.log(error);
            }
        }

        fetchCategories();
    }, []);

    useEffect(() => {
        if (articles[0] && categories[0]) setIsLoading(false);
    }, [articles, categories]);

    return (
        <>
            {isLoading ?
                <MarketSkeleton />
                :
                <div className='market-bachground-image top-0'>
                    <Hero />
                    <div className="mb-20">
                        <Articles title={'Meilleurs articles'} articles={articles} />
                        {categories.map((categorie, index) => (
                            <Articles title={categorie.nom} articles={articles.filter((article) => article.categorieId === categorie.id)} key={index} />
                        ))}
                    </div>
                </div>
            }
        </>
    )
}

export default Home