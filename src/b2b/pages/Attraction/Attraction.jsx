import React from 'react'
import SearchCards from '../../components/Cards/SearchCards'
import SearchingResultPage from './SearchingResultPage'

function Attraction() {
  return (
    <div className=''>
      <div className='p-2 lg:p-6'>
        <SearchCards />
        <SearchingResultPage />
      </div>
    </div>
  )
}

export default Attraction