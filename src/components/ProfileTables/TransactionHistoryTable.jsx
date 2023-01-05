import React from 'react'
import { AiFillDollarCircle } from 'react-icons/ai'

function TransactionHistoryTable() {
  return (
    <div className='bg-light rounded-lg '>
      <div className='overflow-x-auto'>
        <div className=''>
          <table className='w-[59em] table-auto'>
            <thead className=''>
              <tr className='text-darktext border-b cursor-default'>
                <th className='py-3 text-left font-semibold pl-2'>#</th>
                <th className='py-3 text-left font-semibold'>Account</th>
                <th className='py-3 text-left font-semibold'>Date</th>
                <th className='py-3 text-left font-semibold'>Time</th>
                <th className='py-3 text-left font-semibold'>Price</th>
              </tr>
            </thead>
            <tbody className='text-darktext'>
              <tr className='hover:bg-soft cursor-default'>
                <td className='py-3 text-left text-lg pl-2 text-[#54B435]'><AiFillDollarCircle/></td>
                <td className='py-3 text-left text-sm'>test #52010 0120 01200</td>
                <td className='py-3 text-left text-sm'>15-04-2023</td>
                <td className='py-3 text-left text-sm'>21:00</td>
                <td className='py-3 text-left text-sm text-[#54B435] font-semibold'>+120 USD</td>
              </tr>
              <tr className='hover:bg-soft cursor-default'>
                <td className='py-3 text-left text-lg pl-2 text-[#54B435]'><AiFillDollarCircle/></td>
                <td className='py-3 text-left text-sm'>test #52010 0120 01200</td>
                <td className='py-3 text-left text-sm'>15-04-2023</td>
                <td className='py-3 text-left text-sm'>02:00</td>
                <td className='py-3 text-left text-sm text-[#54B435] font-semibold'>+120 USD</td>
              </tr>
              <tr className='hover:bg-soft cursor-default '>
                <td className='py-3 text-left text-lg pl-2 text-main'><AiFillDollarCircle/> </td>
                <td className='py-3 text-left text-sm'>test #52010 0120 01200</td>
                <td className='py-3 text-left text-sm'>15-04-2023</td>
                <td className='py-3 text-left text-sm'>12:00</td>
                <td className='py-3 text-left text-sm text-main font-semibold'>-120 USD</td>
              </tr>
              <tr className='hover:bg-soft cursor-default'>
                <td className='py-3 text-left text-lg pl-2 text-main'><AiFillDollarCircle/> </td>
                <td className='py-3 text-left text-sm'>test #52010 0120 01200</td>
                <td className='py-3 text-left text-sm'>15-04-2023</td>
                <td className='py-3 text-left text-sm'>12:00</td>
                <td className='py-3 text-left text-sm text-main font-semibold'>-120 USD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TransactionHistoryTable