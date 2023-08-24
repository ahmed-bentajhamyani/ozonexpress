import { useEffect, useRef, useState } from 'react'

function Dropdown({ dropdown }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={dropdownRef} className={`relative flex flex-col items-center ${dropdown?.style}`}>
            <button onClick={() => setIsOpen((prev) => !prev)}>
                {dropdown?.button}
            </button>
            {isOpen &&
                <ul className={`absolute top-9 p-2 rounded-lg ${dropdown?.ulStyle}`}>
                    {dropdown?.lis.map((li, index) => (
                        <li onClick={() => setIsOpen(false)} key={index}>
                            {li}
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default Dropdown