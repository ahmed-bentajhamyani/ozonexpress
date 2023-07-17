import React, { useEffect, useState } from 'react'
import MoroccoMap from './../assets/2.png'
import Tick from './../assets/tick.png'
import { Link } from 'react-scroll'

function Tarifs() {

  // const [villes, setVilles] = useState([]);
  // const [tarifs, setTarifs] = useState([]);

  const villes = [
    "Rabat",
    "Casablanca",
    "Berchid",
    "Tanger",
    "Fes",
    "Meknes",
    "Ouajda",
  ]

  const tarifs = [
    {
      villeDep: "Casablanca",
      villeArr: "Rabat",
      cout: 30
    },
    {
      villeDep: "Rabat",
      villeArr: "Tanger",
      cout: 30
    },
    {
      villeDep: "Casablanca",
      villeArr: "Tanger",
      cout: 30
    }
  ]

  useEffect(() => {
    // fetch("https://localhost:7094/api/Ville")
    //     .then(res => res.json())
    //     .then(result => {
    //         setVilles(result);
    //     })

    // fetch("https://localhost:7094/api/Tarif")
    //     .then(res => res.json())
    //     .then(result => {
    //         setTarifs(result);
    //     })
  }, []);

  return (
    <section id='tarifs' className='container flex flex-col lg:flex-row justify-center items-center mx-auto py-20 px-5 md:px-10 xl:px-20'>
      <div className='flex items-center justify-center lg:w-1/2'>
        <img src={MoroccoMap} alt='' className='max-h-[300px]' />
      </div>

      <div className='flex flex-col items-start lg:w-1/2'>
        <p className='font-bold text-base lg:text-lg dark:text-white'>Tarifs</p>
        <p className='font-extrabold text-4xl 2xl:text-5xl mt-1 dark:text-white'>
          Découvrez nos tarifs<br className='hidden md:block' /> adaptés à vos besoins
        </p>
        <p className='mt-2 dark:text-white'>
          Découvrez nos tarifs compétitifs en estimant facilement les frais de livraison en fonction de votre itinéraire, de la ville de départ à la ville d'arrivée.
        </p>

        <div className="mt-10">
          <div className="flex justify-start items-center space-x-4 mb-8">
            <img className="me-2" src={Tick} width="35" alt="tick" />
            <p className="mb-0"><span className='font-medium'>Sélectionnez la ville de départ :</span><br />
              <select name="ville-depart" id="ville-depart" className="border cursor-pointer appearance-none px-4 py-3 rounded focus:ring-4 focus:outline-none focus:ring-orange-200">
                <option value="">-- Sélectionnez une ville --</option>
                {villes.map((ville, index) => (
                  <option value={ville} key={index}>{ville}</option>
                ))}
              </select>
            </p>
          </div>
          <div className="flex justify-start items-center space-x-4 mb-8">
            <img className="me-2" src={Tick} width="35" alt="tick" />
            <p className="mb-0"><span className='font-medium'>Sélectionnez la ville d'arrivée :</span><br />
              <select name="ville-arrive" id="ville-arrive" className="border cursor-pointer appearance-none px-4 py-3 rounded focus:ring-4 focus:outline-none focus:ring-orange-200">
                <option value="">-- Sélectionnez une ville --</option>
                {villes.map((ville, index) => (
                  <option value={ville} key={index}>{ville}</option>
                ))}
              </select>
            </p>
          </div>

          <div className="flex justify-start items-center space-x-4">
            <img className="me-2" src={Tick} width="35" alt="tick" />
            <p className="mb-0">
              <Link smooth to='#' className="text-white px-4 py-3 bg-orange-400 hover:bg-orange-300 cursor-pointer rounded active:ring-4 active:outline-none active:ring-orange-200">0,00 DHS</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tarifs