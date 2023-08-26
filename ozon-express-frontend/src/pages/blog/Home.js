import React, { useEffect, useState } from 'react'
import BlogCard from './components/BlogCard'
import BlogService from 'services/BlogService';
import HttpClient from 'services/client/HttpClient';
import Hero from './Hero';
import BlogSkeleton from './components/BlogSkeleton';

function Home() {
  const blogService = new BlogService(HttpClient);

  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await blogService.getBlogs();
        setBlogs(blogs);
      } catch (error) {
        console.log(error);
      }
    }

    fetchBlogs();
  }, []);

  useEffect(() => {
    if (blogs[0]) setIsLoading(false);
  }, [blogs]);

  return (
    <>
      {isLoading ?
        <BlogSkeleton />
        :
        <div className="blog-bachground-image top-0">
          <Hero />
          <div className="container flex flex-col md:flex-row justify-center lg:items-center mx-auto pt-20 px-5 md:px-10 md:pb-10 xl:px-20">
            <div className='flex flex-col items-start'>
              <p className='font-extrabold text-3xl 2xl:text-4xl mt-1 mb-6 dark:text-white'>
                Meilleurs produits
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
                {blogs.map((blog, index) => (
                  <BlogCard isLoading={isLoading} blog={blog} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Home