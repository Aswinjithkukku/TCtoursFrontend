import React from 'react'

function UploadDetailSection() {
  return (
    <div className='p-6 text-darktext'>
      <div className='my-2 border px-3 py-4 bg-primaryColor rounded-[.25rem]'>
        <p className='font-[600] text-[20px] text-soft'>Upload Details</p>
      </div>
      <div className='flex justify-between gap-3 rounded-md shadow bg-white p-6'>
        <div className='space-y-2'>
          <p className='text-gray-500 text-sm font-[500]'>Make use of our Wallet system to purchase which is help for faster transaction.</p>
          <p className=''>Make payment through your wallet.</p>

        </div>
      </div>
    </div>
  )
}

export default UploadDetailSection