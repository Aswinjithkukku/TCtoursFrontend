import React from 'react'
import Lottie from 'lottie-react'
import { PaymentAnimation } from '../../../data'

function MakePaymentSection() {
  return (
    <div className='p-6 text-darktext'>
      <div className='my-2 border px-3 py-4 bg-primaryColor rounded-[.25rem]'>
        <p className='font-[600] text-[20px] text-soft'>Make Payment</p>
      </div>
      <div className='flex justify-between gap-3 rounded-md shadow bg-white p-6'>
        <div className='space-y-2'>
          <p className='text-gray-500 text-sm font-[500]'>Make use of our Wallet system to purchase which is help for faster transaction.</p>
          <p className=''>Make payment through your wallet.</p>
          <p className='text-gray-500 font-[500] text-sm'>Your wallet amount is : <span className='text-main font-[600]'>1000 AED</span> </p>
          <button className='bg-lightblue rounded-[.25rem] text-white w-[100px] h-9'>Pay</button>
        </div>
        <div className='text-center'>
          <p className='text-gray-500  font-[500]'>Purchase Cost: </p>
          <p className='text-lightblue underline text-xl font-[750]'>202 AED</p> 
        </div>
        <div className=' w-[170px] '>
          <Lottie animationData={PaymentAnimation} />
        </div>
      </div>
    </div>
  )
}

export default MakePaymentSection