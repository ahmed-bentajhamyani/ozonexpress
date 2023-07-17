import React from 'react'
import Marketer from './../assets/marketer.png'
import Carton from './../assets/carton.png'
import Sachet from './../assets/sachet.jpg'
import Etiquette from './../assets/etiquette.jpg'

function Market() {

    const articles = [
        {
            image: Carton,
            nom: "Emballage Cartons",
            description: "While most people enjoy casino gambling, sports betting"
        },
        {
            image: Sachet,
            nom: "Emballage Sachets",
            description: "While most people enjoy casino gambling, sports betting"
        },
        {
            image: Etiquette,
            nom: "Emballage étiquettes",
            description: "While most people enjoy casino gambling, sports betting"
        }
    ]

    return (
        <section id='market' className='container flex flex-col lg:flex-row justify-center items-center mx-auto py-20 px-5 md:px-10 xl:px-20'>
            <div className='flex flex-col items-start lg:w-1/2'>
                <p className='font-bold text-base lg:text-lg dark:text-white'>Optimisez votre logistique avec notre marketplace dédiée</p>
                <p className='font-extrabold text-4xl 2xl:text-5xl mt-1 dark:text-white'>
                    Ozon Market
                </p>
                <p className='my-2 dark:text-white'>
                    Découvrez notre marketplace dédiée aux e-commerçants, offrant une gamme complète de produits essentiels tels que des cartons de qualité, des sachets pratiques et des étiquettes personnalisées. Simplifiez votre logistique en accédant à tous les accessoires d'emballage nécessaires pour des expéditions efficaces et professionnelles.
                </p>

                <div className="mt-10">
                    {articles.map((article, index) => (
                        <div className="flex justify-start items-center space-x-10 border-t mb-8" key={index}>
                            <img src={article.image} alt='' className='max-h-16 w-20 mt-6' />
                            <div className="">
                                <p className='font-bold text-base lg:text-lg dark:text-white'>{article.nom}</p>
                                <p className='dark:text-white'>{article.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex items-center justify-center lg:w-1/2'>
                <img src={Marketer} alt='' className='max-h-[450px]' />
            </div>
        </section>
    )
}

export default Market