import React from 'react'

function MarkupsTable() {
  return (
  
      <table className="w-full">
        <thead className="bg-[#f3f6f9] text-grayColor text-[14px] text-left">
          <tr>
            <th className="font-[500] p-3">Attraction Id</th>
            <th className="font-[500] p-3">Attraction</th>
            <th className="font-[500] p-3">Previous Price</th>
            <th className="font-[500] p-3">Flat</th>
            <th className="font-[500] p-3">Percentage</th>
            <th className="font-[500] p-3">Current Price</th>
            <th className="font-[500] p-3">Status</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          <tr className="border-b border-tableBorderColor">
            <td className="p-3">#63b2cc</td>
            <td className="p-3">
              SKy Fly
            </td>
            <td className="p-3">120</td>
            <td className="p-3 ">50</td>
            <td className="p-3">N/A</td>
            <td className="p-3">170</td>
            <td className="p-3 flex space-x-1">
              {/* <span className='text-xl text-lightblue'><AiFillEdit /> </span>
              <span className='text-xl text-main'><AiFillDelete /> </span> */}
            </td>
          </tr>
        </tbody>
      </table>
  )
}

export default MarkupsTable