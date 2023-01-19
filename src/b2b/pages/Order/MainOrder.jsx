import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
// import { AllOrderMainTable, CancelledOrderMainTable, ConfirmedOrderMainTable } from '../../components/Orders'
import { BiEditAlt, BiPhone, BiUser } from 'react-icons/bi'
import { AiOutlineDown } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'
import { FaBus } from 'react-icons/fa'
import { MdDelete, MdOutlineEmail } from 'react-icons/md'
import Pagination from '../../components/Pagination'
import OrderModal from './OrderModal'
import { useHandleClickOutside } from '../../../hooks'
import TransactionModal from './TransactionModal'

function MainOrder() {
  const [orderType, setOrderType] = useState(false)
  const [transactionType, setTransactionType] = useState(false)
  const [orderDetails, setOrderDetails] = useState(false)

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
                    Agent code
                  </th>
                  <th className="font-[500] p-3 whitespace-nowrap">
                    Activity
                  </th>
                  <th className="font-[500] p-3 whitespace-nowrap">
                    Booking Type
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
                <tr className="border-b border-tableBorderColor"  onClick={() => setOrderDetails(!orderDetails)}>
                  <td className="p-3">#63b2cc</td>
                  <td className="p-3">Agent200</td>
                  <td className="p-3">10201</td>
                  <td className="p-3">
                    Dubai Frame
                  </td>
                  <td className="p-3">Ticket</td>
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
                {orderDetails && (
                  <tr className="border-b border-tableBorderColor">
                    <td colSpan="8" className="p-3">
                      <div className="flex flex-wrap items-start gap-[3em]">
                        <div className="flex items-start gap-[1em]">
                          <div className="w-[150px] max-h-[100px] rounded overflow-hidden">
                            <img
                              src='https://s.yimg.com/ny/api/res/1.2/S88wB9srlG3g52WgoGbnHw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MA--/https://s.yimg.com/os/creatr-uploaded-images/2021-12/73fab4e0-6c01-11ec-8f6f-7fead6a7c3f2'
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h2 className="text-base font-[600]">
                              title
                            </h2>
                            <span className="font-medium block mt-1">
                              name
                            </span>
                            <span className="block text-grayColor mt-1">
                              15/4/2001
                            </span>
                          </div>
                        </div>
                        <div>
                          <h2 className="font-medium text-grayColor">
                            User Details
                          </h2>
                          <span className="flex items-center gap-[7px] mt-1">
                            <BiUser /> name
                          </span>
                          <span className="flex items-center gap-[7px] mt-1">
                            <MdOutlineEmail /> main@email.com
                          </span>
                          <span className="flex items-center gap-[7px] mt-1">
                            <FiMapPin /> India
                          </span>
                          <span className="flex items-center gap-[7px] mt-1">
                            <BiPhone /> 99945862
                          </span>
                        </div>
                        <div>
                          <h2 className="font-medium text-grayColor">
                            Transfer Option
                          </h2>
                          {/* {order?.activities?.transferType ===
                                "without" ? (
                                    <span className="flex items-center gap-[7px] mt-1 capitalize">
                                        <MdNoTransfer />{" "}
                                        {order?.activities?.transferType}{" "}
                                        Transfer
                                    </span>
                                ) : ( */}
                          <span className="flex items-center gap-[7px] mt-1 capitalize">
                            <FaBus />{" "}

                            Transfer
                          </span>
                          {/* )} */}
                          "without"
                          <span className="block mt-1">
                            Driver -{" "}
                            <span className="text-sm font-medium">
                              Not Assigned
                            </span>
                          </span>

                          <span className="block mt-2">
                            Booking Confirmation Number:{" "}
                            <span className="text-sm font-medium">
                              confirmed
                            </span>
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
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