import React, { useEffect, useState } from 'react'
import DeliveryTruck from 'assets/images/2.jpg'
import Button from 'components/Button'
import TarifService from 'services/TarifService';
import AgenceService from 'services/AgenceService';
import HttpClient from 'services/client/HttpClient';
import SelectTag from 'components/SelectTag';

const initialFieldValues = {
  agenceDepId: '',
  agenceArrId: '',
  cout: 0.0
}

function Tarifs() {

  const tarifService = new TarifService(HttpClient)
  const agenceService = new AgenceService(HttpClient)

  const [tarifs, setTarifs] = useState([]);

  const [agencesDep, setAgencesDep] = useState([]);
  const [agencesArr, setAgencesArr] = useState([]);

  const [values, setValues] = useState(initialFieldValues)

  useEffect(() => {
    fetchTarifs()
  }, []);

  const fetchTarifs = async () => {
    try {
      const tarifs = await tarifService.getTarifs();
      setTarifs(tarifs)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchAgences()
  }, [tarifs]);

  const fetchAgences = async () => {
    try {
      const agences = await agenceService.getAgences();

      const AgenceDepIds = tarifs.map((tarif) => tarif.agenceDepId);
      const AgenceArrIds = tarifs.map((tarif) => tarif.agenceArrId);
      // console.log(AgenceDepIds)

      const agencesDep = agences.filter(agence => AgenceDepIds.includes(agence.id))
      // console.log(agencesDep)
      setAgencesDep(agencesDep)

      setAgencesArr(agences.filter(agence => AgenceArrIds.includes(agence.id)))
      // console.log(agencesDep)
    } catch (error) {
      console.error(error)
    }
  }

  const HandleInputChange = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value
    });
  }

  useEffect(() => {
    if (values.agenceDepId && values.agenceArrId) {
      const tarif = tarifs.filter(function (tarif) {
        return tarif.agenceDepId == values.agenceDepId && tarif.agenceArrId == values.agenceArrId;
      });

      setValues({
        ...values,
        cout: tarif[0]?.cout ?? 0
      });
    }
  }, [values.agenceDepId, values.agenceArrId])

  return (
    <section id='tarifs' className='relative bg-ozon-red w-full h-fit lg:h-[600px] mt-20'>
      <div className="lg:container flex flex-col lg:flex-row justify-between lg:justify-end items-center m-auto pb-10 lg:py-10 xl:px-10">
        <div className='-mx-5 md:-mx-10 lg:mx-0 lg:absolute lg:top-0 lg:left-0 flex items-center justify-center lg:w-1/2'>
          <img src={DeliveryTruck} alt='' className='object-cover w-screen h-fit md:h-[600px]' />
        </div>

        {/* Mobile version */}
        <div className='lg:hidden container mx-auto px-5 md:px-10 mt-10'>
          <p className='font-bold text-ozon-yellow text-xl md:text-2xl'>Tarifs</p>
          <p className='font-extrabold text-white text-3xl md:text-4xl 2xl:text-5xl mt-1'>
            Découvrez nos tarifs<br className='hidden md:block' /> adaptés à vos besoins
          </p>
          <p className='mt-2 text-white text-sm md:text-base'>
            Découvrez nos tarifs compétitifs en estimant facilement les frais de livraison en fonction de votre itinéraire, de la ville de départ à la ville d'arrivée.
          </p>

          <div className="mt-10">
            <div className="flex justify-start items-center space-x-4 mb-8">
              <p className="mb-0"><span className='font-medium text-white'>Sélectionnez la ville de départ :</span><br />
                <SelectTag agences={agencesDep} tag={{
                  name: 'agenceDepId',
                  style: 'bg-transparent text-sm text-ozon-yellow border border-ozon-yellow cursor-pointer appearance-none pl-6 pr-16 py-3 mt-2 rounded-full focus:ring-4 focus:outline-none focus:ring-ozon-yellow/40',
                  defaultOption: '-- Sélectionnez une ville --',
                  optionStyle: 'text-black',
                  onChange: HandleInputChange
                }} key={1} />
              </p>
            </div>
            <div className="flex justify-start items-center space-x-4 mb-8">
              <p className="mb-0"><span className='font-medium text-white'>Sélectionnez la ville d'arrivée :</span><br />
                <SelectTag agences={agencesArr} tag={{
                  name: 'agenceArrId',
                  style: 'bg-transparent text-sm text-ozon-yellow border border-ozon-yellow cursor-pointer appearance-none pl-6 pr-16 py-3 mt-2 rounded-full focus:ring-4 focus:outline-none focus:ring-ozon-yellow/40',
                  defaultOption: '-- Sélectionnez une ville --',
                  optionStyle: 'text-black',
                  onChange: HandleInputChange
                }} key={1} />
              </p>
            </div>

            <div className="flex justify-start items-center space-x-4">
              <Button button={{
                style: 'px-10 py-2.5 mb-0 bg-ozon-yellow hover:bg-ozon-yellow-tone cursor-pointer rounded focus:ring-4 focus:outline-none focus:ring-ozon-yellow/40',
                text: '0,00 DHS',
                textStyle: 'font-bold text-sm'
              }} />
            </div>
          </div>
        </div>

        {/* Laptop version */}
        <div className='hidden lg:block mb-0 px-10 w-1/2'>
          <p className='font-bold text-ozon-yellow text-xl md:text-2xl'>Tarifs</p>
          <p className='font-extrabold text-white text-3xl md:text-4xl 2xl:text-5xl mt-1'>
            Découvrez nos tarifs<br className='hidden md:block' /> adaptés à vos besoins
          </p>
          <p className='mt-2 text-white text-sm md:text-base'>
            Découvrez nos tarifs compétitifs en estimant facilement les frais de livraison en fonction de votre itinéraire, de la ville de départ à la ville d'arrivée.
          </p>

          <div className="mt-10">

            <div className="flex justify-start items-center space-x-4 mb-8">
              <p className="mb-0"><span className='font-medium text-white'>Sélectionnez la ville de départ :</span><br />
                <SelectTag
                  agences={agencesDep}
                  tag={{
                    name: 'agenceDepId',
                    onChange: HandleInputChange,
                    style: 'bg-transparent text-sm text-ozon-yellow border border-ozon-yellow cursor-pointer appearance-none pl-6 pr-16 py-3 mt-2 rounded-full focus:ring-4 focus:outline-none focus:ring-ozon-yellow/40',
                    defaultOption: '-- Sélectionnez une ville --'
                  }}
                  key={1}
                />
              </p>
            </div>

            <div className="flex justify-start items-center space-x-4 mb-8">
              <p className="mb-0"><span className='font-medium text-white'>Sélectionnez la ville d'arrivée :</span><br />
                <SelectTag
                  agences={agencesArr}
                  tag={{
                    name: 'agenceArrId',
                    onChange: HandleInputChange,
                    style: 'bg-transparent text-sm text-ozon-yellow border border-ozon-yellow cursor-pointer appearance-none pl-6 pr-16 py-3 mt-2 rounded-full focus:ring-4 focus:outline-none focus:ring-ozon-yellow/40',
                    defaultOption: '-- Sélectionnez une ville --'
                  }}
                  key={1}
                />
              </p>
            </div>

            <div className="flex justify-start items-center space-x-4">
              <Button button={{
                style: 'px-10 py-2.5 mb-0 bg-ozon-yellow hover:bg-ozon-yellow-tone cursor-pointer rounded focus:ring-4 focus:outline-none focus:ring-ozon-yellow/40',
                text: <span>{values.cout} Dhs</span>,
                textStyle: 'font-bold text-sm'
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tarifs