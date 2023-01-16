import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DetailsEditForm from '../../components/Resellers/DetailsEditForm'
import MarkupsTable from '../../components/Resellers/MarkupsTable'
import OrderHistory from '../../components/Resellers/OrderHistory'
import TransactionHistoryTable from '../../components/Resellers/TransactionHistoryTable'

function EditResellers() {

  const [component, setComponent] = useState({
    details: true,
    markups: false,
    orders: false,
    transactions: false
  })
  return (
    <div className=''>
      <div className="bg-white flex items-center justify-between gap-[10px] px-2 lg:px-6 shadow-sm border-t py-2">
        <h1 className="font-[600] text-[15px] uppercase">
          Edit Resellers
        </h1>
        <div className="text-sm text-grayColor">
          <Link to="/b2b" className="text-textColor">
            Dashboard{" "}
          </Link>
          <span>{">"} </span>
          <span>Edit resellers</span>
        </div>
      </div>
      <div className='p-2 lg:p-6'>
        <div className=" bg-white rounded shadow-sm mt-2 lg:mt-6">
          <div className="flex items-center justify-between border-b border-dashed p-4">
            <h1 className="font-medium hidden md:block ">Details</h1>
            <div className="flex items-center gap-4 overflow-x-auto">
              <button className={`px-2 bg-transparent whitespace-nowrap ${component.details ? "font-bold tracking-wide text-darktext" : "text-textColor"} transition-all hover:bg-primaryColor hover:text-white`}
                onClick={() => setComponent({
                  details: true,
                  markups: false,
                  orders: false,
                  transactions: false
                })} >
                Details
              </button>
              <button className={`px-2 bg-transparent whitespace-nowrap text-textColor transition-all hover:bg-primaryColor hover:text-white`}
                onClick={() => setComponent({
                  details: false,
                  markups: true,
                  orders: false,
                  transactions: false
                })}>
                Markups
              </button>
              <button className={`px-2 bg-transparent whitespace-nowrap text-textColor transition-all hover:bg-primaryColor hover:text-white`}
                onClick={() => setComponent({
                  details: false,
                  markups: false,
                  orders: true,
                  transactions: false
                })}>
                Order History
              </button>
              <button className={`px-2 bg-transparent whitespace-nowrap text-textColor transition-all hover:bg-primaryColor hover:text-white`}
                onClick={() => setComponent({
                  details: false,
                  markups: false,
                  orders: false,
                  transactions: true
                })}>
                Transaction History
              </button>
            </div>
          </div>
          {component.details && (
            <DetailsEditForm />
          )}
          {component.markups && (
            <div className='overflow-x-auto'>
              <MarkupsTable />
            </div>
          )}
          {component.orders && (
            <div className='overflow-x-auto'>
              <OrderHistory />
            </div>
          )}
          {component.transactions && (
            <div className='overflow-x-auto'>
            <TransactionHistoryTable />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EditResellers