import React from 'react'
import { MdBlockFlipped } from 'react-icons/md'

function FailedTransaction() {
  return (
    <table className="w-full">
      <thead className="bg-[#f3f6f9] text-grayColor text-[14px] text-left">
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
          <td className="p-3 flex space-x-1 items-center text-main">
            <span className=''>
              <MdBlockFlipped />
            </span>
            <span className=''>
              Failed
            </span>
          </td>
          <td className="p-3">270</td>
          <td className="p-3 font-semibold">300</td>

        </tr>
      </tbody>
    </table>
  )
}

export default FailedTransaction