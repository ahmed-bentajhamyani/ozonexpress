import React from 'react'
import { formatBlogDate } from 'utils/formatBlogDate'

function SearchBlogCard({ blog }) {
    return (
        <a className='flex justify-start items-center space-x-3 w-full p-2 rounded-3xl hover:bg-ozon-gray dark:hover:bg-ozon-dark-gray' href={`/blogs/${blog?.id}`}>
            <img src={blog?.imageSrc} alt='blog image' className='w-44 h-24 object-cover rounded-3xl' />

            <div className="flex flex-col justify-between">
                <p className='font-bold line-clamp-2 dark:text-white'>{blog?.titre}</p>
                <p className='text-sm mt-1 line-clamp-2 dark:text-white'>By <span className='font-bold'>OzonExpress</span> | {formatBlogDate(blog?.dateAjout)}</p>
            </div>
        </a>
    )
}

export default SearchBlogCard