import Navbar from 'components/Navbar'
import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import FAQs from './components/FAQs'
import Tarifs from './components/Tarifs'
import Agences from './components/Agences'
import OzonMarket from './components/OzonMarket'
import Blogs from './components/Blogs'
import Testimonials from './components/Testimonials'
import Footer from 'components/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />

                <Services />
                <Tarifs />
                <FAQs />
                <Agences />
                <OzonMarket />
                <Blogs />
                <Testimonials />
            </main>
            <Footer />
        </>
    )
}

export default Home