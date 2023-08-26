import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import BlogService from 'services/BlogService';
import HttpClient from 'services/client/HttpClient';
import { useEffect, useState } from 'react';

function Blog() {
    const blogService = new BlogService(HttpClient);

    const [searchBoxOpen, setSearchBoxOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

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

    const HandleInputChange = (event) => {
        const { value } = event.target;
        if (value?.length > 2) {
            setSearchBoxOpen(true);
            setIsLoading(true);
            const searchBlogs = blogs.filter(blog => blog?.titre.toLowerCase().includes(value.toLowerCase()));
            setSearchResult(searchBlogs);
        } else {
            setSearchBoxOpen(false);
        }

        setTimeout(() => {
            setIsLoading(false);
        }, "1000");
    }

    return (
        <>
            <Navbar
                HandleInputChange={HandleInputChange}
                searchBoxOpen={searchBoxOpen}
                isLoading={isLoading}
                searchResult={searchResult}
            />
            <Outlet />
            <Footer />
        </>
    )
}

export default Blog