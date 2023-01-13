import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import HeroSearch from './HeroSearch'
import SearchingResultPage from './SearchingResultPage'

function Attraction() {
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
          <span>Attraction</span>
        </div>
      </div>
      <div className='p-6'>
        <HeroSearch />
        <SearchingResultPage />
      </div>
    </div>
  )
}

export default Attraction