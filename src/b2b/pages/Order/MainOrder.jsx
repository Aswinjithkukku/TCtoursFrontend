import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AllOrderMainTable, CancelledOrderMainTable, ConfirmedOrderMainTable } from '../../components/Orders'

function MainOrder() {
  const [orderType, setOrderType] = useState({
    all: true,
    confirm: false,
    cancel: false
  })
  return (
    <div>
      <div className="bg-white flex items-center justify-between gap-[10px] px-6 shadow-sm border-t py-2">
        <h1 className="font-[600] text-[15px] uppercase">
          Orders
        </h1>
        <div className="text-sm text-grayColor">
          <Link to="/b2b" className="text-textColor">
            Dashboard{" "}
          </Link>
          <span>{">"} </span>
          <span>Order-History</span>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white rounded shadow-sm mt-6">
          <div className="flex items-center justify-between border-b border-dashed p-4">
            <h1 className="font-medium">
            {orderType.all === true && "All Order History" }
            {orderType.confirm === true && "Confirmed Order History" }
            {orderType.cancel === true && "Cancelled Order History" }
            </h1>
            <div className="flex items-center gap-4">
              <button className={`px-2 ${orderType.all ? "" : "bg-transparent text-textColor"}  transition-all hover:bg-primaryColor hover:text-white`}
              onClick={() => setOrderType({
                all: true,
                confirm: false,
                cancel: false
              })}>
                All Orders
              </button>
              <button className={`px-2 ${orderType.confirm ? "" : "bg-transparent text-textColor"}  transition-all hover:bg-primaryColor hover:text-white`}
              onClick={() => setOrderType({
                all: false,
                confirm: true,
                cancel: false
              })}>
                Confirmed Orders
              </button>
              <button className={`px-2 ${orderType.cancel ? "" : "bg-transparent text-textColor"}  transition-all hover:bg-primaryColor hover:text-white`}
              onClick={() => setOrderType({
                all: false,
                confirm: false,
                cancel: true
              })}>
                Cancelled Orders
              </button>
            </div>
          </div>

            {orderType.all && (
              <AllOrderMainTable />
            )}
            {orderType.confirm && (
              <ConfirmedOrderMainTable />
            )}
            {orderType.cancel && (
              <CancelledOrderMainTable />
            )}
          
        </div>
      </div>

    </div>
  )
}

export default MainOrder