import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import HeroSection from '../../../Pages/AttractionDetails/HeroSection'
import ImageSection from '../../../Pages/AttractionDetails/ImageSection'

function AttractionDetails() {
  const navigate = useNavigate()
  return (
    <div className=''>
      {/* <div className=' max-w-screen-2xl mx-auto'>
        <button className='bg-lightblue text-light text-sm py-1 w-28 rounded-md flex space-x-1 items-center justify-center'
          onClick={() => navigate(-1)}>
          <span className=''><AiOutlineLeft /> </span>
          <span className=''>Go back</span>
        </button>
      </div> */}
      <ImageSection />
      <HeroSection />
    </div>
  )
}

export default AttractionDetails