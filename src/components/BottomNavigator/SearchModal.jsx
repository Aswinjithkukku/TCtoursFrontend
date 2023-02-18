import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaHotel, FaWpforms } from 'react-icons/fa'
import { GiCommercialAirplane } from 'react-icons/gi'
import { IoIosCar } from 'react-icons/io'
import { MdAttractions } from 'react-icons/md'
import { AttractionCard, CarCard, FlightCard, HotelCard, VisaCard } from '../Cards'


function SearchModal({setView, view}) {
  const [viewCard, setViewCard] = useState({
    attraction: true,
    flight: false,
    hotel: false,
    visa: false,
    transfer: false
  })
  return (
    <div className={`fixed ${view.search ? "bottom-0" : "-bottom-full "} bg-light rounded-t-3xl max-h-[85vh] overflow-y-auto w-full z-30 transition-all duration-500`}>
      <div className='py-10 p-7 space-y-5'>
        <div className=' flex justify-between items-center border-b border-dashed pb-3'>
          <div className=''>
            <h2 className='text-3xl text-darktext font-bold'>Search</h2>
          </div>
          <div className=' text-3xl' onClick={() => setView({
            favourite: false,
            search: false,
            profile: false,
            help: false
          })}><AiOutlineClose /></div>
        </div>

        <>
          <div className=' md:absolute z-10 bottom-36 w-full md:flex justify-center '>
            <div className='md:w-9/12 relative'>
              <div className='md:ml-14  md:w-8/12 bg-light rounded-t-2xl md:rounded-t-[1em] overflow-x-auto scrollbar-hide'>
                <div className=' flex md:grid md:grid-cols-5 space-x-1 px-1 md:px-10 py-3 md:py-1 items-center '>
                  <button className={`flex justify-center text-sm md:text-base items-center px-2 md:px-3 py-2 rounded-t-xl  hover:text-light hover:bg-blueColor duration-300 space-x-1 ${view.attraction ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={() => {
                    setViewCard((prev) => {
                      return { ...prev, attraction: true, hotel: false, visa: false, transfer: false, flight: false }
                    })
                  }}>
                    <span className=''><MdAttractions /> </span>
                    <span className=''>Attraction</span>
                  </button>
                  <button className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-2 rounded-t-xl  hover:text-light hover:bg-blueColor duration-300 space-x-1  ${view.flight ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={() => {
                    setViewCard((prev) => {
                      return { ...prev, attraction: false, hotel: false, visa: false, transfer: false, flight: true }
                    })
                  }}>
                    <span className=''><GiCommercialAirplane /> </span>
                    <span className=''>Flight</span>
                  </button>
                  <button className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-2 rounded-t-xl  hover:text-light hover:bg-blueColor duration-300 space-x-1  ${view.hotel ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={() => {
                    setViewCard((prev) => {
                      return { ...prev, attraction: false, hotel: true, visa: false, transfer: false, flight: false }
                    })
                  }}>
                    <span className=''><FaHotel /> </span>
                    <span className=''>Hotel</span>
                  </button>
                  <button className={`flex justify-center text-sm md:text-base items-center px-6 md:px-3 py-2 rounded-t-xl  hover:text-light hover:bg-blueColor duration-300 space-x-1  ${view.visa ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={() => {
                    setViewCard((prev) => {
                      return { ...prev, attraction: false, hotel: false, visa: true, transfer: false, flight: false }
                    })
                  }}>
                    <span className=''><FaWpforms /> </span>
                    <span className=''>Visa</span>
                  </button>
                  <button className={`flex justify-center text-sm md:text-base items-center px-6 md:px-3 py-2 rounded-t-xl  hover:text-light hover:bg-blueColor duration-300 space-x-1  ${view.transfer ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={() => {
                    setViewCard((prev) => {
                      return { ...prev, attraction: false, hotel: false, visa: false, transfer: true, flight: false }
                    })
                  }}>
                    <span className=''><IoIosCar /> </span>
                    <span className=''>Transfer</span>
                  </button>
                </div>
              </div>

              <div className='flex items-center justify-center'>
                <div className='bg-light w-full  md:rounded-[2em] relative '>
                  <>
                    {viewCard.attraction && (
                      <AttractionCard setView={setView} view={view} />
                    )}

                    {viewCard.flight && (
                      <FlightCard />
                    )}
                    {viewCard.hotel && (
                      <HotelCard />
                    )}
                    {viewCard.visa && (
                      <VisaCard />
                    )}
                    {viewCard.transfer && (
                      <CarCard />
                    )}
                  </>
                </div>
              </div>

            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default SearchModal