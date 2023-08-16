import Button from 'components/Button';
import { usePanier } from 'context/PanierContext';
import React from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'

function ArticleDetails({ article }) {

    const { increaseCartQuantity, setShowPanier } = usePanier();

    const addToCart = (id) => {
        increaseCartQuantity(id);
        setShowPanier(true);
    }

    return (
        <div className='container flex flex-col justify-center lg:items-center mx-auto pt-20 px-5 md:px-10 md:pb-10 xl:px-20' key={article.id}>
            <div className="flex flex-col lg:flex-row justify-start items-center lg:space-x-8">
                <img src={article?.imageSrc} alt='' className='h-[300px] md:h-[400px] mt-3' />
                <div className="flex flex-grow flex-col justify-between bg-ozon-gray mt-6 px-5 py-3 w-full rounded-3xl dark:bg-ozon-dark-gray">
                    <p className='mt-3 dark:text-white'>{article?.categorie}</p>

                    <div className="flex justify-between items-start font-bold dark:text-white">
                        <p className='text-3xl'>{article?.nom}</p>
                        <p className='text-2xl whitespace-nowrap'>{article?.prix} Dhs</p>
                    </div>

                    <p className='text-lg mt-3 dark:text-white'>{article?.description}</p>

                    <Button button={{
                        action: () => addToCart(article?.id),
                        style: 'w-full mt-6 py-2.5 space-x-1 text-lg text-white bg-ozon-red hover:bg-ozon-red-tone focus:ring-4 focus:outline-none focus:ring-ozon-red-tint',
                        icon: <HiOutlineShoppingCart />,
                        iconStyle: 'text-3xl',
                        text: "J'achète"
                    }} />
                </div>
            </div>
        </div>
    )
}

export default ArticleDetails