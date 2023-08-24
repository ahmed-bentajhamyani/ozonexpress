import { useAuth } from 'context/AuthContext';
import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import OzonLogo from 'assets/brand/ozonexpress_logo.png';
import AuthService from 'auth/AuthService';
import HttpClient from 'services/client/HttpClient';
import Button from 'components/Button';
import { BiErrorCircle } from 'react-icons/bi';

const initialFieldValues = {
    email: '',
    password: ''
}

function Login() {
    const [values, setValues] = useState(initialFieldValues);
    const navigate = useNavigate();
    const { setUser, setJwtToken } = useAuth();
    const [errMsg, setErrMsg] = useState('');
    const errRef = useRef();

    const HandleInputChange = (event) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        });
    }

    const login = async () => {
        let formData = new FormData();
        formData.append('email', values.email)
        formData.append('password', values.password)

        const authService = new AuthService(HttpClient)

        try {
            const response = await authService.login(formData)
            if (response) {
                const user = response?.user;
                const jwtToken = response?.jwtToken;
                setUser(user);
                setJwtToken(jwtToken);
                return navigate('/admin')
            }
        } catch (error) {
            setErrMsg(error?.message);
        }
    }

    const labels = [
        { type: "email", name: "email", placeholder: 'name@company.com', onChange: HandleInputChange },
        { type: "password", name: "password", placeholder: "••••••••", onChange: HandleInputChange },
    ]

    return (
        <section className="dark:bg-black">
            <div className="flex items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <div className="flex flex-col justify-center items-center bg-ozon-gray rounded-3xl dark:bg-ozon-dark-gray">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <Link to={"home"} className="flex justify-center cursor-pointer">
                            <img src={OzonLogo} className='h-11 lg:h-auto' alt="Logo" />
                        </Link>

                        <div ref={errRef} className={`alert bg-rose-600 ${!errMsg && 'hidden'}`}>
                            <p className='flex items-center space-x-1 text-white'>
                                <BiErrorCircle />
                                <span>{errMsg}</span>
                            </p>
                        </div>

                        <h1 className="font-bold text-base lg:text-lg xl:text-xl mt-4 dark:text-white">
                            Connectez-vous à votre compte
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            {labels.map((label, index) => (
                                <div className='flex justify-between items-center space-x-3' key={index}>
                                    <label htmlFor={label?.name} className="w-24 mb-2 font-medium capitalize dark:text-white">{label?.name}</label>
                                    <input type={label?.name} id={label?.name} className='text-ozon-red bg-transparent placeholder:text-ozon-red/60 text-xs sm:text-sm w-full rounded-full border border-ozon-red outline-none py-3 px-3' placeholder={label?.placeholder} name={label?.name} onChange={label?.onChange} required />
                                </div>
                            ))}

                            <p className="text-sm font-light -mt-8 cursor-pointer hover:underline dark:text-white">
                                Don’t have an account yet?
                            </p>

                            <Button button={{
                                action: login,
                                style: 'bg-ozon-red hover:bg-ozon-red-tone rounded-full text-xs sm:text-sm py-2.5 px-6 xl:px-10 my-1 mr-1 w-full focus:ring-4 focus:outline-none focus:ring-ozon-red-tint ',
                                text: 'Se connecter',
                                textStyle: 'font-semibold text-white'
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login