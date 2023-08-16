import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AgenceService from 'services/AgenceService';
import HttpClient from 'services/client/HttpClient';
import Button from '../components/Button';
import { BsPlus } from 'react-icons/bs';
import Card from '../components/Card';

function Agences() {
  const agenceService = new AgenceService(HttpClient)

  const [agences, setAgences] = useState([]);

  useEffect(() => {
    const fetchAgences = async () => {
      try {
        const agences = await agenceService.getAgences()
        setAgences(agences)
      } catch (error) {
        console.error(error)
      }
    }

    fetchAgences()
  }, []);

  const deleteAgence = async (id) => {
    try {
      const res = await agenceService.deleteAgence(id)
      if (res) {
        setAgences(agences => agences.filter(agence => agence.id !== id));
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
          text: 'Nouveau Agence'
        }} />
      </Link>
      <div className='grid grid-cols-1 w-full'>
        <Card cardTitle={'Agences'} items={agences} deleteItem={deleteAgence} />
      </div>
    </div>
  )
}

export default Agences