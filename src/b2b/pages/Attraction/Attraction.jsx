import React from 'react'
import { Link } from 'react-router-dom'
import SearchCards from '../../components/Cards/SearchCards'
import SearchingResultPage from './SearchingResultPage'

function Attraction() {
  return (
    <div className=''>
      <div className="bg-white flex items-center justify-between gap-[10px] px-2 lg:px-6 shadow-sm border-t py-2">
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
      <div className='p-2 lg:p-6'>
        {/* <HeroSearch /> */}
        <SearchCards />
        <SearchingResultPage />
      </div>
    </div>
  )
}

export default Attraction