import { useEffect, useState } from 'react'
import Button from 'components/Button'
import ArticleCard from 'components/ArticleCard'
import ArticleService from 'services/ArticleService'
import HttpClient from 'services/client/HttpClient'

function OzonMarket({ setOzonMarketLoaded, isLoaded }) {

    const articleService = new ArticleService(HttpClient)

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const articles = await articleService.getArticles()
                setArticles(articles)
            } catch (error) {
                console.log(error)
            }
        }

        fetchArticles()
    }, []);

    useEffect(() => {
        if (articles[0]) setOzonMarketLoaded(true);
    }, [articles]);

    return (
        <>
            {isLoaded &&
                <section id='market' className='container flex flex-col justify-center mx-auto py-20 px-5 md:px-10 xl:px-20'>
                    <div className='flex flex-col items-start'>
                        <p className='font-bold text-ozon-red text-xl md:text-2xl'>Ozon Market</p>
                        <p className='font-extrabold text-3xl md:text-4xl 2xl:text-5xl mt-1 dark:text-white'>
                            Optimisez votre logistique avec notre marketplace dédiée
                        </p>
                        <p className='my-2 text-sm md:text-base dark:text-white'>
                            Découvrez notre marketplace dédiée aux e-commerçants, offrant une gamme complète de produits essentiels tels que des cartons de qualité, des sachets pratiques et des étiquettes personnalisées. Simplifiez votre logistique en accédant à tous les accessoires d'emballage nécessaires pour des expéditions efficaces et professionnelles.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 gap-y-5 mt-10 px-8 lg:px-2 xl:px-3'>
                        {articles.slice(0, 4).map((article, index) => (
                            <ArticleCard article={article} key={index} />
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 mt-10">
                        <p className='font-extrabold text-xl dark:text-white'>Voir plus de nos articles</p>
                        <a href="/market">
                            <Button button={{
                                style: 'flex justify-center items-center mt-3 md:mt-0 px-10 py-3 space-x-1 text-white bg-ozon-red hover:bg-ozon-red-tone cursor-pointer rounded whitespace-nowrap active:ring-4 active:outline-none active:ring-ozon-red-tint',
                                text: 'Voir plus',
                                textStyle: 'font-bold text-sm'
                            }} />
                        </a>
                    </div>
                </section>
            }
        </>
    )
}

export default OzonMarket