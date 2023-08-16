import Navbar from 'components/Navbar'
import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Footer from 'components/Footer'
import OneBlog from './OneBlog'

function Blog() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="" element={<Home />} />
                <Route path=":id" element={<OneBlog />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Blog