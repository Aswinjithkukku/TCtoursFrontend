import React, { useState } from 'react'
import AttractionCard from './AttractionCard'
import FlightCard from './FlightCard'
import HotelCard from './HotelCard'
import VisaCard from './VisaCard'
import CarCard from './CarCard'
import { IoIosCar } from 'react-icons/io'
import { MdAttractions } from 'react-icons/md'
import { GiCommercialAirplane } from 'react-icons/gi'
import { FaHotel,FaWpforms } from 'react-icons/fa'


function SearchCards() {
  const [view, setView] = useState({
    attraction: true,
    flight: false,
    hotel: false,
    visa: false,
    transfer: false
  })
  return (

    <>
      <div className=' w-full  '>
        <div className=' relative'>
          <div className='  md:w-4/12 bg-light rounded-t-md md:rounded-t-md overflow-x-auto shadow'>
            <div className=' flex md:grid md:grid-cols-2 space-x-1 px-1 py-3 md:py-1 items-center '>
              <button className={`flex justify-center text-sm md:text-base items-center px-2 md:px-3 py-2 rounded-t-md  hover:text-light hover:bg-blue duration-300 space-x-1 ${view.attraction ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={() => {
                setView((prev) => {
                  return { ...prev, attraction: true, hotel: false, visa: false, transfer: false, flight: false }
                })
              }}>
                <span className=''><MdAttractions /> </span>
                <span className=''>Attraction</span>
              </button>
              {/* <button className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-2 rounded-t-md  hover:text-light hover:bg-blue duration-300 space-x-1  ${view.flight ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={() => {
                setView((prev) => {
                  return { ...prev, attraction: false, hotel: false, visa: false, transfer: false, flight: true }
                })
              }}>
                <span className=''><GiCommercialAirplane /> </span>
                <span className=''>Flight</span>
              </button>
              <button className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-2 rounded-t-md  hover:text-light hover:bg-blue duration-300 space-x-1  ${view.hotel ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={() => {
                setView((prev) => {
                  return { ...prev, attraction: false, hotel: true, visa: false, transfer: false, flight: false }
                })
              }}>
                <span className=''><FaHotel /> </span>
                <span className=''>Hotel</span>
              </button> */}
              <button className={`flex justify-center text-sm md:text-base items-center px-6 md:px-3 py-2 rounded-t-md  hover:text-light hover:bg-blue duration-300 space-x-1  ${view.visa ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={() => {
                setView((prev) => {
                  return { ...prev, attraction: false, hotel: false, visa: true, transfer: false, flight: false }
                })
              }}>
                <span className=''><FaWpforms /> </span>
                <span className=''>Visa</span>
              </button>
              {/* <button className={`flex justify-center text-sm md:text-base items-center px-6 md:px-3 py-2 rounded-t-md  hover:text-light hover:bg-blue duration-300 space-x-1  ${view.transfer ? "bg-lightblue text-light" : "text-blue bg-trans"}`} onClick={() => {
                setView((prev) => {
                  return { ...prev, attraction: false, hotel: false, visa: false, transfer: true, flight: false }
                })
              }}>
                <span className=''><IoIosCar /> </span>
                <span className=''>Transfer</span>
              </button> */}
            </div>
          </div>

          <div className='flex items-center justify-center shadow-b-sm shadow-x-sm'>
            <div className='bg-light w-full  md:rounded-md relative '>
              <>
                {view.attraction && (
                  <AttractionCard />
                )}

                {view.flight && (
                  <FlightCard />
                )}
                {view.hotel && (
                  <HotelCard />
                )}
                {view.visa && (
                  <VisaCard />
                )}
                {view.transfer && (
                  <CarCard />
                )}
              </>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default SearchCards