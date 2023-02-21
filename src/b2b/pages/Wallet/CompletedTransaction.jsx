import React from 'react'
import { MdOutlineArrowDownward, MdOutlineArrowUpward } from 'react-icons/md'

function CompletedTransaction() {
  return (
    <table className="w-full">
      <thead className="bg-gray-100 text-grayColor text-[14px] text-left">
        <tr>
          <th className="font-[500] p-3">Ref No.</th>
          <th className="font-[500] p-3">Gateway</th>
          <th className="font-[500] p-3">Date</th>
          <th className="font-[500] p-3">Time</th>
          <th className="font-[500] p-3">Status</th>
          <th className="font-[500] p-3">Price</th>
          <th className="font-[500] p-3">Balance</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        <tr className="border-b border-tableBorderColor">
          <td className="p-3">#63b2cc</td>
          <td className="p-3">paypal</td>
          <td className="p-3 whitespace-nowrap">2022-12-15</td>
          <td className="p-3 ">11:00</td>
          <td className="p-3 flex space-x-1 items-center text-green-600">
            <span className=''>
              <MdOutlineArrowUpward />
            </span>
            <span className=''>
              Credited
            </span>
          </td>
          <td className="p-3">170</td>
          <td className="p-3 font-semibold">470</td>

        </tr>
        <tr className="border-b border-tableBorderColor">
          <td className="p-3">#63b2cc</td>
          <td className="p-3">paypal</td>
          <td className="p-3">2022-12-15</td>
          <td className="p-3 ">11:00</td>
          <td className="p-3 flex space-x-1 items-center text-main">
            <span className=''>
              <MdOutlineArrowDownward />
            </span>
            <span className=''>
              Debited
            </span>
          </td>
          <td className="p-3">170</td>
          <td className="p-3 font-semibold">300</td>

        </tr>
      </tbody>
    </table>
  )
}

export default CompletedTransaction