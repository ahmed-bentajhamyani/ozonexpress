import React, { useEffect, useState } from 'react'
import Blog from 'assets/images/4.jpg'
import BlogService from 'services/BlogService';
import HttpClient from 'services/client/HttpClient';
import Button from 'components/Button'

function Blogs({ setBlogsLoaded, isLoaded }) {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const blogService = new BlogService(HttpClient)
        const fetchBlogs = async () => {
            try {
                const blogs = await blogService.getBlogs()
                setBlogs(blogs)
            } catch (error) {
                console.log(error)
            }
        }

        fetchBlogs()
    }, []);

    useEffect(() => {
        if (blogs[0]) setBlogsLoaded(true);
    }, [blogs]);

    return (
        <>
            {isLoaded &&
                <section id='blogs' className='relative bg-ozon-yellow w-full h-fit lg:h-[600px] mt-10'>
                    <div className="lg:container flex flex-col lg:flex-row justify-between lg:justify-end items-center mx-auto pb-10 lg:py-10 xl:px-10">

                        <div className="-mx-5 md:-mx-10 lg:mx-0 lg:absolute lg:top-0 lg:left-0 flex items-center justify-center lg:w-1/2">
                            <div className="relative">
                                <div className='flex items-center justify-center'>
                                    <img src={Blog} alt='' className='object-cover w-screen h-96 md:h-fit lg:h-[600px]' />
                                </div>

                                <div className='container mx-auto py-8 px-5 md:px-10 xl:px-20 absolute flex flex-col items-start top-0 bottom-0'>
                                    <div className="container m-auto flex flex-col items-start">
                                        <p className='font-bold text-ozon-yellow text-xl md:text-2xl'>Blog</p>
                                        <p className='font-extrabold text-white text-3xl md:text-4xl 2xl:text-5xl mt-1'>
                                            Découvrez les Dernières Tendances Logistiques sur Notre Blog
                                        </p>
                                        <p className='mt-2 text-white text-sm md:text-base'>
                                            Explorez notre blog pour des informations, conseils et actualités clés de la logistique, afin d'optimiser vos opérations et rester à jour dans le domaine.
                                        </p>
                                        <a href="/blogs" className='mt-5'>
                                            <Button button={{
                                                style: 'px-10 py-2.5 mb-0 bg-ozon-yellow hover:bg-ozon-yellow-tone cursor-pointer rounded focus:ring-4 focus:outline-none focus:ring-ozon-yellow/40',
                                                text: 'Voir plus',
                                                textStyle: 'font-bold text-sm'
                                            }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile version */}
                        <div className='lg:hidden container mx-auto px-5 md:px-10 mt-5'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6'>
                                {blogs.slice(0, 4).map((blog) => (
                                    <a href={`/blogs/${blog?.id}`} className="flex flex-col bg-white rounded-3xl drop-shadow-black mt-4" key={blog?.id}>
                                        <img src={blog?.imageSrc} alt="" className='object-cover h-32 rounded-t-3xl' />
                                        <p className='font-bold text-sm m-1 p-3 hover:underline dark:text-white'>
                                            {blog?.titre}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Laptop version */}
                        <div className='hidden lg:block mb-0 px-10 w-1/2'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6'>
                                {blogs.slice(0, 4).map((blog) => (
                                    <a href={`/blogs/${blog?.id}`} className="flex flex-col bg-white rounded-3xl drop-shadow-black mt-4" key={blog?.id}>
                                        <img src={blog?.imageSrc} alt="" className='object-cover h-32 rounded-t-3xl' />
                                        <p className='font-bold text-sm m-1 p-2 hover:underline'>
                                            <span className='line-clamp-2 lg:line-clamp-3 xl:line-clamp-none'>{blog?.titre}</span>
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default Blogs