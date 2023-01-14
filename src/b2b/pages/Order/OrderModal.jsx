import React, { useState } from 'react'
import { BiTransferAlt } from 'react-icons/bi'
import { BsPersonFill } from 'react-icons/bs'
import { IoPeopleSharp } from 'react-icons/io5'

function OrderModal() {
  const [transaction, setTransaction] = useState(false)
  return (
    <div className=' absolute bg-gray-300 w-[250px] right-0 text-darktext rounded-sm py-3 cursor-pointer'>
      <div className='flex space-x-2 items-center hover:bg-gray-200 py-1 px-2 '>
        <span className=''><BsPersonFill /> </span>
        <span className='font-[500] uppercase'>My Orders</span>
      </div>
      <div className='flex items-center space-x-2 hover:bg-gray-200 py-1 px-2 '>
        <span className=''><IoPeopleSharp /> </span>
        <span className='font-[500] uppercase'>Sub-Agent Orders</span>
      </div>
      <div className='hover:bg-gray-200 py-1 px-2 '>
        <div className='flex items-center space-x-2 ' 
        onClick={() =>  setTransaction(!transaction)}
        >
          <span className={`transition-all duration-200 ${transaction ? "rotate-90" : ""}`}><BiTransferAlt /> </span>
          <span className='font-[500] uppercase'>Transactions</span>
        </div>
        {transaction && (
          <div className=' py-2 bg-gray-200'>
            <div className='flex items-center space-x-2 text-sm py-1 hover:bg-slate-400 px-5 '>
              <span className=''>-</span>
              <span className=''>All Transactions</span>
            </div>
            <div className='flex items-center space-x-2 text-sm py-1 hover:bg-slate-400 px-5'>
              <span className=''>-</span>
              <span className=''>Confirmed Transactions</span>
            </div>
            <div className='flex items-center space-x-2 text-sm py-1 hover:bg-slate-400 px-5'>
              <span className=''>-</span>
              <span className=''>Cancelled Transactions</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderModal