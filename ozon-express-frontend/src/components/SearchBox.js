function SearchBox({ searchBoxOpen, isLoading, searchResult, skeleton, cards }) {
  return (
    <>
      {searchBoxOpen ?
        <div className='absolute top-12 w-full bg-white rounded-xl p-2 dark:bg-black'>
          {isLoading ?
            <>
              {skeleton}
            </>
            :
            <>
              {searchResult?.length > 0 ?
                <div className={`h-[450px] 2xl:h-[550px] overflow-y-auto overflow-x-hidden p-2 ${searchResult?.length <= 4 && 'h-fit'}`}>
                  {cards}
                </div>
                :
                <p className='m-2 dark:text-white'>Aucun élément trouvé</p>
              }
            </>
          }
        </div>
        :
        null
      }
    </>
  )
}

export default SearchBox