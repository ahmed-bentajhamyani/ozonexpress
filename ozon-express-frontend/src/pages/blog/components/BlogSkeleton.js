import React from 'react'

function BlogSkeleton() {
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

                {/* Recent Blogs */}
                < div className='bg-ozon-gray dark:bg-ozon-dark-gray w-[60%] md:w-[20%] h-7 rounded mt-20 mb-4'></div>

                {/* Blogs */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 w-full">
                    {Array.from({ length: 5 }, (_, index) => (
                        <div className="flex flex-col justify-start items-start w-full md:w-[350px] py-3" key={index}>
                            <div className='w-full h-48 bg-ozon-gray dark:bg-ozon-dark-gray rounded-3xl mt-3'></div>

                            <div className="flex flex-col justify-between w-full mt-3">
                                <div className='bg-ozon-gray dark:bg-ozon-dark-gray w-full h-4 rounded'></div>
                                <div className='bg-ozon-gray dark:bg-ozon-dark-gray w-[80%] h-4 mt-1 rounded'></div>

                                <div className='bg-ozon-gray dark:bg-ozon-dark-gray w-[30%] h-3 mt-3 rounded'></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogSkeleton