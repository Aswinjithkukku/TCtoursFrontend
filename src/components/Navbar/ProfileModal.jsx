import React, { useRef } from 'react'
import { ImProfile } from 'react-icons/im'
import { BiLogOut } from 'react-icons/bi'
import { GiWallet } from 'react-icons/gi'
import { FaUserCog, FaUserShield } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/slices/usersSlice'
import { useNavigate } from 'react-router-dom'
import { useHandleClickOutside } from '../../hooks'

function ProfileModal({ profileView, setProfileView }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const dropdownWrapperRef = useRef()
  useHandleClickOutside(dropdownWrapperRef, () => setProfileView(false))

  // if (!profileView) return null
  return (
    <div className='absolute lg:top-14 right-0 z-20' ref={dropdownWrapperRef}>
      <div className='bg-semisoft border  w-[260px] rounded-md text-darktext '>
        <div className='flex space-x-3 items-center hover:bg-darktext px-5 py-3 cursor-pointer hover:text-text' onClick={() => {
          navigate('/profile')
          setProfileView(!profileView)
        }}>
          <span className='text-xl'><ImProfile /></span>
          <span className=''>Profile</span>
        </div>
        <div className='flex space-x-3 items-center hover:bg-darktext px-5 py-3 cursor-pointer hover:text-text' onClick={() => {
          navigate('/profile/settings')
          setProfileView(!profileView)
        }}>
          <span className='text-xl'><FaUserCog /></span>
          <span className=''>Profile Settings</span>
        </div>
        <div className='flex space-x-3 items-center hover:bg-darktext px-5 py-3 cursor-pointer hover:text-text' onClick={() => {
          navigate('/profile/password')
          setProfileView(!profileView)
        }}>
          <span className='text-xl'><FaUserShield /></span>
          <span className=''>Update Password</span>
        </div>
        <div className='flex space-x-3 items-center hover:bg-darktext px-5 py-3 cursor-pointer hover:text-text' onClick={() => {
          navigate('/profile')
          setProfileView(!profileView)
        }}>
          <span className='text-xl'><GiWallet /></span>
          <span className=''>Wallet</span>
        </div>
        <div className='flex space-x-3 items-center hover:bg-darktext px-5 py-3 cursor-pointer hover:text-text'
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