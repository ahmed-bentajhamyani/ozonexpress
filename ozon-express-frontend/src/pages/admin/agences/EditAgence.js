import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import AgenceService from 'services/AgenceService';
import HttpClient from 'services/client/HttpClient';
import Card from '../components/Card';
import PreloaderSpinner from 'components/PreloaderSpinner';

const initialFieldValues = {
  ville: '',
}

function EditAgence() {
  const navigate = useNavigate();
  const { id } = useParams();

  const agenceService = new AgenceService(HttpClient);

  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    const fetchAgence = async () => {
      try {
        const agence = await agenceService.getAgence(id);
        setValues(agence);
      } catch (error) {
        console.log(error);
      }
    }

    fetchAgence()
  }, []);

  useEffect(() => {
    if (values !== initialFieldValues) setIsLoading(false);
  }, [values]);

  const HandleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  const editAgence = async () => {
    let formData = new FormData();
    formData.append('ville', values.ville);

    try {
      const res = await agenceService.updateAgence(id, formData);
      console.log(res);
      if (res) {
        return navigate('/admin/agences');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const labels = [
    { type: "text", name: "ville", value: values.ville, onChange: HandleInputChange },
  ]

  return (
    <>
      {isLoading ?
        <PreloaderSpinner />
        :
        <div className='flex flex-col items-end pt-3 px-5'>
          <div className='grid grid-cols-1 w-full'>
            <Card cardTitle={'Modifier un Agence'} labels={labels} item={values} editItem={editAgence} />
          </div>
        </div>
      }
    </>
  )
}

export default EditAgence