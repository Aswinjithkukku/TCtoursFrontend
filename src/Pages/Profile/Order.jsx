import React from 'react'
import OrderListSection from './OrderListSection'
import ProfileSidebar from './ProfileSidebar'


function Order() {
  return (
    <div className='lg:max-w-screen-xl lg:mx-auto py-10 '>
    <div className='lg:flex lg:gap-5 space-y-2 lg:space-y-0'>
      <div className='lg:w-3/12  '>
        <ProfileSidebar />
      </div>
      <div className='lg:w-9/12'>
        <div className=''>
        <div className='bg-white rounded-xl shadow-sm p-4 grid grid-cols-5'>
        <div className=''>
            <h1 className='font-[600] text-gray-700 text-lg'>Attraction</h1>
        </div>
        <div className=''>
            <h1 className=' text-gray-700 text-lg'>Visa</h1>
        </div>
        <div className=''>
            <h1 className=' text-gray-700 text-lg'>Hotel</h1>
        </div>
        <div className=''>
            <h1 className=' text-gray-700 text-lg'>Flight</h1>
        </div>
        <div className=''>
            <h1 className=' text-gray-700 text-lg'>Transfer</h1>
        </div>
    </div>
          <OrderListSection />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Order