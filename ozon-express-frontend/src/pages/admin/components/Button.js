import React from 'react'

function Button({ button }) {
    return (
        <button type="button" onClick={button.action} className={`flex justify-center items-center font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white duration-300 focus:duration-0 focus:ring-4 focus:outline-none ${button.style}`}>
            {button.icon && <span className={`text-xl ${button.iconStyle}`}>{button.icon}</span>}
            {button.text && <span className={`${button.textStyle}`}>{button.text}</span>}
        </button>
    )
}

export default Button