import { useEffect, useRef, useState } from 'react'

function Collapse({ faq }) {
  const collapseRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (collapseRef.current && !collapseRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={collapseRef} className={`collapse collapse-plus px-2 md:px-4 pb-6 bg-transparent drop-shadow-black dark:drop-shadow-yellow ${isOpen ? 'peer-checked' : ''}`}>
      <input type="checkbox" className='peer' checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
      <div className="collapse-title text-white bg-ozon-red peer-checked:text-black peer-checked:bg-ozon-gray rounded-full peer-checked:rounded-t-3xl peer-checked:rounded-b-none dark:peer-checked:text-white dark:peer-checked:bg-ozon-dark-gray">
        <p className='font-semibold text-xs md:text-base'>
          {faq.question}
        </p>
      </div>
      <div className="collapse-content peer-checked:bg-white rounded-b-3xl dark:text-white dark:peer-checked:bg-black">
        <p className='py-3'>
          {faq.reponse}
        </p>
      </div>
    </div>
  )
}

export default Collapse