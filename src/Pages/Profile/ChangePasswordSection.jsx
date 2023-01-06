import React from 'react'

function ChangePasswordSection() {
  return (
    <div className='bg-light rounded-3xl p-10 mx-4 lg:mx-0'>
      <div className='flex justify-center'>
        <h1 className='text-2xl font-bold tracking-wider'>Update Password</h1>
      </div>
      <div className=' gap-5 text-darktext space-y-5  py-3'>

        <div className='lg:w-8/12'>
          <div className=''>
            <label className='text-lightblue font-semibold'>Old Password</label>
          </div>
          <div className=''>
            <input
              type='text'
              className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light'
              name='old password'
            />
          </div>
        </div>
        <div className='lg:w-8/12'>
          <div className=''>
            <label className='text-lightblue font-semibold'>New Password</label>
          </div>
          <div className=''>
            <input
              type='password'
              className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light'
              name='password'
            />
          </div>
        </div>
        <div className='lg:w-8/12'>
          <div className=''>
            <label className='text-lightblue font-semibold'>Re-enter New Password</label>
          </div>
          <div className=''>
            <input
              type='password'
              className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light'
              name='repassword'
            />
          </div>
        </div>

        <div className='flex justify-center'>
          <button className='px-10 py-2 rounded-md text-light bg-lightblue'>Submit</button>
        </div>

      </div>
    </div>
  )
}

export default ChangePasswordSection