import React from 'react'
import { formatBlogDate } from 'utils/formatBlogDate'

function BlogCard({ blog }) {
    return (
        <div className="flex flex-col justify-start items-start w-full py-3">
            <a className='w-full' href={`/blogs/${blog?.id}`}>
                <img src={blog.imageSrc} alt='' className='w-full h-48 object-cover rounded-3xl mt-3' />
            </a>
            <div className="flex flex-col justify-between mt-3">
                <a href={`/blogs/${blog?.id}`}>
                    <p className='font-bold text-lg line-clamp-2 hover:underline hover:decoration-solid dark:text-white'>{blog?.titre}</p>
                </a>
                <p className='text-sm mt-2 line-clamp-2 dark:text-white'>By <span className='font-bold cursor-pointer hover:text-ozon-red dark:hover:text-ozon-yellow'>OzonExpress</span> | {formatBlogDate(blog?.dateAjout)}</p>
            </div>
        </div>
    )
}

export default BlogCard