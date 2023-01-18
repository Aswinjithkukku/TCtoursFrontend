import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
// import { AllOrderMainTable, CancelledOrderMainTable, ConfirmedOrderMainTable } from '../../components/Orders'
import { BiEditAlt } from 'react-icons/bi'
import { AiOutlineDown } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import Pagination from '../../components/Pagination'
import OrderModal from './OrderModal'
import { useHandleClickOutside } from '../../../hooks'
import TransactionModal from './TransactionModal'

function MainOrder() {
  const [orderType, setOrderType] = useState(false)
  const [transactionType, setTransactionType] = useState(false)

  const dropdownRef = useRef()
  useHandleClickOutside(dropdownRef, () => setOrderType(false))

  const transactionRef = useRef()
  useHandleClickOutside(transactionRef, () => setTransactionType(false))
  return (
    <div>
      <div className="bg-white flex items-center justify-between gap-[10px] px-2 lg:px-6 shadow-sm border-t py-2">
        <h1 className="font-[600] text-[15px] uppercase">
          Orders
        </h1>
        <div className="text-sm text-grayColor">
          <Link to="/b2b" className="text-textColor">
            Dashboard{" "}
          </Link>
          <span>{">"} </span>
          <span>orders</span>
        </div>
      </div>
      <div className="p-2 lg:p-6">
        <div className="bg-white rounded shadow-sm">
          <div className="flex items-center justify-between border-b border-dashed p-4">
            <h1 className="font-medium hidden md:block">Orders</h1>
            <div className="flex items-center gap-[10px]">
              <input
                type="text"
                placeholder="Search here..."
                value=''
                className='input'
              />
              <div
                className='relative'
                ref={dropdownRef}
              >
                <button className="button w-[150px] bg-orange-500 flex items-center justify-center"
                  onClick={() => setOrderType(!orderType)}
                >
                  Orders
                  <AiOutlineDown />
                </button>
                {orderType && (
                  <OrderModal />
                )}
              </div>

              <div
                className='relative'
                ref={transactionRef}
              >
                <button className="button w-[150px] bg-orange-500 flex items-center justify-center"
                  onClick={() => setTransactionType(!transactionType)}
                >
                  Transaction
                  <AiOutlineDown />
                </button>
                {transactionType && (
                  <TransactionModal />
                )}
              </div>

              <button className="  bg-green-600 h-[40px] rounded-[0.25rem] w-[220px] text-sm text-light flex items-center justify-center">
                Download
              </button>

            </div>
          </div>
          {/* <div className="p-6 flex flex-col items-center">
            <span className="text-sm  text-grayColor block mt-[6px]">
              Oops.. No Attractions found
            </span>
          </div> */}
          <div className='overflow-x-auto'>
            <table className="w-full">
              <thead className="bg-[#f3f6f9] text-grayColor text-[14px] text-left">
                <tr>
                  <th className="font-[500] p-3 whitespace-nowrap">
                    Ref.No
                  </th>
                  <th className="font-[500] p-3 whitespace-nowrap">
                    Agent
                  </th>
                  <th className="font-[500] p-3 whitespace-nowrap">
                    Agent
                  </th>
                  <th className="font-[500] p-3 whitespace-nowrap">
                    Activity
                  </th>
                  <th className="font-[500] p-3 whitespace-nowrap">
                    Booking Date
                  </th>
                  <th className="font-[500] p-3 whitespace-nowrap">
                    Purchase Date
                  </th>
                  <th className="font-[500] p-3 whitespace-nowrap">
                    Adults
                  </th>
                  <th className="font-[500] p-3 whitespace-nowrap">
                    Children
                  </th>
                  <th className="font-[500] p-3 whitespace-nowrap">
                    Infant
                  </th>
                  <th className="font-[500] p-3 whitespace-nowrap">
                    Price
                  </th>
                  <th className="font-[500] p-3 whitespace-nowrap">
                    Profit
                  </th>
                  <th className="font-[500] p-3 whitespace-nowrap">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-tableBorderColor">
                  <td className="p-3">#63b2cc</td>
                  <td className="p-3">Agent320</td>
                  <td className="p-3">11001</td>
                  <td className="p-3 ">
                    <div className='w-[150px] md:w-auto'>
                      Dubai Frame
                    </div>
                  </td>
                  <td className="p-3 whitespace-nowrap">2023-2-12</td>
                  <td className="p-3 whitespace-nowrap">2023-2-12</td>
                  <td className="p-3">1</td>
                  <td className="p-3">0</td>
                  <td className="p-3">0</td>
                  <td className="p-3">150 AED</td>
                  <td className="p-3">5 AED</td>
                  <td className="">
                    <span className='bg-green-500 text-sm text-light px-4 rounded'>Confirmed</span>
                  </td>
                </tr>
                <tr className="border-b border-tableBorderColor">
                  <td className="p-3">#63b2cc</td>
                  <td className="p-3">Agent200</td>
                  <td className="p-3">10201</td>
                  <td className="p-3">
                    Dubai Frame
                  </td>
                  <td className="p-3 ">2023-2-12</td>
                  <td className="p-3 ">2023-2-12</td>
                  <td className="p-3">1</td>
                  <td className="p-3">0</td>
                  <td className="p-3">0</td>
                  <td className="p-3">150 AED</td>
                  <td className="p-3">5 AED</td>
                  <td className="">
                    <span className='bg-main text-sm text-light px-4 rounded'>Cancelled</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="p-4">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainOrder