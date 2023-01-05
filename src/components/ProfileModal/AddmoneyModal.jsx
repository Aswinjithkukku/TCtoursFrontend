import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import WalletPaypalComponent from '../Payment/WalletPaypalComponent'

function AddmoneyModal({ modal, setModal }) {

  const [amount, setAmount] = useState(0)
  const [paypal, setPaypal] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
  }
  if (!modal.addmoney) return null
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 modal_overlay' onClick={() => setModal(!modal)}>
      <div className='h-full w-full flex justify-center items-center'>
        <div className='bg-white w-5/12  rounded-2xl max-h-[95vh] overflow-auto' onClick={(e) => e.stopPropagation()}>
          <div className=''>
            <form onSubmit={submitHandler}>
              <div className='p-7 space-y-4'>
                <div className='flex justify-between items-center'>
                  <p className='text-3xl font-bold text-darktext'></p>
                  <h1 className='text-3xl font-bold text-darktext'>Add to Wallet</h1>
                  <h3 className='text-3xl font-bold text-darktext' onClick={() => setModal(false)}><AiOutlineClose /></h3>
                </div>

                <div className=' flex w-full'>
                  <div className=' w-full px-2'>
                    <div className='flex items-center space-x-2'>
                      <span className='text-lg text-lightblue'> </span>
                      <span className='text-lg'>Amount</span>
                    </div>
                    <div className=''>
                      <input type='number'
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-xl text-text' />
                    </div>
                  </div>
                </div>
                {paypal ? (
                  <WalletPaypalComponent />
                ) : (
                  <div className=' flex justify-end mt-10 mr-10'>
                    <button type='submit' className='bg-lightblue hover:bg-blue text-white px-5 py-2 rounded-lg'
                    onClick={() => setPaypal(!paypal)}
                    >Add</button>
                  </div>
                )}

              </div>
            </form>

          </div>
        </div>
      </div>
    </div >
  )
}

export default AddmoneyModal