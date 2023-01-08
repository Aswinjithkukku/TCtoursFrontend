import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function ProfileSettingSection() {

  const { user } = useSelector(state => state.users)

  const [profile,setProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    country: user?.country || '',
    phone: user?.phoneNumber || 0
  })

  const { initialData } = useSelector(state => state.home)

  const onChageData = (e) => {
    setProfile({...profile,[e.target.name]: e.target.value})
  }

  return (
    <div className='bg-light rounded-3xl py-10 px-10 shadow mx-2 lg:mx-0'>
      <div className='flex  justify-center '>
        <img src={`https://avatars.dicebear.com/api/initials/${user?.name}.svg`} alt='avatar' className='outline-double outline-1 outline-offset-8 outline-semisoft border-2 h-24 w-24 rounded-full' />
      </div>

      <div className=' space-y-5 py-7'>
        <div className='lg:flex gap-5 text-darktext space-y-3 lg:space-y-0'>

          <div className='lg:w-6/12'>
            <div className=''>
              <label className='text-lightblue font-semibold'>Name</label>
            </div>
            <div className=''>
              <input
                type='text'
                className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light'
                name='name'
                value={profile.name}
                onChange={onChageData}
              />
            </div>
          </div>
          <div className='lg:w-6/12'>
            <div className=''>
              <label className='text-lightblue font-semibold'>Email</label>
            </div>
            <div className=''>
              <input
                type='email'
                className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light'
                name='email'
                value={profile.email}
                onChange={onChageData}
              />
            </div>
          </div>

        </div>

        <div className='lg:flex gap-5 text-darktext space-y-3 lg:space-y-0'>
          <div className='lg:w-6/12'>
            <div className=''>
              <label className='text-lightblue font-semibold'>Country</label>
            </div>
            <div className=''>
              <select
                type='text'
                className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light'
                name='country'
                value={profile.country}
                onChange={onChageData}
              >
                <option ></option>
                {initialData?.countries?.map((item) => (
                  <option key={item._id} value={item._id}>{item.countryName} </option>
                ))}
              </select>
            </div>
          </div>
          <div className='lg:w-6/12'>
            <div className=''>
              <label className='text-lightblue font-semibold'>Phone</label>
            </div>
            <div className=''>
              <input
                type='number'
                className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light'
                name='phone'
                value={profile.phone}
                onChange={onChageData}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <button className='px-10 py-2 rounded-md text-light bg-lightblue'>Submit</button>
      </div>
    </div>
  )
}

export default ProfileSettingSection