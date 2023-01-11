import React, { useState } from 'react'
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
    <div className="max-w-screen-2xl mx-auto bg-white rounded shadow-sm mt-6">
      <div className="flex items-center justify-between border-b border-dashed p-4">
        <h1 className="font-medium">Details</h1>
        <div className="flex items-center gap-4">
          <button className={`px-2 bg-transparent ${component.details ? "font-bold tracking-wide text-darktext" : "text-textColor"} transition-all hover:bg-primaryColor hover:text-white`}
            onClick={() => setComponent({
              details: true,
              markups: false,
              orders: false,
              transactions: false
            })} >
            Details
          </button>
          <button className={`px-2 bg-transparent text-textColor transition-all hover:bg-primaryColor hover:text-white`}
            onClick={() => setComponent({
              details: false,
              markups: true,
              orders: false,
              transactions: false
            })}>
            Markups
          </button>
          <button className={`px-2 bg-transparent text-textColor transition-all hover:bg-primaryColor hover:text-white`}
            onClick={() => setComponent({
              details: false,
              markups: false,
              orders: true,
              transactions: false
            })}>
            Order History
          </button>
          <button className={`px-2 bg-transparent text-textColor transition-all hover:bg-primaryColor hover:text-white`}
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
        <MarkupsTable />
      )}
      {component.orders && (
        <OrderHistory />
      )}
      {component.transactions && (
        <TransactionHistoryTable />
      )}
    </div>
  )
}

export default EditResellers