import React, { useEffect, useState } from 'react'
import { PanierProvider } from 'context/PanierContext';
import Articles from './components/Articles';
import Navbar from './components/Navbar';
import Hero from './Hero';
import Footer from 'components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Article from './Article';

function Market() {
    return (
        <PanierProvider>
            <Navbar />
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="article/:id" element={<Article />} />
            </Routes>
            <Footer />
        </PanierProvider>
    )
}

export default Market