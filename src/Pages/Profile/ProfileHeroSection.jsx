import React from 'react'
import ProfileSection from './ProfileSection'
import ProfileSidebar from './ProfileSidebar'
import TabSection from './TabSection'

function ProfileHeroSection() {
  return (
    <div className='lg:max-w-screen-xl lg:mx-auto lg:py-10 py-5 '>
      <div className='lg:flex lg:gap-5 space-y-2 lg:space-y-0'>
        <div className='lg:w-3/12  '>
          <ProfileSidebar />
        </div>
        <div className='lg:w-9/12'>
          <div className=''>
            <ProfileSection />
            <TabSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeroSection