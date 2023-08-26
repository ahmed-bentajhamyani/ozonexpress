import { useEffect, useState } from 'react'
import { PanierProvider } from 'context/PanierContext';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import ArticleService from 'services/ArticleService';
import HttpClient from 'services/client/HttpClient';

function Market() {
    const articleService = new ArticleService(HttpClient);

    const [searchBoxOpen, setSearchBoxOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const articles = await articleService.getArticles();
                setArticles(articles);
            } catch (error) {
                console.log(error);
            }
        }

        fetchArticles();
    }, []);

    const HandleInputChange = (event) => {
        const { value } = event.target;
        if (value?.length > 2) {
            setSearchBoxOpen(true);
            setIsLoading(true);
            const searchArticles = articles.filter(article => article?.nom.toLowerCase().includes(value?.toLowerCase()));
            setSearchResult(searchArticles);
        } else {
            setSearchBoxOpen(false);
        }

        setTimeout(() => {
            setIsLoading(false);
        }, "1000");
    }

    return (
        <PanierProvider>
            <Navbar
                HandleInputChange={HandleInputChange}
                searchBoxOpen={searchBoxOpen}
                isLoading={isLoading}
                searchResult={searchResult}
            />
            <Outlet />
            <Footer />
        </PanierProvider>
    )
}

export default Market