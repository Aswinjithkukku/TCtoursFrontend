import React, { useState } from 'react'
import { BiTransferAlt } from 'react-icons/bi'
import { CgSandClock } from 'react-icons/cg'
import { GiConfirmed } from 'react-icons/gi'
import { ImCancelCircle } from 'react-icons/im'

function TransactionModal({ setFilters, setTransactionType }) {
  return (
    <div className=' absolute bg-gray-200 w-[250px] right-0 text-darktext rounded-sm py-3 cursor-pointer'>
      <div className='flex items-center space-x-2 hover:bg-gray-100 py-1 px-2 '
      onClick={() => {
        setFilters((prev) => {
          return {
            ...prev,
            status: '',
          };
        });
        setTransactionType(false)
      }}
      >
        <span className=''><BiTransferAlt /> </span>
        <span className=''>All Transactions</span>
      </div>
      <div className='flex space-x-2 items-center hover:bg-gray-100 py-1 px-2 '
            onClick={() => {
              setFilters((prev) => {
                return {
                  ...prev,
                  status: 'pending',
                };
              });
              setTransactionType(false)
            }}
      >
        <span className=''><CgSandClock /> </span>
        <span className=''>Pending Transactions</span>
      </div>
      <div className='flex space-x-2 items-center hover:bg-gray-100 py-1 px-2 '
            onClick={() => {
              setFilters((prev) => {
                return {
                  ...prev,
                  status: 'booked',
                };
              });
              setTransactionType(false)
            }}
      >
        <span className=''><GiConfirmed /> </span>
        <span className=''>Confirmed Transactions</span>
      </div>
      <div className='flex items-center space-x-2 hover:bg-gray-100 py-1 px-2 '
            onClick={() => {
              setFilters((prev) => {
                return {
                  ...prev,
                  status: 'cancelled',
                };
              });
              setTransactionType(false)
            }}
      >
        <span className=''><ImCancelCircle /> </span>
        <span className=''>Cancelled Transactions</span>
      </div>
    </div>
  )
}

export default TransactionModal