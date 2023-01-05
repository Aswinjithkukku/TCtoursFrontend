import React from 'react'
import { useSelector } from 'react-redux'

function ProfileSettingSection() {

  const { user } = useSelector(state => state.users)

  return (
    <div className='bg-light rounded-3xl py-10'>
      <div className='flex  justify-center '>
        <img src={`https://avatars.dicebear.com/api/initials/${user?.email}.svg`} alt='avatar' className='outline-double outline-1 outline-offset-8 outline-darktext border-2 h-24 w-24 rounded-full' />
      </div>
      <div className='grid grid-cols-2'>
        <div className=''>name</div>
        <div className=''>email</div>
      </div>
    </div>
  )
}

export default ProfileSettingSection