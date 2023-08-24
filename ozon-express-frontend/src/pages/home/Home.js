import Navbar from './components/Navbar'
import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import FAQs from './components/FAQs'
import Tarifs from './components/Tarifs'
import Agences from './components/Agences'
import OzonMarket from './components/OzonMarket'
import Blogs from './components/Blogs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import PreloaderSpinner from 'components/PreloaderSpinner'

function Home() {
    const [tarifsLoaded, setTarifsLoaded] = useState(false);
    const [faqsLoaded, setFaqsLoaded] = useState(false);
    const [agencesLoaded, setAgencesLoaded] = useState(false);
    const [ozonMarketLoaded, setOzonMarketLoaded] = useState(false);
    const [blogsLoaded, setBlogsLoaded] = useState(false);
    const [testimonialsLoaded, setTestimonialsLoaded] = useState(false);

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(
            tarifsLoaded &&
            faqsLoaded &&
            agencesLoaded &&
            ozonMarketLoaded &&
            blogsLoaded &&
            testimonialsLoaded
        );
    }, [tarifsLoaded,
        faqsLoaded,
        agencesLoaded,
        ozonMarketLoaded,
        blogsLoaded,
        testimonialsLoaded]);

    useEffect(() => {
        console.log(tarifsLoaded)
        console.log(faqsLoaded)
        console.log(agencesLoaded)
        console.log(ozonMarketLoaded)
        console.log(blogsLoaded)
        console.log(testimonialsLoaded)
        console.log(isLoaded)
        console.log("fin")
    }, [isLoaded]);

    return (
        <>
            {!isLoaded &&
                <div className="h-screen">
                    <PreloaderSpinner />
                </div>
            }
            <>
                {isLoaded && <Navbar />}
                <main>
                    {isLoaded && <Hero />}
                    {isLoaded && <Services />}
                    <Tarifs setTarifsLoaded={setTarifsLoaded} isLoaded={isLoaded} />
                    <FAQs setFaqsLoaded={setFaqsLoaded} isLoaded={isLoaded} />
                    <Agences setAgencesLoaded={setAgencesLoaded} isLoaded={isLoaded} />
                    <OzonMarket setOzonMarketLoaded={setOzonMarketLoaded} isLoaded={isLoaded} />
                    <Blogs setBlogsLoaded={setBlogsLoaded} isLoaded={isLoaded} />
                    <Testimonials setTestimonialsLoaded={setTestimonialsLoaded} isLoaded={isLoaded} />
                </main>
                {isLoaded && <Footer />}
            </>
        </>
    )
}

export default Home