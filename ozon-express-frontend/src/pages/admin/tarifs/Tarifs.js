import React, { useEffect, useState } from 'react'
import TarifService from 'services/TarifService';
import AgenceService from 'services/AgenceService';
import HttpClient from 'services/client/HttpClient';
import Button from '../components/Button';
import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

function Tarifs() {
  const tarifService = new TarifService(HttpClient)

  const [tarifs, setTarifs] = useState([]);

  useEffect(() => {
    const fetchTarifs = async () => {
      try {
        const tarifs = await tarifService.getTarifs();
        let newTarifs = []

        await Promise.all(tarifs.map(async (tarif) => {
          const agenceDep = await getAgenceById(tarif.agenceDepId);
          const agenceArr = await getAgenceById(tarif.agenceArrId);

          newTarifs.push({
            id: tarif.id,
            "agence de départ": agenceDep,
            "agence d'arrivée": agenceArr,
            cout: tarif.cout
          });
        }));
        
        setTarifs(newTarifs)
      } catch (error) {
        console.error(error)
      }
    }

    fetchTarifs()
  }, []);

  async function getAgenceById(id) {
    const agenceService = new AgenceService(HttpClient)
    try {
      const res = await agenceService.getAgence(id)
      return res.ville
    } catch (error) {
      console.error(error)
    }
  }

  const deleteTarif = async (id) => {
    try {
      const res = await tarifService.deleteTarif(id)
      if (res) {
        setTarifs(tarifs => tarifs.filter(tarif => tarif.id !== id));
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='flex flex-col items-end pt-3 px-5'>
      <Link to={'create'}>
        <Button button={{
          style: 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-200',
          icon: <BsPlus />,
          text: 'Nouveau Tarif'
        }} />
      </Link>
      <div className='grid grid-cols-1 w-full'>
        <Card cardTitle={'Tarifs'} items={tarifs} deleteItem={deleteTarif} />
      </div>
    </div>
  )
}

export default Tarifs