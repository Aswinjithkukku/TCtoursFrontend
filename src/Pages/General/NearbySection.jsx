import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function NearbySection() {
  const navigate = useNavigate()

  const { initialData } = useSelector(state => state.home)
  return (
    <div className='mx-5 py-10 lg:mx-auto lg:max-w-screen-xl'>
      <div className='text-3xl font-semibold text-dark mb-4'>Nearby destinations</div>
      <div className='md:grid md:grid-cols-4 gap-5'>
      {initialData?.destinations?.map((item,index) => (
      <div className='mt-2 relative cursor-pointer' key={index} onClick={() => navigate(`/search/${item?.name}`)}>
        <div className='overflow-hidden rounded-2xl'>
        <img className='hover:scale-110 object-cover rounded-2xl h-[14em] w-full  transition-all duration-500 cursor-pointer' src={process.env.REACT_APP_SERVER_URL +  item?.image} alt={item?.name} />
        </div>
        <div className='absolute bottom-2 left-4  text-light'>
          <div className='font-semibold capitalize'>{item?.name} </div>
        </div>
      </div>
      ))}
      </div>

      {/* <div className='border-2 rounded-lg mt-10 '>
        <div className='p-5 space-y-2'>
          <div className='text-lg font-medium'>Sign in to save time</div>
          <div className='text-sm text-text leading-relaxed'>Your TC.tours.com account lets you book using your saved details</div>
          <div className='text-blue-600 text-lg'>Sign in </div>
        </div>
      </div>  */}
    </div>
  )
}

export default NearbySection