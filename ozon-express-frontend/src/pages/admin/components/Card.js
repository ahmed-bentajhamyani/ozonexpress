import Table from './Table'
import Form from './Form';

function Card({ cardTitle, items, getItem, labels, imageSrc, deleteImage, createItem, item, editItem, deleteItem, errMsg }) {
    return (
        <div className='flex flex-col bg-white rounded-2xl shadow-sm my-5 dark:bg-black'>
            {/*header*/}
            {cardTitle &&
                <div className='flex items-center justify-between border-b border-ozon-gray dark:text-white dark:border-ozon-dark-gray' id='cardHeader'>
                    <p className='font-medium px-6 py-4'>
                        {cardTitle}
                    </p>
                </div>
            }

            {/*body*/}
            <div className='px-6 py-4'>
                {errMsg ?
                    <div className='flex flex-col items-center justify-center h-full py-40 md:p-40'>
                        <p className='font-semibold text-xl dark:text-white'>{errMsg?.message}</p>
                    </div>
                    :
                    <>
                        {labels ?
                            <Form labels={labels} imageSrc={imageSrc} items={items} deleteImage={deleteImage} createItem={createItem} item={item} editItem={editItem} />
                            :
                            <>
                                {items[0] && Object.keys(items[0]).length > 0 ?
                                    <div className="grid grid-cols-1">
                                        {items && (
                                            <Table cardTitle={cardTitle} items={items} deleteItem={deleteItem} />
                                        )}
                                    </div>
                                    :
                                    <div className='flex flex-col items-center justify-center h-full py-40 md:p-40'>
                                        <p className='font-semibold text-xl dark:text-white'>No comments yet.</p>
                                    </div>
                                }
                            </>
                        }
                    </>
                }
            </div>
        </div>
    )
}

export default Card
