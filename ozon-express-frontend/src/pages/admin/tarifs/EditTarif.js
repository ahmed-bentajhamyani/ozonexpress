import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import TarifService from 'services/TarifService';
import HttpClient from 'services/client/HttpClient';
import Card from '../components/Card';
import AgenceService from 'services/AgenceService';

const initialFieldValues = {
  agenceDepId: '',
  agenceArrId: '',
  cout: 0
}

function EditTarif() {
  const navigate = useNavigate();
  const { id } = useParams()

  const tarifService = new TarifService(HttpClient)

  const [agences, setAgences] = useState([])

  const [values, setValues] = useState(initialFieldValues)

  useEffect(() => {
    fetchAgences()

    fetchTarif()
  }, []);

  const fetchAgences = async () => {
    const agenceService = new AgenceService(HttpClient)

    try {
      const agences = await agenceService.getAgences()
      setAgences(agences)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchTarif = async () => {
    try {
      const tarif = await tarifService.getTarif(id)
      setValues(tarif)
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

  const editTarif = async () => {
    let formData = new FormData();
    formData.append('agenceDepId', values.agenceDepId)
    formData.append('agenceArrId', values.agenceArrId)
    formData.append('cout', values.cout)

    try {
      const res = await tarifService.updateTarif(id, formData)
      console.log(res)
      if (res) {
        return navigate('/admin/tarifs')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const labels = [
    { type: "select", title: "agence Depart", defaultOption: 'Mon agence de départ', name: "agenceDepId", option: 'ville', value: values.agenceDepId, onChange: HandleInputChange },
    { type: "select", title: "agence Arrivée", defaultOption: "Mon agence d'arrivée", name: "agenceArrId", option: 'ville', value: values.agenceArrId, onChange: HandleInputChange },
    { type: "number", title: "cout", name: "cout", value: values.cout, onChange: HandleInputChange },
  ]

  return (
    <div className='flex flex-col items-end pt-3 px-5'>
      <div className='grid grid-cols-1 w-full'>
        <Card cardTitle={'Modifier un Tarif'} labels={labels} items={agences} item={values} editItem={editTarif} />
      </div>
    </div>
  )
}

export default EditTarif