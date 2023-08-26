import React from 'react'

function OneArticleSkeleton() {
    return (
        <div className="container flex flex-col md:flex-row justify-center lg:items-center mx-auto pt-36 px-5 md:px-10 md:pb-10 xl:px-20">
            <div className="animate-pulse flex flex-col items-start w-full mt-3 md:mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 items-center w-full">
                    <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-full h-96 rounded-3xl mt-3"></div>

                    <div className="w-full">
                        {/* Categorie */}
                        <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-[15%] md:w-[25%] h-2 md:h-3 rounded"></div>

                        {/* Title */}
                        <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-[100%] h-4 md:h-6 mt-5 rounded"></div>
                        
                        {/* Description */}
                        <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-[100%] h-3 md:h-4 mt-10 rounded"></div>
                        <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-[100%] h-3 md:h-4 mt-3 rounded"></div>
                        <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-[35%] md:w-[65%] h-3 md:h-4 mt-3 rounded"></div>

                        {/* Button */}
                        <div className='bg-ozon-gray dark:bg-ozon-dark-gray w-[100%] h-11 rounded-full mt-14'></div>
                    </div>
                </div>

                {/* Articles */}
                <div className='w-full'>
                    {/* Categorie title */}
                    < div className='bg-ozon-gray dark:bg-ozon-dark-gray w-[60%] md:w-[20%] h-7 rounded mt-20 mb-4' ></div>

                    {/* Articles Card */}
                    <div className='flex items-center justify-start w-full py-3'>
                        {/* Desktop */}
                        <div className="hidden md:flex space-x-3 w-full">
                            {Array.from({ length: 4 }, (_, index) => (
                                <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-full h-48 rounded-3xl mt-3" key={index}></div>
                            ))}
                        </div>

                        {/* Mobile */}
                        <div className="flex justify-between space-x-3 md:hidden w-full">
                            {Array.from({ length: 2 }, (_, index) => (
                                <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-full h-48 rounded-3xl mt-3" key={index}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneArticleSkeleton