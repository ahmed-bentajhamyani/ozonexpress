import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AgenceService from 'services/AgenceService';
import HttpClient from 'services/client/HttpClient';
import Card from '../components/Card';

const initialFieldValues = {
  ville: '',
}

function CreateAgence() {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialFieldValues)

  const HandleInputChange = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value
    });
  }

  const createAgence = async () => {
    let formData = new FormData();
    formData.append('ville', values.ville)

    const agenceService = new AgenceService(HttpClient)
    try {
      const res = await agenceService.createAgence(formData)
      if (res.ok) {
        return navigate('/admin/agences')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const labels = [
    { type: "text", name: "ville", value: values.ville, onChange: HandleInputChange },
  ]

  return (
    <div className='flex flex-col items-end pt-3 px-5'>
      <div className='grid grid-cols-1 w-full'>
        <Card cardTitle={'Ajouter un Agence'} labels={labels} createItem={createAgence} />
      </div>
    </div>
  )
}

export default CreateAgence