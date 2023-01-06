import React from 'react'
import ProfileSettingSection from './ProfileSettingSection'
import ProfileSidebar from './ProfileSidebar'

function ProfileSettingsHeroSection() {
  return (
    <div className='lg:max-w-screen-xl lg:mx-auto py-10 '>
    <div className='lg:flex lg:gap-5 space-y-2 lg:space-y-0'>
      <div className='lg:w-3/12 '>
        <ProfileSidebar />
      </div>
      <div className='lg:w-9/12'>
        <div className=''>
          <ProfileSettingSection />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProfileSettingsHeroSection