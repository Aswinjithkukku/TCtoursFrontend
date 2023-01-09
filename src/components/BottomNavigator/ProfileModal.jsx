import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { ImProfile } from 'react-icons/im'
import { BiLogOut } from 'react-icons/bi'
import { GiWallet } from 'react-icons/gi'
import { FaUserCog, FaUserShield } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../redux/slices/usersSlice'
import { useNavigate } from 'react-router-dom'
import Auth from './Auth'

function ProfileModal({ view, setView}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { isLoggedIn } = useSelector(state => state.users)
  return (
    <div className={`fixed ${view.profile ? "bottom-0" : "-bottom-full "} bg-light rounded-t-3xl max-h-[85vh] overflow-y-auto w-full z-30 transition-all duration-500`}>
      <div className='py-10 p-7 space-y-5'>
        <div className=' flex justify-between items-center border-b border-dashed pb-3'>
          <div className=''>
            <h2 className='text-3xl text-darktext font-bold'>Profile</h2>
          </div>
          <div className=' text-3xl' onClick={() => setView(!view)}><AiOutlineClose /></div>
        </div>
        {isLoggedIn ? (      
            <>
          <div className=''>
            <div className=' w-full rounded-md text-darktext '>
              <div className='flex space-x-3 border-b border-dashed items-center  py-3 cursor-pointer hover:bg-soft' onClick={() => {
                navigate('/profile')
                setView(!view)
              }}>
                <span className='text-xl'><ImProfile /></span>
                <span className=''>Profile</span>
              </div>
              <div className='flex space-x-3 border-b border-dashed items-center  py-3 cursor-pointer hover:bg-soft' onClick={() => {
                navigate('/profile/settings')
                setView(!view)
              }}>
                <span className='text-xl'><FaUserCog /></span>
                <span className=''>Profile Settings</span>
              </div>
              <div className='flex space-x-3 border-b border-dashed items-center  py-3 cursor-pointer hover:bg-soft' onClick={() => {
                navigate('/profile/password')
                setView(!view)
              }}>
                <span className='text-xl'><FaUserShield /></span>
                <span className=''>Update Password</span>
              </div>
              <div className='flex space-x-3 border-b border-dashed items-center  py-3 cursor-pointer hover:bg-soft' onClick={() => {
                navigate('/profile')
                setView(!view)
              }}>
                <span className='text-xl'><GiWallet /></span>
                <span className=''>Wallet</span>
              </div>
              <div className='flex space-x-3 border-b border-dashed items-center  py-3 cursor-pointer hover:bg-soft'
                onClick={() => {
                  dispatch(logoutUser())
                  setView(!view)
                }}>
                <span className='text-xl'><BiLogOut /></span>
                <span className=''>Logout</span>
              </div>
            </div>
          </div>
        </>
        ) : (
          <Auth />
        )}
      </div>
    </div>
  )
}

export default ProfileModal