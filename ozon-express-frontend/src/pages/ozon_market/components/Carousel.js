import ArticleCard from 'components/ArticleCard';
import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Carousel({ title, articles }) {

  const [scrollFromLeft, setScrollFromLeft] = useState(0);
  const [scrollFromRight, setScrollFromRight] = useState(100000);

  const scrollLeft = () => {
    document.getElementById(title).scrollLeft -= 250;
  }
  const scrollRight = () => {
    document.getElementById(title).scrollLeft += 250;
  }

  useEffect(() => {
    const element = document.getElementById(title);

    if (element) {
      element.addEventListener('scroll', handleScroll);

      return () => {
        element.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleScroll = (event) => {
    setScrollFromLeft(event.target.scrollLeft);

    const element = document.getElementById(title);
    setScrollFromRight(element.scrollWidth - element.clientWidth - event.target.scrollLeft);
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <div className={`absolute -left-4 md:-left-6 ${articles.length <= 4 || scrollFromLeft === 0 ? 'hidden' : ''}`}>
          <button onClick={() => scrollLeft()} className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-white hover:bg-ozon-gray drop-shadow-black dark:bg-black dark:hover:bg-ozon-dark-gray">
            <span className='flex items-center justify-center text-3xl dark:text-white'><FiChevronLeft /></span>
          </button>
        </div>
        <div id={`${title}`} className="carousel flex items-center justify-start space-x-3 overflow-x-auto scroll-smooth scrollbar-hide">
          {articles.map((article) => (
            <div className="min-w-[250px] w-[250px]" key={article.id}>
              <ArticleCard article={article} button={true} />
            </div>
          ))}
        </div>
        <div className={`absolute -right-4 md:-right-6 ${articles.length <= 4 || scrollFromRight < 1 ? 'hidden' : ''}`}>
          <button onClick={() => scrollRight()} className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-white hover:bg-ozon-gray drop-shadow-black dark:bg-black dark:hover:bg-ozon-dark-gray">
            <span className='flex items-center justify-center text-3xl dark:text-white'><FiChevronRight /></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel