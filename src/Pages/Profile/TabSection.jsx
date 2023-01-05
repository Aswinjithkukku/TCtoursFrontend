import React, { useState } from 'react'
import { AllBookingTable, CancelledBookingTable, ConfirmedBookingTable, TransactionHistoryTable } from '../../components/ProfileTables'

function TabSection() {
  const [view, setView] = useState({
    allBooking: true,
    confirmedBooking: false,
    cancelledBooking: false,
    transactionHistory: false
  })
  return (
    <>
      <div className='pt-10'>
        <div className=''>

          <div className='flex justify-around w-full space-x-2'>

            <div className={`${view.allBooking && "bg-light"} w-full text-center py-3 rounded-t-3xl`}
              onClick={() => {
                setView((prev) => {
                  return { ...prev, allBooking: true, confirmedBooking: false, cancelledBooking: false, transactionHistory: false }
                })
              }}
            >
              <button className='text-sm font-medium '>All Booking</button>
            </div>
            <div className={`${view.confirmedBooking && "bg-light"} w-full text-center py-3 rounded-t-3xl`}
              onClick={() => {
                setView((prev) => {
                  return { ...prev, confirmedBooking: true, allBooking: false, cancelledBooking: false, transactionHistory: false }
                })
              }}
            >
              <button className='text-sm font-medium '>Booking Confirmed</button>
            </div>
            <div className={`${view.cancelledBooking && "bg-light"} w-full text-center py-3 rounded-t-3xl`}
              onClick={() => {
                setView((prev) => {
                  return { ...prev, cancelledBooking: true, confirmedBooking: false, allBooking: false, transactionHistory: false }
                })
              }}
            >
              <button className='text-sm font-medium '>Booking Cancelled</button>
            </div>
            <div className={`${view.transactionHistory && "bg-light"} w-full text-center py-3 rounded-t-3xl`}
              onClick={() => {
                setView((prev) => {
                  return { ...prev, transactionHistory: true, confirmedBooking: false, allBooking: false, cancelledBooking: false }
                })
              }}
            >
              <button className='text-sm font-medium '>Transaction History</button>
            </div>

          </div>

        </div>
      </div>
      {view.allBooking && (
        <AllBookingTable />
      )}
      {view.confirmedBooking && (
        <ConfirmedBookingTable />
      )}
      {view.cancelledBooking && (
        <CancelledBookingTable />
      )}
      {view.transactionHistory && (
        <TransactionHistoryTable />
      )}
    </>
  )
}

export default TabSection