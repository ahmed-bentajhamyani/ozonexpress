import React, { useEffect, useState } from 'react'
import ArticleCard from 'components/ArticleCard'
import Button from 'components/Button'
import BlogCard from './components/BlogCard'
import { useParams } from 'react-router-dom'
import BlogService from 'services/BlogService'
import HttpClient from 'services/client/HttpClient'
import ArticleService from 'services/ArticleService'
import { formatBlogDate } from 'utils/formatBlogDate'
import OneBlogSkeleton from './components/OneBlogSkeleton'

function OneBlog() {
    const blogService = new BlogService(HttpClient);
    const articleService = new ArticleService(HttpClient);

    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [blog, setBlog] = useState();
    const [articles, setArticles] = useState();
    const [blogs, setBlogs] = useState();

    useEffect(() => {
        fetchBlog();
        fetchArticles();
        fetchBlogs();
    }, []);

    const fetchBlog = async () => {
        try {
            const blog = await blogService.getBlog(id)
            setBlog(blog)
        } catch (error) {
            console.error(error)
        }
    }

    const fetchArticles = async () => {
        try {
            const articles = await articleService.getArticles()
            setArticles(articles)
        } catch (error) {
            console.error(error)
        }
    }

    const fetchBlogs = async () => {
        try {
            const blogs = await blogService.getBlogs()
            setBlogs(blogs)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (blog && articles && blogs) setIsLoading(false);
    }, [blog, articles, blogs]);

    return (
        <div className="container flex flex-col md:flex-row justify-center lg:items-center mx-auto pt-20 px-5 md:px-10 md:pb-10 xl:px-20">
            {isLoading ?
                <OneBlogSkeleton />
                :
                <div className="flex flex-col items-start mt-3">
                    <p className="font-extrabold text-4xl lg:text-5xl 2xl:text-6xl mt-1 dark:text-white">
                        {blog?.titre}
                    </p>
                    <p className='mt-2 dark:text-white'>
                        By <span className='font-bold hover:text-ozon-red cursor-pointer'>OzonExpress</span> | {formatBlogDate(blog?.dateAjout)}
                    </p>
                    <div className="w-full mt-3">
                        <img src={blog?.imageSrc} alt="" className='w-screen rounded-xl' />
                    </div>

                    <div className="container flex justify-between space-x-14 mt-10">
                        <div className='ql-text dark:text-white' dangerouslySetInnerHTML={{ __html: blog?.article }} />

                        {/* Articles */}
                        <div className='hidden md:block'>
                            <p className='font-bold text-center text-2xl md:text-3xl mb-6 dark:text-white'>Ozon Market</p>

                            <div className='flex flex-col justify-center items-center w-[260px] space-y-5'>
                                {articles.map((article) => (
                                    <ArticleCard article={article} />
                                ))}
                            </div>

                            <div className="flex flex-col justify-center items-center space-x-4 mt-10">
                                <p className='font-extrabold text-xl whitespace-nowrap mb-3 dark:text-white'>Voir plus de nos articles</p>
                                <a href="/market">
                                    <Button button={{
                                        style: 'flex justify-center items-center mt-3 md:mt-0 px-10 py-3 space-x-1 text-white bg-ozon-red hover:bg-ozon-red-tone cursor-pointer rounded whitespace-nowrap active:ring-4 active:outline-none active:ring-ozon-red-tint',
                                        text: 'Voir plus',
                                        textStyle: 'font-bold text-sm'
                                    }} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Blogs */}
                    <div className='flex flex-col items-start mt-6'>
                        <p className='font-extrabold text-3xl 2xl:text-4xl dark:text-white'>
                            Plus d'articles
                        </p>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8'>
                            {blogs?.filter((blog) => blog.id !== id).map((blog) => (
                                <BlogCard blog={blog} />
                            ))}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default OneBlog