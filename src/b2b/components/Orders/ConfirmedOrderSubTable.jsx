import React from 'react'

function ConfirmedOrderSubTable() {
  return (
    <table className="w-full">
      <thead className="bg-[#f3f6f9] text-grayColor text-[14px] text-left">
        <tr>
          <th className="font-[500] p-3">
            Ref.No
          </th>
          <th className="font-[500] p-3">
            Activity
          </th>
          <th className="font-[500] p-3">
            Sub-Agent
          </th>
          <th className="font-[500] p-3">
            Booking Date
          </th>
          <th className="font-[500] p-3">
            Adults
          </th>
          <th className="font-[500] p-3">
            Children
          </th>
          <th className="font-[500] p-3">
            Infant
          </th>
          <th className="font-[500] p-3">
            Price
          </th>
          <th className="font-[500] p-3">
            Profit
          </th>
          <th className="font-[500] p-3">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="text-sm">
        <tr className="border-b border-tableBorderColor">
          <td className="p-3">#63b2cc</td>
          <td className="p-3">
            Dubai Frame
          </td>
          <td className="p-3">
            user1
          </td>
          <td className="p-3 ">2023-2-12</td>
          <td className="p-3">1</td>
          <td className="p-3">0</td>
          <td className="p-3">0</td>
          <td className="p-3">150 AED</td>
          <td className="p-3">5 AED</td>
          <td className="">
            <span className='bg-green-500 text-sm text-light px-4 rounded'>Confirmed</span>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default ConfirmedOrderSubTable