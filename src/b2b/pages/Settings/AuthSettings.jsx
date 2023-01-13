import React from 'react'

function AuthSettings() {
  return (
    <div className=''>
      <div className='grid grid-cols-3 gap-[20px]'>

        <div className=''>
          <label className='label'>Old Password</label>
          <input className='input' type='password' placeholder='*******' />
        </div>
        <div className=''>
          <label className='label'>New Password</label>
          <input className='input' type='password' placeholder='*******' />
        </div>

        <div className=''>
          <label className='label'>Confirm Password</label>
          <input className='input' type='password' placeholder='*******' />
        </div>

      </div>
      <div className="mt-4 flex items-center justify-end gap-[12px]">
        <button
          className="button w-[100px] "
          type="button"
        >
          Update
        </button>
      </div>
    </div>
  )
}

export default AuthSettings