import React from 'react';
import Button from './Button';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SelectTag from 'components/SelectTag';

function renderInput(label, imageSrc, items, deleteImage, item) {
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ size: [] }],
            ["bold", "italic", "underline"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" }
            ],
            ["link", "image", "video"]
        ],
    };

    if (label?.type === "file") {
        return (
            <div className="">
                {imageSrc ?
                    <div className="relative">
                        <Button button={{
                            action: () => deleteImage(),
                            style: 'absolute top-0 right-0 p-3 focus:ring-0',
                            icon: <MdClose />,
                            iconStyle: 'text-4xl text-ozon-red'
                        }} />
                        <label htmlFor={label?.name} className="flex flex-col items-center justify-center w-full h-fit border-2 border-dashed rounded-lg mb-3 cursor-pointer hover:bg-ozon-gray focus:outline-none dark:hover:bg-ozon-dark-gray">
                            <img className="object-cover rounded-lg w-full h-fit" src={imageSrc} alt="" />
                            <input className="hidden" id={label?.name} type={label?.type} onChange={label?.onChange} />
                        </label >
                    </div>
                    :
                    <label htmlFor={label?.name} className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg mb-3 cursor-pointer hover:bg-ozon-gray focus:outline-none dark:hover:bg-ozon-dark-gray">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <span className='text-6xl text-gray-500 mr-4'><AiOutlineCloudUpload /></span>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (Max size: 100
                                MB)
                            </p>
                        </div>
                        <input className="hidden" id={label?.name} type={label?.type} onChange={label?.onChange} />
                    </label>
                }
            </div>
        )
    }
    else if (label?.type === "textarea") {
        return (
            <textarea className="appearance-none block w-full border rounded py-2 px-4 mb-3 focus:outline-none focus:border-ozon-red dark:bg-black dark:text-white dark:focus:border-ozon-yellow" id={label?.name} type={label?.type} defaultValue={item?.[label?.name]} placeholder={label?.placeholder} name={label?.name} onChange={label?.onChange} />
        )
    }
    else if (label?.type === "richTextEditor") {
        return (
            <ReactQuill
                theme="snow"
                value={label?.value}
                onChange={label?.onChange}
                className='w-full mb-3 dark:text-white'
                modules={modules}
            />
        )
    }
    else if (label?.type === "select") {
        return (
            <SelectTag
                items={items}
                item={item}
                option={label?.option}
                tag={{
                    name: label?.name,
                    style: 'block w-full border rounded py-2 px-4 mb-3 focus:outline-none focus:border-ozon-red dark:text-white dark:focus:border-ozon-yellow',
                    defaultOption: label?.defaultOption,
                    optionStyle: 'block w-full border rounded py-2 px-4 mb-3 focus:outline-none focus:border-ozon-red dark:focus:border-ozon-yellow',
                    onChange: label?.onChange
                }}
                key={label?.name}
            />
        )
    }
    else {
        return (
            <input className="appearance-none block w-full border rounded py-2 px-4 mb-3 focus:outline-none focus:border-ozon-red dark:bg-black dark:text-white dark:focus:border-ozon-yellow" id={label?.name} type={label?.type} placeholder={label?.placeholder} value={item?.[label?.name]} name={label?.[label?.name]} onChange={label?.onChange} />
        )
    }
}

function Form({ labels, imageSrc, items, createItem, deleteImage, item, editItem }) {
    return (
        <form className="w-full">
            {labels.map((label, index) => (
                <div className="flex justify-between" key={index}>
                    <label className="font-medium text-sm capitalize tracking-wide w-44 mb-2 dark:text-white">
                        {label?.name}
                    </label>

                    <div className="w-full mt-4 md:mt-0">
                        {renderInput(label, imageSrc, items, deleteImage, item)}
                        <p className="text-red-500 text-xs italic">{label?.instruction}</p>
                    </div >
                </div >
            ))}
            {item ?
                <Button button={{
                    action: () => editItem(),
                    style: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-200 mt-3',
                    text: 'Modifier'
                }} />
                :
                <Button button={{
                    action: () => createItem(),
                    style: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-200 mt-3',
                    text: 'Ajouter'
                }} />
            }
        </form >
    )
}

export default Form