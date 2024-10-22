import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { BsPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import BlogService from 'services/BlogService'
import HttpClient from 'services/client/HttpClient'
import { formatBlogDate } from 'utils/formatBlogDate'
import PreloaderSpinner from 'components/PreloaderSpinner'

function Blogs() {
    const blogService = new BlogService(HttpClient)

    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const blogs = await blogService.getBlogs()
                if (blogs) {
                    blogs.map((blog) => blog.dateAjout = formatBlogDate(blog.dateAjout))
                    setBlogs(blogs)
                }
            } catch (error) {
                setErrMsg(error)
            }
        }

        fetchBlogs()
    }, []);

    useEffect(() => {
        if (blogs[0]) setIsLoading(false);
    }, [blogs])

    const deleteBlog = async (id) => {
        try {
            const res = await blogService.deleteBlog(id)
            if (res) {
                setBlogs(blogs => blogs.filter(blog => blog.id !== id));
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {isLoading ?
                <PreloaderSpinner />
                :
                <div className='flex flex-col items-end pt-3 px-5'>
                    <Link to={'/admin/blogs/create'}>
                        <Button button={{
                            style: 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-200',
                            icon: <BsPlus />,
                            text: 'Nouveau Blog'
                        }} />
                    </Link>
                    <div className='grid grid-cols-1 w-full'>
                        <Card cardTitle={'Blogs'} items={blogs} deleteItem={deleteBlog} errMsg={errMsg} />
                    </div>
                </div>
            }
        </>
    )
}

export default Blogs