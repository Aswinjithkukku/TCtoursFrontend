import React, { useState } from 'react'
import { BiTransferAlt } from 'react-icons/bi'
import { GiConfirmed } from 'react-icons/gi'
import { ImCancelCircle } from 'react-icons/im'

function TransactionModal() {
  return (
    <div className=' absolute bg-gray-300 w-[250px] right-0 text-darktext rounded-sm py-3 cursor-pointer'>
      <div className='flex items-center space-x-2 hover:bg-gray-200 py-1 px-2 '>
        <span className=''><BiTransferAlt /> </span>
        <span className=''>All Transactions</span>
      </div>
      <div className='flex space-x-2 items-center hover:bg-gray-200 py-1 px-2 '>
        <span className=''><GiConfirmed /> </span>
        <span className=''>Confirmed Transactions</span>
      </div>
      <div className='flex items-center space-x-2 hover:bg-gray-200 py-1 px-2 '>
        <span className=''><ImCancelCircle /> </span>
        <span className=''>Cancelled Transactions</span>
      </div>
    </div>
  )
}

export default TransactionModal