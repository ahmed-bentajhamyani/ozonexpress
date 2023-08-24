import PreloaderSpinner from 'components/PreloaderSpinner';
import Card from 'pages/admin/components/Card';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import UserService from 'services/UserService';
import HttpClient from 'services/client/HttpClient';

const initialFieldValues = {
  name: '',
  email: '',
  password: '',
}

function EditPersonnel() {
  const navigate = useNavigate();
  const { id } = useParams()

  const userService = new UserService(HttpClient);

  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await userService.getUser(id);
        setValues(user);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUser()
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

  const editUser = async () => {
    let formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('password', values.password);

    try {
      const res = await userService.updateUser(id, formData);
      if (res.ok) {
        return navigate('/admin/personnels');
      }
    } catch (error) {
      console.error(error);
    }
  }

  const labels = [
    { type: "text", name: "name", value: values.name, onChange: HandleInputChange },
    { type: "email", name: "email", value: values.email, onChange: HandleInputChange },
    { type: "password", name: "password", value: values.password, onChange: HandleInputChange },
  ]

  return (
    <>
      {isLoading ?
        <PreloaderSpinner />
        :
        <div className='flex flex-col items-end pt-3 px-5'>
          <div className='grid grid-cols-1 w-full'>
            <Card cardTitle={'Modifier un Personnel'} labels={labels} item={values} editItem={editUser} />
          </div>
        </div>
      }
    </>
  )
}

export default EditPersonnel