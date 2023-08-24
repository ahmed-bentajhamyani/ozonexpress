import React from 'react'

function SearchArticleCard({ article }) {
    return (
        <a className='flex justify-start items-center space-x-3 w-full p-2 rounded-3xl hover:bg-ozon-gray dark:hover:bg-ozon-dark-gray' href={`/market/article/${article?.id}`}>
            <img src={article?.imageSrc} alt='article image' className='w-24 h-24 object-cover rounded-3xl' />

            <div className="flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <p className='font-bold line-clamp-1 dark:text-white'>{article?.nom}</p>
                    <p className='font-semibold line-clamp-1 dark:text-white'>{article?.prix} Dhs</p>
                </div>
                <p className='text-sm line-clamp-2 dark:text-white'>{article?.description}</p>
            </div>
        </a>
    )
}

export default SearchArticleCard