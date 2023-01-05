import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { TiTick } from 'react-icons/ti'

function ConfirmedBookingTable() {
  return (
    <div className='bg-light rounded-lg '>
      <div className='overflow-x-auto'>
        <div className=''>
          <table className='w-[59em] table-auto'>
            <thead className=''>
              <tr className='text-darktext border-b cursor-default'>
                <th className='py-3 text-left font-semibold pl-2'>Ref.No</th>
                <th className='py-3 text-left font-semibold'>Activity</th>
                <th className='py-3 text-left font-semibold'>Date</th>
                <th className='py-3 text-left font-semibold'>Adult</th>
                <th className='py-3 text-left font-semibold'>Child</th>
                <th className='py-3 text-left font-semibold'>Infant</th>
                <th className='py-3 text-left font-semibold'>Price</th>
              </tr>
            </thead>
            <tbody className='text-darktext'>
              <tr className='hover:bg-soft cursor-default'>
                <td className='py-3 text-left text-sm pl-2'>#sd44s</td>
                <td className='py-3 text-left text-sm'>Pearl Hell tour (12 mnt ride)</td>
                <td className='py-3 text-left text-sm'>15-04-2023</td>
                <td className='py-3 text-left text-sm'>2</td>
                <td className='py-3 text-left text-sm'>1</td>
                <td className='py-3 text-left text-sm'>0</td>
                <td className='py-3 text-left text-sm text-[#54B435] font-semibold'>120 USD</td>
              </tr>
              <tr className='hover:bg-soft cursor-default'>
                <td className='py-3 text-left text-sm pl-2'>#sd44s</td>
                <td className='py-3 text-left text-sm'>Pearl Hell tour (12 mnt ride)</td>
                <td className='py-3 text-left text-sm'>15-04-2023</td>
                <td className='py-3 text-left text-sm'>2</td>
                <td className='py-3 text-left text-sm'>1</td>
                <td className='py-3 text-left text-sm'>0</td>
                <td className='py-3 text-left text-sm text-[#54B435] font-semibold'>120 USD</td>
              </tr>
              <tr className='hover:bg-soft cursor-default'>
                <td className='py-3 text-left text-sm pl-2'>#sd44s</td>
                <td className='py-3 text-left text-sm'>Pearl Hell tour (12 mnt ride)</td>
                <td className='py-3 text-left text-sm'>15-04-2023</td>
                <td className='py-3 text-left text-sm'>2</td>
                <td className='py-3 text-left text-sm'>1</td>
                <td className='py-3 text-left text-sm'>0</td>
                <td className='py-3 text-left text-sm text-[#54B435] font-semibold'>120 USD</td>
              </tr>
              <tr className='hover:bg-soft cursor-default'>
                <td className='py-3 text-left text-sm pl-2'>#sd44s</td>
                <td className='py-3 text-left text-sm'>Pearl Hell tour (12 mnt ride)</td>
                <td className='py-3 text-left text-sm'>15-04-2023</td>
                <td className='py-3 text-left text-sm'>2</td>
                <td className='py-3 text-left text-sm'>1</td>
                <td className='py-3 text-left text-sm'>0</td>
                <td className='py-3 text-left text-sm text-[#54B435] font-semibold'>120 USD</td>
              </tr>
              <tr className='hover:bg-soft cursor-default'>
                <td className='py-3 text-left text-sm pl-2'>#sd44s</td>
                <td className='py-3 text-left text-sm'>Pearl Hell tour (12 mnt ride)</td>
                <td className='py-3 text-left text-sm'>15-04-2023</td>
                <td className='py-3 text-left text-sm'>2</td>
                <td className='py-3 text-left text-sm'>1</td>
                <td className='py-3 text-left text-sm'>0</td>
                <td className='py-3 text-left text-sm text-[#54B435] font-semibold'>120 USD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ConfirmedBookingTable