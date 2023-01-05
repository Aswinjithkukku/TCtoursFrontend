import React from 'react'

function ProfileSection() {
  return (
    <div className=''>

      <div className='lg:px-7 px-2  grid grid-cols-2 gap-2 lg:gap-20'>

        <div className='bg-light rounded-2xl py-5 shadow px-2 lg:px-7'>
          <h2 className='lg:text-3xl text-2xl text-center lg:text-start font-black text-darktext tracking-wider mb-3'>Wallet Balance</h2>
          <h5 className='text-xs lg:text-sm text-text mb-3'>My balance*</h5>
          <div className='flex space-x-2 text-2xl tracking-wider font-bold  '>
            <p className='text-main'>202</p>
            <p className='text-text'>USD</p>
          </div>
          <div className='lg:mb-20 mb-10'>
          <h5 className='text-xs lg:text-sm text-text mb-3'>is left on your wallet!</h5>
          <h5 className='text-xs text-text mb-3'>add money to your wallet and expolre destinations</h5>
          </div>
          <button className='w-full bg-dark text-light py-3 rounded-lg text-xs lg:text-sm'>
            ADD MONEY
          </button>
        </div>

        <div className='bg-light rounded-2xl py-5 shadow px-7'>
        <h2 className='lg:text-3xl text-2xl text-center lg:text-start font-black text-darktext tracking-wider mb-3'>Withdraw Balance</h2>
          <h5 className='text-xs lg:text-sm text-text mb-3'>My balance*</h5>
          <div className='flex space-x-2 text-2xl tracking-wider font-bold  '>
            <p className='text-main'>202</p>
            <p className='text-text'>USD</p>
          </div>
          <div className='lg:mb-20 mb-10'>
          <h5 className='text-xs lg:text-sm text-text mb-3'>is left on your wallet!</h5>
          <h5 className='text-xs text-text mb-3'>withdraw the money in to your account.</h5>
          </div>
          <button className='w-full bg-dark text-light py-3 rounded-lg text-xs lg:text-sm'>
            WITHDRAW
          </button>
        </div>

      </div>

    </div>
  )
}

export default ProfileSection