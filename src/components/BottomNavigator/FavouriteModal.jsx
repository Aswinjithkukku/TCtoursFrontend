import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector } from 'react-redux'

function FavouriteModal({view, setView}) {

  const { favourites } = useSelector(state => state.excursion)

  return (
    <div className={`fixed ${view.favourite ? "bottom-0" : "-bottom-full "} bg-light rounded-t-3xl max-h-[85vh] overflow-y-auto w-full z-30 transition-all duration-500`}>
                <div className='py-10 p-7 space-y-5'>
                    <div className=' flex justify-between items-center border-b border-dashed pb-3'>
                        <div className=''>
                            <h2 className='text-3xl text-darktext font-bold'>Favourite</h2>
                        </div>
                        <div className=' text-3xl' onClick={() => setView(!view)}><AiOutlineClose /></div>
                    </div>
                    
                        <>
                        {favourites?.map((item,index) => (
                          <div className='flex justify-between border-b border-dashed pb-3'key={index}>
                            <div className=''>{item?.name}</div>
                            <div className=''>{item?.price}</div>
                          </div>
                            ))}
                        </>
                </div>
        </div>
  )
}

export default FavouriteModal