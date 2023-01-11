import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import HeroSearch from './HeroSearch'
import SearchingResultPage from './SearchingResultPage'

function Attraction() {
  const navigate = useNavigate()
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <div className=''>
        <button className='bg-lightblue text-light text-sm py-1 w-28 rounded-md flex space-x-1 items-center justify-center'
        onClick={() => navigate(-1)}>
          <span className=''><AiOutlineLeft /> </span>
          <span className=''>Go back</span>
        </button>
      </div>
      <HeroSearch />
      <SearchingResultPage />
    </div>
  )
}

export default Attraction