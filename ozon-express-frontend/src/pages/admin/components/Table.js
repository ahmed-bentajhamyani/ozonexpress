import React from 'react'
import { Link } from 'react-router-dom'

function Table({ items, getItem, editItem, deleteItem }) {

    const filters = ["article", "imageFile", "imageName"];

    return (
        <div className='overflow-x-auto my-3'>
            <table className='text-sm text-left w-full dark:text-white'>
                <thead className='text-xs capitalize'>
                    <tr>
                        {Object.keys(items[0]).filter((key) => !filters.includes(key)).map((key, index) => (
                            <th scope='col' className='px-2 md:px-3 py-3 md:py-4' key={index}>
                                {key === 'imageSrc' ? 'image' : key}
                            </th>
                        ))}
                        <th scope='col' className='px-2 md:px-3 py-3 md:py-4'>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className=''>
                    {items.map((item, index) => (
                        <tr className='rounded-3xl hover:bg-ozon-gray dark:hover:bg-ozon-dark-gray' key={index}>
                            {Object.keys(items[0]).filter((key) => !filters.includes(key)).map((key, index2) => (
                                <td className='border-t border-ozon-gray dark:border-ozon-dark-gray px-2 md:px-3 py-3 md:py-4' key={index2}>
                                    {key === "imageSrc" ?
                                        <img src={item[key]} alt='' className='w-24 md:w-20' />
                                        :
                                        <p className='line-clamp-2 md:line-clamp-3'>{item[key]}</p>
                                    }
                                </td>
                            ))}

                            <td className='border-t border-ozon-gray dark:border-ozon-dark-gray px-2 md:px-3 py-3 md:py-4 space-x-2'>
                                <a onClick={() => getItem(item.id)} className='font-medium cursor-pointer select-none text-blue-600 dark:text-blue-500 hover:underline'>Details</a>
                                <Link to={`edit/${item.id}`} className='font-medium cursor-pointer select-none text-orange-600 dark:text-orange-500 hover:underline'>Edit</Link>
                                <a onClick={() => deleteItem(item.id)} className='font-medium cursor-pointer select-none text-rose-600 dark:text-rose-500 hover:underline'>Delete</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default Table
