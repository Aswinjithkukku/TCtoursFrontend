import React from 'react'

function OrderHistory() {
  return (
    <table className="w-full">
      <thead className="bg-[#f3f6f9] text-grayColor text-[14px] text-left">
        <tr>
          <th className="font-[500] p-3">Ref.No</th>
          <th className="font-[500] p-3">Activity</th>
          <th className="font-[500] p-3">Bookig Type</th>
          <th className="font-[500] p-3">Date</th>
          <th className="font-[500] p-3">Adults</th>
          <th className="font-[500] p-3">Children</th>
          <th className="font-[500] p-3">Infant</th>
          <th className="font-[500] p-3">Price</th>
          <th className="font-[500] p-3">Status</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        <tr className="border-b border-tableBorderColor">
          <td className="p-3">#63b2cc</td>
          <td className="p-3">
            Pearl Heli Tour (12 Mins. Ride)
          </td>
          <td className="p-3">Ticket</td>
          <td className="p-3">January 3, 2023</td>
          <td className="p-3 ">1</td>
          <td className="p-3">0</td>
          <td className="p-3">0</td>
          <td className="p-3">153 AED</td>
          <td className="p-3">Confirmed</td>
        </tr>
      </tbody>
    </table>
  )
}

export default OrderHistory