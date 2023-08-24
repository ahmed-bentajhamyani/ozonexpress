import React, { useEffect, useState } from 'react';
import Unknwon from 'assets/icons/user.png';
import CommentaireService from 'services/CommentaireService';
import HttpClient from 'services/client/HttpClient';

function Testimonials({ setTestimonialsLoaded, isLoaded }) {

    const commentaireService = new CommentaireService(HttpClient)

    const [commentaires, setCommentaires] = useState([]);

    useEffect(() => {
        const fetchCommentaires = async () => {
            try {
                const commentaires = await commentaireService.getCommentaires()
                setCommentaires(commentaires)
            } catch (error) {
                console.error(error)
            }
        }

        fetchCommentaires()
    }, []);

    useEffect(() => {
        if (commentaires[0]) setTestimonialsLoaded(true);
    }, [commentaires]);

    const [currentSlide, setCurrentSlide] = useState(1);

    return (
        <>
            {isLoaded &&
                <>
                    {commentaires[0] && Object.keys(commentaires[0]).length > 0 ?
                        <section id='testimonials' className='container flex flex-col justify-center mx-auto py-20 px-5 md:px-10 xl:px-20'>
                            <div className='flex flex-col items-start'>
                                <p className='font-bold text-ozon-red text-xl md:text-2xl'>Témoignages</p>
                                <p className='font-extrabold text-3xl md:text-4xl 2xl:text-5xl mt-1 dark:text-white'>
                                    Ce que nos clients disent de nous
                                </p>
                                <p className='mt-2 text-sm md:text-base dark:text-white'>
                                    Découvrez les avis clients authentiques sur notre service logistique. Leurs témoignages reflètent notre engagement envers la qualité, la fiabilité et la satisfaction client. Rejoignez-nous pour une expérience logistique exceptionnelle.
                                </p>
                            </div>

                            <div className="flex flex-col justify-center items-center max-w-full xl:px-5 mt-14">
                                <ul className="flex items-center overflow-x-hidden gap-3 lg:gap-5 xl:gap-8 max-w-full snap-x snap-mandatory before:shrink-0 before:w-[70%] after:shrink-0 after:w-[70%] duration-300">
                                    {commentaires.map((commentaire, index) => (
                                        <li onClick={() => setCurrentSlide(index)} className={`flex shrink-0 flex-col justify-center items-center bg-ozon-gray rounded-3xl dark:bg-ozon-dark-gray ${currentSlide === index ? 'w-full lg:w-[35%] h-[350px] md:h-72 lg:h-[380px] snap-center' : 'hidden lg:block w-[29%] h-[330px] cursor-pointer'}`}
                                            key={index}>
                                            <div className="relative flex flex-col justify-cente p-4 h-full w-full overflow-hidden rounded-2xl transition-none">
                                                <img src={Unknwon} className={`self-center p-1 rounded-full ${currentSlide === index ? 'w-20 h-20' : 'w-16 h-16'}`} alt={`client ${index + 1}`} key={index} />
                                                <p className={`font-medium text-center italic px-3 md:px-16 lg:px-5 mt-3 dark:text-white ${currentSlide === index ? 'xl:text-lg' : 'text-sm xl:text-base'}`}>"{commentaire.comment}"</p>
                                                <p className={`font-semibold text-end mx-8 mt-3 dark:text-white ${currentSlide === index ? 'text-sm xl:text-base' : 'text-xs xl:text-sm'}`}>- Client {commentaire.clientId}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="left-0 right-0 text-center mt-10">
                                    {commentaires.map((_, index) => (
                                        <span key={index} className={`inline-block h-4 rounded-full mx-1 cursor-pointer duration-500 ${index === currentSlide ? 'bg-ozon-yellow w-9' : 'bg-ozon-yellow/50 w-4'}`} onClick={() => setCurrentSlide(index)}></span>
                                    ))}
                                </div>
                            </div>
                        </section>
                        :
                        null
                    }
                </>
            }
        </>
    )
}

export default Testimonials