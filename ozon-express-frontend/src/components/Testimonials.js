import React, { useEffect, useState } from 'react'
import Unknwon from './../assets/unknown.png'
import ErrorPage from './partials/ErrorPage';

function Testimonials() {

    // const Testimonials = [
    //     {
    //         image: Unknwon,
    //         nom: "Client 01",
    //         testimonial: "Un service logistique exceptionnel ! OzoneExpress a livré mes colis à temps et en parfait état. Je suis impressionné par leur professionnalisme et leur fiabilité."
    //     },
    //     {
    //         image: Unknwon,
    //         nom: "Client 02",
    //         testimonial: "OzoneExpress a dépassé mes attentes en matière de service logistique. Le suivi en temps réel, la communication transparente et la livraison ponctuelle ont rendu mon expérience agréable et sans tracas."
    //     },
    //     {
    //         image: Unknwon,
    //         nom: "Client 03",
    //         testimonial: "Je suis ravi de choisir OzoneExpress pour mes besoins logistiques. Leur équipe dévouée a assuré une manipulation soignée de mes produits, et la livraison a été rapide et efficace. Je les recommande vivement !"
    //     }
    // ]

    const [currentSlide, setCurrentSlide] = useState(0);

    const [commentaires, setCommentaires] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("https://localhost:7094/api/Commentaire")
            .then(res => res.json())
            .then(result => {
                setCommentaires(result);
                console.log(commentaires)
            })
            .catch((error) => {
                console.error(error);
                setError(true);
            });
    }, []);

    if (error) {
        return <ErrorPage />;
    }

    // const nextSlide = () => {
    //     let newSlide =
    //         currentSlide === Testimonials.length - 1
    //             ? 0
    //             : currentSlide + 1;
    //     setCurrentSlide(newSlide);
    // };

    // const prevSlide = () => {
    //     let newSlide =
    //         currentSlide === 0
    //             ? Testimonials.length - 1
    //             : currentSlide - 1;
    //     setCurrentSlide(newSlide);
    // };

    return (
        <section id='testimonials' className='container flex flex-col justify-center mx-auto py-20 px-5 md:px-10 xl:px-20'>
            <div className='flex flex-col items-start'>
                <p className='font-extrabold text-4xl 2xl:text-5xl mt-1 dark:text-white'>
                    Ce que nos clients disent de nous
                </p>
                <p className='mt-2 dark:text-white'>
                    Découvrez les avis clients authentiques sur notre service logistique. Leurs témoignages reflètent notre engagement envers la qualité, la fiabilité et la satisfaction client. Rejoignez-nous pour une expérience logistique exceptionnelle.
                </p>
            </div>

            <div className="flex flex-col justify-center items-center mt-14">
                <div className="bg-white shadow rounded-lg w-full md:w-3/4 lg:w-2/3 relative">
                    {commentaires.map((testimonial, index) => (
                        <div className={`transition-all duration-500 ease-in mb-3 ${index === currentSlide ? "flex flex-col w-full h-auto relative -top-8" : "hidden"}`} key={index}>
                            <div className="self-center bg-white w-16 h-16 mt-3 shadow rounded-full">
                                <img src={Unknwon} className='w-16 h-16 p-1 rounded-full' alt={`image client ${index + 1}`} key={index} />
                            </div>
                            <p className='font-medium text-xl text-center text-gray-500 italic px-10 mt-4'>"{testimonial.comment}"</p>
                            <p className='text-slate-700 text-end mx-10 mt-4'>- {testimonial.clientId}</p>
                        </div>
                    ))}

                    <div className="absolute bottom-2 left-0 right-0 text-center">
                        {commentaires.map((_, index) => (
                            <span key={index} className={`inline-block w-2 h-2 rounded-full mx-1 cursor-pointer ${index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'}`} onClick={() => setCurrentSlide(index)}></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials