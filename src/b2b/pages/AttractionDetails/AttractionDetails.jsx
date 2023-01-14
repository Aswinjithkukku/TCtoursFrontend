import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import HeroSection from './HeroSection'
import ImageSection from './ImageSection'

function AttractionDetails() {
  const navigate = useNavigate()
  return (
    <div className=''>
      <div className="bg-white flex items-center justify-between gap-[10px] px-6 shadow-sm border-t py-2">
        <h1 className="font-[600] text-[15px] uppercase">
          Attraction
        </h1>
        <div className="text-sm text-grayColor">
          <Link to="/b2b" className="text-textColor">
            Dashboard{" "}
          </Link>
          <span>{">"} </span>
          <span className='text-textColor' onClick={() => navigate(-1)}>Attraction</span>
          <span>{">"} </span>
          <span>Details</span>
        </div>
      </div>
      <div className='p-6'>
        <div className="bg-white rounded shadow-sm mt-6">
          <ImageSection />
          <HeroSection />
        </div>
      </div>
    </div>
  )
}

export default AttractionDetails