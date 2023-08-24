import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AgenceService from 'services/AgenceService';
import TarifService from 'services/TarifService';
import HttpClient from 'services/client/HttpClient';
import Card from '../components/Card';
import PreloaderSpinner from 'components/PreloaderSpinner';

const initialFieldValues = {
  agenceDepId: '',
  agenceArrId: '',
  cout: 0
}

function CreateTarif() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [agences, setAgences] = useState([]);

  useEffect(() => {
    const fetchAgences = async () => {
      const agenceService = new AgenceService(HttpClient);

      try {
        const agences = await agenceService.getAgences();
        if (agences) {
          setAgences(agences);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchAgences()
  }, []);

  const [values, setValues] = useState(initialFieldValues)

  const HandleInputChange = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value
    });
  }

  const createTarif = async () => {
    let formData = new FormData();
    formData.append('agenceDepId', values.agenceDepId)
    formData.append('agenceArrId', values.agenceArrId)
    formData.append('cout', values.cout)

    const tarifService = new TarifService(HttpClient)
    try {
      const res = await tarifService.createTarif(formData)
      if (res.ok) {
        return navigate('/admin/tarifs')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const labels = [
    { type: "select", title: "agence de départ", defaultOption: 'Mon agence de départ', name: "agenceDepId", option: 'ville', onChange: HandleInputChange },
    { type: "select", title: "agence d'arrivée", defaultOption: "Mon agence d'arrivée", name: "agenceArrId", option: 'ville', onChange: HandleInputChange },
    { type: "number", title: "cout", name: "cout", value: values.cout, onChange: HandleInputChange },
  ]

  return (
    <>
      {isLoading ?
        <PreloaderSpinner />
        :
        <div className='flex flex-col items-end pt-3 px-5'>
          <div className='grid grid-cols-1 w-full'>
            <Card cardTitle={'Ajouter un Tarif'} labels={labels} items={agences} createItem={createTarif} />
          </div>
        </div>
      }
    </>
  )
}

export default CreateTarif