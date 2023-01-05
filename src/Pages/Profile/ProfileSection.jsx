import React, { useState } from 'react'
import {AddmoneyModal, WithdrawModal} from '../../components/ProfileModal'

function ProfileSection() {

  const [modal, setModal] = useState({
    addmoney: false,
    withdraw: false
  })
  return (
    <>
      <div className='lg:px-7 px-2 '>

        <div className='bg-light rounded-2xl py-5 shadow px-2 lg:px-7'>
          <div className='flex justify-between'>
            <div className=''>

              <h2 className='lg:text-3xl text-2xl text-center lg:text-start font-black text-darktext tracking-wider mb-3'>Wallet Balance</h2>
              <h5 className='text-xs lg:text-sm text-text mb-3'>My balance*</h5>
              <div className='flex space-x-2 text-2xl tracking-wider font-bold  '>
                <p className='text-main'>202</p>
                <p className='text-text'>USD</p>
              </div>
              <div className='mb-10'>
                <h5 className='text-xs lg:text-sm text-text mb-3'>is left on your wallet!</h5>
                <h5 className='text-xs text-text mb-3'>add money to your wallet and expolre destinations</h5>
                <h5 className='text-xs text-text mb-3'>withdraw the money in to your account.</h5>
              </div>
            </div>

            <div className='space-y-6 py-7'>
              <div className=''>
                <button className='w-[15em] bg-dark text-light py-3 rounded-lg text-xs lg:text-sm'
                  onClick={() => {
                    setModal((prev) => {
                      return { ...prev, addmoney: !modal.addmoney  }
                    })
                  }}
                >
                  ADD MONEY
                </button>
              </div>
              <div className=''>
                <button className='w-[15em] bg-dark text-light py-3 rounded-lg text-xs lg:text-sm'
                  onClick={() => {
                    setModal((prev) => {
                      return { ...prev, withdraw: !modal.withdraw }
                    })
                  }}
                >
                  WITHDRAW
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      {modal.addmoney && (
        <AddmoneyModal modal={modal} setModal={setModal} />
      )}
      {modal.withdraw && (
        <WithdrawModal modal={modal} setModal={setModal}/>
      )}
    </>
  )
}

export default ProfileSection