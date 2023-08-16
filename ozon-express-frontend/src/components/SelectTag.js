import React from 'react'

function SelectTag({ tag, items, item, option }) {
    return (
        <select name={tag?.name} className={tag?.style} value={item.categorieId} onChange={tag?.onChange}>
            <option className={tag?.optionStyle}>{tag?.defaultOption}</option>
            {items?.map((item, index) => (
                <option value={item.id} className={tag?.optionStyle} key={index}>{item[option]}</option>
            ))}
        </select>
    )
}

export default SelectTag