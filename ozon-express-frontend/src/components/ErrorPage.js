import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';

function ErrorPage({ }) {

    const [showModal, setShowModal] = useState(true);

    return (
        <>
            {showModal ? (
                <>
                    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                            {/*content*/}
                            <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                                {/*header*/}
                                <div className='flex items-start justify-between border-b border-solid border-slate-200 rounded-t'>
                                    <h3 className='text-xl font-semibold p-4'>
                                        Error
                                    </h3>
                                    <button className='m-3 rounded-lg hover:bg-gray-100' onClick={() => setShowModal(false)}>
                                        <MdClose size={40} className='text-rose-600 dark:text-rose-500 p-2 space-x-2' />
                                    </button>
                                </div>
                                {/*body*/}
                                <div className='relative p-4 flex-auto'>
                                    <p className='my-4 text-slate-500 text-lg leading-relaxed'>
                                        Failed to fetch data. Please try again later.
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className='flex items-center justify-end border-t border-solid border-slate-200 rounded-b'>
                                    <button className='bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg select-none py-2.5 px-3 m-3' type='button' onClick={() => setShowModal(false)}>
                                        Ok
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                </>
            ) : null}
        </>
    )
}

export default ErrorPage