import React, { useEffect, useState } from 'react'
import A from './../assets/marketing01.png'
import B from './../assets/marketing02.png'
import C from './../assets/marketing03.png'
import ErrorPage from './partials/ErrorPage';

function Blogs() {

    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        // fetch("https://localhost:7094/api/Blog")
        //     .then(res => res.json())
        //     .then(result => {
        //         setBlogs(result);
        //         console.log(blogs)
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //         setError(true);
        //     });
    }, []);

    if (error) {
        return <ErrorPage />;
    }

    return (
        <section id='blogs' className='container flex flex-col justify-center mx-auto pt-20 px-5 md:px-10 xl:px-20'>
            <div className='flex flex-col items-start'>
                {/* <p className='font-bold text-base lg:text-lg dark:text-white'>Blog</p> */}
                <p className='font-extrabold text-4xl 2xl:text-5xl mt-1 dark:text-white'>
                    Découvrez les Dernières Tendances Logistiques sur Notre Blog
                </p>
                <p className='mt-2 dark:text-white'>
                    Explorez notre blog pour des informations, conseils et actualités clés de la logistique, afin d'optimiser vos opérations et rester à jour dans le domaine.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                <div className="flex flex-col mt-4">
                    <img src={A} alt="" className='rounded-t-xl' />
                    <p className='mt-2 dark:text-white'>
                        By <span className='font-bold hover:text-orange-400 cursor-pointer'>OzonExpress</span> | 03 Mai 2023
                    </p>
                    <p className='font-bold text-2xl mt-1 dark:text-white'>
                        Comment très bien gérer les taux de retours et assurer la confirmation ?
                    </p>
                </div>

                <div className="flex flex-col mt-4">
                    <img src={B} alt="" className='rounded-t-xl' />
                    <p className='mt-2 dark:text-white'>
                        By <span className='font-bold hover:text-orange-400 cursor-pointer'>OzonExpress</span> | 03 Mai 2023
                    </p>
                    <p className='font-bold text-2xl mt-1 dark:text-white'>
                        L'importance de l'intégration API du service de livraison dans la boutique en ligne !
                    </p>
                </div>

                <div className="flex flex-col mt-4">
                    <img src={C} alt="" className='rounded-t-xl' />
                    <p className='mt-2 dark:text-white'>
                        By <span className='font-bold hover:text-orange-400 cursor-pointer'>OzonExpress</span> | 03 Mai 2023
                    </p>
                    <p className='font-bold text-2xl mt-1 dark:text-white'>
                        Les opportunités des E-commerçants marocains dans le continent Africain
                    </p>
                </div>

                <div className="flex flex-col mt-4">
                    <img src={C} alt="" className='rounded-t-xl' />
                    <p className='mt-2 dark:text-white'>
                        By <span className='font-bold hover:text-orange-400 cursor-pointer'>OzonExpress</span> | 03 Mai 2023
                    </p>
                    <p className='font-bold text-2xl mt-1 dark:text-white'>
                        Comment très bien gérer les taux de retours et assurer la confirmation ?
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Blogs