import React from 'react'

function ArticleCardSkeleton() {
    return (
        <div className='animate-pulse'>
            {Array.from({ length: 3 }, (_, index) => (
                <div className='flex justify-start items-center space-x-3 w-full p-4 rounded-3xl' key={index}>
                    <div className='w-24 h-24 bg-ozon-gray dark:bg-ozon-dark-gray rounded-3xl' />

                    <div className="flex flex-1 flex-col justify-between w-full">
                        <div className='w-full h-3.5 bg-ozon-gray dark:bg-ozon-dark-gray rounded'></div>
                        <div className='w-full h-3 bg-ozon-gray dark:bg-ozon-dark-gray rounded mt-3'></div>
                        <div className='w-[60%] h-3 bg-ozon-gray dark:bg-ozon-dark-gray rounded mt-2'></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ArticleCardSkeleton