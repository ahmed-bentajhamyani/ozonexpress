import React from 'react'
import Carousel from './Carousel'

function Articles({ title, articles }) {

    return (
        <section id='market' className='container mx-auto pb-20 px-5 md:px-10 xl:px-20'>
            <div className='flex flex-col items-start'>
                <p className='font-extrabold text-3xl 2xl:text-4xl mt-1 mb-6 dark:text-white'>
                    {title}
                </p>

                <div className='w-full'>
                    <Carousel title={title} articles={articles} />
                </div>
            </div>
        </section>
    )
}

export default Articles