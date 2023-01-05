import React from 'react'
import ChangePasswordSection from './ChangePasswordSection'
import ProfileSidebar from './ProfileSidebar'

function ProfilePasswordSection() {
  return (
    <div className='lg:max-w-screen-xl lg:mx-auto py-10 '>
    <div className='lg:flex lg:gap-5 space-y-5 lg:space-y-0'>
      <div className='lg:w-3/12 px-4 lg:px-0 '>
        <ProfileSidebar />
      </div>
      <div className='lg:w-9/12'>
        <div className=''>
          <ChangePasswordSection />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProfilePasswordSection