import React from 'react'
import { FaLuggageCart } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/slices/usersSlice'

function ProfileModal({ profileView, setProfileView }) {
  const dispatch = useDispatch()

  if (!profileView) return null
  return (
    <div className='absolute top-14 -left-40 z-20'>
      <div className='bg-semisoft border  w-[260px] rounded-md text-darktext'>
        <div className='flex space-x-3 items-center hover:bg-bluetrans px-5 py-3 cursor-pointer '>
          <span className='text-xl'><FaLuggageCart /></span>
          <span className=''>Orders</span>
        </div>
        <div className='flex space-x-3 items-center hover:bg-bluetrans px-5 py-3 cursor-pointer '
          onClick={() => {
            dispatch(logoutUser())
            setProfileView(!profileView)
          }}>
          <span className='text-xl'><BiLogOut /></span>
          <span className=''>Logout</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal