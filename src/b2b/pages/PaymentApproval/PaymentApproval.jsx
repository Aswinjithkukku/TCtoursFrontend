import React, { useState } from 'react'
import Lottie from 'lottie-react'
import { PaymentAnimation } from '../../../data'
import { paypalpng, stripepng, atmcardpng } from '../../../static/images'
import AddWalletPaypalComponent from '../../components/Payment/AddWalletPaypalComponent'

function PaymentApproval() {

  return (
    <div className='lg:max-w-screen-xl lg:mx-auto'>
      <div className='bg-light shadow-sm rounded-md overflow-hidden w-full my-6'>
        <div className='grid grid-cols-12 gap-5'>
          <div className='1 col-span-3 bg-primaryColor p-6 text-white'>
            <div className='h-12 bg-bluetrans flex justify-center items-center font-medium tracking-wide rounded-md'>Payments</div>
            <div className='h-10 hover:bg-bluetrans flex tracking-wide items-center cursor-pointer px-2 mt-5'>Paypal</div>
            <div className='h-10 hover:bg-bluetrans  tracking-wide items-center cursor-pointer px-2'>
              <p className=''>Razorpay</p>
              <p className='text-xs text-text'>(credit/debit-card, UPI payment)</p>
            </div>
            <div className='h-10 hover:bg-bluetrans flex tracking-wide items-center cursor-pointer px-2'>Stripe</div>
          </div>
          <div className='2 col-span-9 p-6'>
            <div className='flex justify-around items-center border-b border-dashed mb-5'>
              <div className=''>
                <h2 className='text-3xl font-bold tracking-wider text-darktext underline'>Add to wallet</h2>
              </div>
              <div className=' w-[150px] '>
                <Lottie animationData={PaymentAnimation} />
              </div>
            </div>

            <div className='flex justify-center'>
              <div className='w-7/12'>
                <AddWalletPaypalComponent />
              </div>
            </div>
            <div className='flex justify-center items-center space-x-10 border-t border-dashed'>
              <div className=''>
                <img src={paypalpng} alt='paypal' className='w-[60px]' />
              </div>
              <div className=''>
                <img src={stripepng} alt='stripe' className='w-[50px]' />
              </div>
              <div className=''>
                <img src={atmcardpng} alt='cards' className='w-[40px]' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PaymentApproval