import PreloaderSpinner from 'components/PreloaderSpinner';
import Button from 'pages/admin/components/Button';
import Card from 'pages/admin/components/Card';
import { useEffect, useState } from 'react'
import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import UserService from 'services/UserService';
import HttpClient from 'services/client/HttpClient';

function Personnels() {
    const userService = new UserService(HttpClient)

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await userService.getUsers()
                if (users) setUsers(users)
            } catch (error) {
                setErrMsg(error)
            }
        }

        fetchUsers()
    }, []);

    useEffect(() => {
        if (users[0]) setIsLoading(false);
    }, [users]);

    const deleteUser = async (id) => {
        try {
            const res = await userService.deleteUser(id)
            if (res) {
                setUsers(users => users.filter(user => user.id !== id));
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {isLoading ?
                <PreloaderSpinner />
                :
                <div className='flex flex-col items-end pt-3 px-5'>
                    <Link to={'create'}>
                        <Button button={{
                            style: 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-200',
                            icon: <BsPlus />,
                            text: 'Nouveau Personnel'
                        }} />
                    </Link>
                    <div className='grid grid-cols-1 w-full'>
                        <Card cardTitle={'Personnels'} items={users} deleteItem={deleteUser} errMsg={errMsg} />
                    </div>
                </div>
            }
        </>
    )
}

export default Personnels