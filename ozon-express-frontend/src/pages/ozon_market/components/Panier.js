import { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { usePanier } from 'context/PanierContext'
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import ArticleCardSkeleton from './ArticleCardSkeleton';
import ArticleService from 'services/ArticleService';
import HttpClient from 'services/client/HttpClient';

function Panier({ showPanier, setShowPanier }) {
    const navigate = useNavigate();

    const articleService = new ArticleService(HttpClient);

    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);

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

    useEffect(() => {
        if (articles[0]) {
            console.log(articles);
            setIsLoading(false);
        }
    }, [articles]);

    // useEffect(() => {
    //     const panierId = localStorage.getItem("panier");
    //     if (panierId == null) {

    //     }
    // }, []);

    const { cartQuantity, panierArticles, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = usePanier();

    return (
        <>
            <div className={`flex flex-col justify-center items-center overflow-hidden bg-white fixed w-4/5 sm:w-2/3 lg:w-1/3 h-screen top-0 right-0 z-50 outline-none focus:outline-none duration-300 dark:bg-black ${showPanier ? 'translate-x-0' : 'translate-x-full'}`}>
                {/*header*/}
                <div className='flex items-center justify-between p-4 w-full border-b'>
                    <h3 className='text-xl font-semibold dark:text-white'>Votre Panier</h3>
                    <Button button={{
                        action: () => setShowPanier(false),
                        style: 'hover:text-ozon-red dark:text-white dark:hover:text-ozon-yellow',
                        icon: <MdClose />,
                        iconStyle: 'text-2xl'
                    }} />
                </div>

                {/*body*/}
                <div className='relative flex-auto p-4 overflow-y-auto w-full border-b'>
                    {/* header */}
                    <div className="flex justify-between items-center mb-2">
                        <p className='font-semibold dark:text-white'>{cartQuantity} articles</p>
                        <Button button={{
                            // action: () => setShowPanier(false),
                            style: 'font-medium text-sm hover:text-ozon-red dark:text-white dark:hover:text-ozon-yellow',
                            text: 'Supprimer tous'
                        }} />
                    </div>

                    {isLoading ?
                        <ArticleCardSkeleton />
                        :
                        <>
                            {panierArticles.map((panierArticle, index) => {
                                const article = articles.find(a => a.id === panierArticle.id)
                                return (
                                    <div className="flex justify-start items-center space-x-2 lg:space-x-7 p-4 rounded-3xl hover:bg-ozon-gray dark:hover:bg-ozon-dark-gray" key={index}>
                                        <img src={article.imageSrc} alt='' className='w-16 md:w-20' />
                                        <div className="flex flex-1 justify-between items-center">
                                            <div className="">
                                                <p className='font-semibold text-base line-clamp-1 dark:text-white'>{article.nom}</p>
                                                <p className='text-xs lg:text-sm line-clamp-1 dark:text-white'>{article.description}</p>

                                                <div className="flex justify-start items-center text-xs lg:text-sm space-x-2">
                                                    <Button button={{
                                                        action: () => decreaseCartQuantity(article.id),
                                                        style: 'px-1 py-1 text-white bg-ozon-red hover:bg-ozon-red-tone cursor-pointer rounded focus:ring-4 focus:outline-none focus:ring-ozon-red-tint disabled:opacity-50 disabled:cursor-default disabled:hover:bg-ozon-red disabled:focus:ring-0 dark:bg-ozon-yellow dark:hover:bg-ozon-yellow-tone dark:focus:ring-ozon-yellow/30',
                                                        icon: <AiOutlineMinus />,
                                                        iconStyle: 'dark:text-black',
                                                        disabled: panierArticle.quantity === 1
                                                    }} />
                                                    <span className='text-gray-700 dark:text-white'>{panierArticle.quantity}</span>
                                                    <Button button={{
                                                        action: () => increaseCartQuantity(article.id),
                                                        style: 'px-1 py-1 text-white bg-ozon-red hover:bg-ozon-red-tone cursor-pointer rounded focus:ring-4 focus:outline-none focus:ring-ozon-red-tint disabled:opacity-50 disabled:cursor-default disabled:hover:bg-ozon-red disabled:focus:ring-0 dark:bg-ozon-yellow dark:hover:bg-ozon-yellow-tone dark:focus:ring-ozon-yellow/30',
                                                        icon: <AiOutlinePlus />,
                                                        iconStyle: 'dark:text-black',
                                                        disabled: panierArticle.quantity + 1 > article.quantity
                                                    }} />
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-center">
                                                <p className='font-semibold text-sm md:text-lg whitespace-nowrap lg:group-hover:hidden dark:text-white'>{article.prix * panierArticle.quantity} Dhs</p>
                                                <Button button={{
                                                    action: () => removeFromCart(article.id),
                                                    style: ' cursor-pointer hover:text-ozon-red dark:text-white dark:hover:text-ozon-yellow',
                                                    icon: <AiOutlineDelete />,
                                                    iconStyle: 'text-xl'
                                                }} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    }
                </div>

                {/*footer*/}
                <div className='flex flex-col items-center justify-end w-full p-4' >
                    <div className="flex items-center justify-between w-full mb-2">
                        <span className="font-semibold text-sm dark:text-white">Sous-total</span>
                        <span className="font-semibold text-lg dark:text-white">
                            {panierArticles.reduce((total, panierArticle) => {
                                const article = articles.find(a => a.id === panierArticle.id)
                                return total + (article?.prix || 0) * panierArticle.quantity
                            }, 0)} Dhs
                        </span>
                    </div>
                    <button type='button' className='flex justify-center items-center w-full px-10 py-3 space-x-1 text-white bg-ozon-red hover:bg-ozon-red-tone cursor-pointer rounded-full whitespace-nowrap focus:ring-4 focus:outline-none focus:ring-ozon-red-tint disabled:opacity-50 disabled:cursor-default disabled:hover:bg-ozon-red disabled:focus:ring-0 dark:text-black dark:bg-ozon-yellow dark:hover:bg-ozon-yellow-tone dark:disabled:hover:bg-ozon-yellow dark:focus:ring-ozon-yellow/30' onClick={() => navigate('/login')} disabled={panierArticles.length < 1}>
                        Checkout
                    </button>
                </div>
            </div>
            <div onClick={() => setShowPanier(false)} className={`opacity-25 fixed inset-0 z-40 bg-black ${showPanier ? '' : 'hidden'}`}></div>
        </>
    )
}

export default Panier