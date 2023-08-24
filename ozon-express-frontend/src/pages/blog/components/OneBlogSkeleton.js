import React from 'react'

function OneBlogSkeleton() {
    return (
        <div className="animate-pulse flex flex-col items-start w-full mt-3">
            {/* Title */}
            <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-full h-8 rounded"></div>
            <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-[80%] h-8 rounded mt-2"></div>

            {/* Author & Date */}
            <div className='bg-ozon-gray dark:bg-ozon-dark-gray w-[30%] h-4 rounded mt-3'></div>

            {/* Blog image */}
            <div className='bg-ozon-gray dark:bg-ozon-dark-gray w-full h-96 md:h-[500px] rounded-xl mt-3'></div>

            <div className="container flex justify-between space-x-14 mt-10">
                {/* Blog */}
                <div className="flex flex-col w-full">
                    {Array.from({ length: 30 }, (_, index) => (
                        <div className='bg-ozon-gray dark:bg-ozon-dark-gray w-full h-4 rounded mt-3' key={index}></div>
                    ))}
                    <div className='bg-ozon-gray dark:bg-ozon-dark-gray w-[60%] h-4 rounded mt-3'></div>
                </div>

                {/* Articles */}
                <div className='hidden md:block'>
                    {/* Ozon Market */}
                    <div className='bg-ozon-gray dark:bg-ozon-dark-gray mx-6 h-7 rounded mb-6'></div>

                    {/* Articles Card */}
                    <div className='flex flex-col justify-center items-center w-[260px] space-y-5 mb-10'>
                        {Array.from({ length: 3 }, (_, index) => (
                            <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-full h-56 rounded-3xl mb-3" key={index}></div>
                        ))}
                    </div>

                    {/* Voir plus de nos articles */}
                    <div className='bg-ozon-gray dark:bg-ozon-dark-gray h-5 mx-6 rounded mb-3'></div>

                    {/* Button */}
                    <div className='bg-ozon-gray dark:bg-ozon-dark-gray h-11 mx-14 rounded-full mb-3'></div>
                </div>
            </div>

            {/* Blogs */}
            {/* Plus d'articles */}
            <div className='bg-ozon-gray dark:bg-ozon-dark-gray w-56 md:w-96 h-7 rounded mt-10 mb-6'></div>

            {/* Blogs Card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 w-full mb-20'>
                {Array.from({ length: 5 }, (_, index) => (
                    <div key={index}>
                        <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-full h-40 rounded-3xl mt-5"></div>
                        <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-full h-4 rounded mt-3"></div>
                        <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-[70%] h-4 rounded mt-2"></div>
                        <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-[30%] h-3 rounded mt-3"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OneBlogSkeleton