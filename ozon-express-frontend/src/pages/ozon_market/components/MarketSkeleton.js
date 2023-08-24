import React from 'react'

function MarketSkeleton() {
    return (
        <div className="container flex flex-col md:flex-row justify-center lg:items-center mx-auto pt-36 px-5 md:px-10 md:pb-10 xl:px-20">
            <div className="animate-pulse flex flex-col items-start w-full mt-3 md:mt-0">
                {/* Title */}
                <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-[85%] md:w-[60%] h-6 md:h-8 mt-3 rounded"></div>
                <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-[85%] md:w-[60%] h-6 md:h-8 mt-3 rounded"></div>
                <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-[70%] md:w-[40%] h-6 md:h-8 mt-3 rounded"></div>

                {/* Subtitle */}
                <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-[55%] md:w-[25%] h-4 mt-5 rounded"></div>

                {/* Button */}
                {/* <div className='bg-ozon-gray dark:bg-ozon-dark-gray w-[45%] md:w-[15%] h-11 rounded-full my-8'></div> */}

                {/* Articles */}
                {Array.from({ length: 4 }, (_, index) => (
                    <div className='w-full' key={index}>
                        {/* Categorie title */}
                        < div className='bg-ozon-gray dark:bg-ozon-dark-gray w-[60%] md:w-[20%] h-7 rounded mt-20 mb-4' ></div>

                        {/* Articles Card */}
                        <div className='flex items-center justify-start w-full py-3'>
                            <div className="hidden md:flex space-x-3 w-full">
                                {Array.from({ length: 4 }, (_, index) => (
                                    <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-full h-48 rounded-3xl mt-3" key={index}></div>
                                ))}
                            </div>
                            <div className="flex justify-between space-x-3 md:hidden w-full">
                                {Array.from({ length: 2 }, (_, index) => (
                                    <div className="bg-ozon-gray dark:bg-ozon-dark-gray w-full h-48 rounded-3xl mt-3" key={index}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default MarketSkeleton