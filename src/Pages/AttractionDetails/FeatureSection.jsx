import React from 'react'
import { AiFillThunderbolt, AiOutlineMobile } from 'react-icons/ai'
import { BsCalendar2X } from 'react-icons/bs'
import { FaHotel } from 'react-icons/fa'
import { IoCalendarNumberSharp } from 'react-icons/io5'
import { GiClockwork, GiSandsOfTime, GiSurferVan } from 'react-icons/gi'

function FeatureSection() {
  return (
    <div className=' md:border border-lightblue bg-light lg:py-10 px-3 md:rounded-2xl md:my-4 lg:flex text-center justify-between w-full grid grid-cols-2 gap-5'>
    <div className='text-center bg-soft lg:bg-light py-5 lg:py-0 rounded-lg lg:rounded-none'>
        <span className='text-2xl lg:text-4xl text-lightblue flex justify-center'><IoCalendarNumberSharp /> </span>
        <span className='text-xs text-text'>Availibility: Daily </span>
    </div>
    <div className='text-center bg-soft lg:bg-light py-5 lg:py-0 rounded-lg lg:rounded-none'>
        <span className='text-2xl lg:text-4xl text-lightblue flex justify-center'><GiSandsOfTime /> </span>
        <span className='text-xs text-text'>Duration: 1 Hour (approx) </span>
    </div>
    <div className='text-center bg-soft lg:bg-light py-5 lg:py-0 rounded-lg lg:rounded-none'>
        <span className='text-2xl lg:text-4xl text-lightblue flex justify-center'><GiClockwork /> </span>
        <span className='text-xs text-text'>Time slot: 8:00 - 11:30</span>
    </div>
    <div className='text-center bg-soft lg:bg-light py-5 lg:py-0 rounded-lg lg:rounded-none'>
        <span className='text-2xl lg:text-4xl text-lightblue flex justify-center'><GiSurferVan /> </span>
        <span className='text-xs text-text'>Pick Up & Drive</span>
    </div>
    <div className='text-center bg-soft lg:bg-light py-5 lg:py-0 rounded-lg lg:rounded-none'>
        <span className='text-2xl lg:text-4xl text-lightblue flex justify-center'><AiFillThunderbolt /> </span>
        <span className='text-xs text-text'>Instant Confirmation</span>
    </div>
    <div className='text-center bg-soft lg:bg-light py-5 lg:py-0 rounded-lg lg:rounded-none'>
        <span className='text-2xl lg:text-4xl text-lightblue flex justify-center'><BsCalendar2X /> </span>
        <span className='text-xs text-text'>Free cancellation upto 24 hours</span>
    </div>
</div>
  )
}

export default FeatureSection