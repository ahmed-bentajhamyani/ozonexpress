import React from 'react'
import Button from './Button'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { usePanier } from 'context/PanierContext';

function ArticleCard({ article, button }) {

    const { increaseCartQuantity, setShowPanier } = usePanier();

    const addToCart = (id) => {
        increaseCartQuantity(id);
        setShowPanier(true);
    }

    return (
        <div className="flex flex-col justify-start items-center bg-ozon-gray w-full rounded-3xl px-5 py-3 dark:bg-ozon-dark-gray">
            <a href={`/market/article/${article?.id}`}>
                <img src={article?.imageSrc} alt='' className='h-24 mt-3' />
            </a>
            <div className="flex flex-col justify-between mt-6">
                <div className="flex justify-between items-center font-bold dark:text-white">
                    <a href={`/market/article/${article?.id}`}>
                        <p className='text-sm line-clamp-1'>{article?.nom}</p>
                    </a>
                    <p className='text-xs whitespace-nowrap'>{article?.prix} Dhs</p>
                </div>
                <p className='text-sm mt-3 line-clamp-2 dark:text-white'>{article?.description}</p>
            </div>

            {button &&
                <Button button={{
                    action: () => addToCart(article?.id),
                    style: 'w-full mt-2 px-10 py-2 space-x-1 text-sm text-white bg-ozon-red hover:bg-ozon-red-tone focus:ring-4 focus:outline-none focus:ring-ozon-red-tint',
                    icon: <HiOutlineShoppingCart />,
                    iconStyle: 'text-xl',
                    text: "J'achète"
                }} />
            }
        </div>
    )
}

export default ArticleCard