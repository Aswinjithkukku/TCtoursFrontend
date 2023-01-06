import React from 'react'
import { useSelector } from 'react-redux'
import { RiMapPinUserFill, RiUserStarFill } from 'react-icons/ri'
import { AiFillMail } from 'react-icons/ai'
import { CgUserlane } from 'react-icons/cg'
import { FaUserCog, FaUserShield } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function ProfileSidebar() {

  const { user } = useSelector(state => state.users)
  return (
    <div className=' bg-light lg:rounded-3xl lg:shadow-md sticky top-5'>

      <div className='flex justify-center py-5'>
        <img src={`https://avatars.dicebear.com/api/identicon/${user?.email}.svg`} alt='profile' className='h-16 w-16 rounded-full' />
      </div>

      <div className='text-darktext '>
        <div className='flex space-x-2 justify-center items-center'>
          <span className='text-gray-500'><RiUserStarFill /> </span>
          <span className=''>{user?.name}</span>
        </div>
        <div className='flex space-x-2 justify-center items-center'>
          <span className='text-gray-500'><AiFillMail /></span>
          <span className=''>{user?.email}</span>
        </div>
      </div>

      <div className='text-darktext py-5'>
        <Link to='/profile'>
          <div className='flex py-2 items-center space-x-2 hover:bg-semisoft cursor-pointer px-5 border-b'>
            <span className=''><CgUserlane /> </span>
            <span className=''>Profile</span>
          </div>
        </Link>
        <Link to='/profile/settings'>
          <div className='flex py-2 items-center space-x-2 hover:bg-semisoft cursor-pointer px-5 border-b'>
            <span className=''><FaUserCog /> </span>
            <span className=''>Profile Settings</span>
          </div>
        </Link>
        <Link to='/profile/password'>
          <div className='flex py-2 items-center space-x-2 hover:bg-semisoft cursor-pointer px-5 border-b'>
            <span className=''><FaUserShield /></span>
            <span className=''>Update Password</span>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default ProfileSidebar