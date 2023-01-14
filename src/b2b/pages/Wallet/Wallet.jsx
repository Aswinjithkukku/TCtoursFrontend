import React, { useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { totalRevenuePng } from '../../../static/imagesB2B'
import AllTransaction from './AllTransaction'

function Wallet() {

  const [componenet, setComponent] = useState({
    all: true,
    completed: false,
    failed: false
  })
  return (
    <>
      <div className=' '>
        <div className="bg-white flex items-center justify-between gap-[10px] px-6 shadow-sm border-t py-2">
          <h1 className="font-[600] text-[15px] uppercase">
            Wallet
          </h1>
          <div className="text-sm text-grayColor">
            <Link to="/b2b" className="text-textColor">
              Dashboard{" "}
            </Link>
            <span>{">"} </span>
            <span>Wallet</span>
          </div>
        </div>
        <div className='p-6'>
          <div className="bg-white rounded shadow-sm mt-6">
            <div className="flex items-center justify-between border-b border-dashed p-4">
              <h1 className="font-medium">Wallet</h1>
            </div>

            <div className='grid grid-cols-2 p-12 gap-12'>
              <div className=''>
                <div className='bg-gray-200 rounded-sm py-3 shadow-sm px-2 lg:px-7'>
                  <div className='lg:flex justify-between'>
                    <div className=''>
                      <h2 className='lg:text-3xl text-2xl text-center lg:text-start font-black text-darktext tracking-wider mb-3'>Credit Money</h2>
                      <h5 className='text-xs lg:text-sm text-text mb-3'>My balance*</h5>
                      <div className='flex space-x-2 text-2xl tracking-wider font-bold  '>
                        <p className='text-main'>202</p>
                        <p className='text-text'>AED</p>
                      </div>
                      <div className='mb-5'>
                        <h5 className='text-xs lg:text-sm text-text mb-3'>is left on your wallet!</h5>
                        <h5 className='text-xs text-text mb-3'>add money to your wallet and expolre destinations</h5>
                        <h5 className='text-xs text-text mb-3'>withdraw the money in to your account.</h5>
                      </div>
                    </div>

                    <div className='lg:space-y-6 py-7 flex lg:block space-x-3 lg:space-x-0'>
                      <div className=''>
                        <button className='w-[15em] bg-dark text-light py-3 rounded-lg text-xs lg:text-sm'
                        >
                          ADD MONEY
                        </button>
                      </div>
                      <div className='flex justify-end items-end'>
                        <img src={totalRevenuePng} alt='revenue' className='w-[70px]' />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className=' '>
                <div className='bg-gray-200 rounded-sm py-3 shadow-sm px-2 lg:px-7'>
                  <div className='lg:flex justify-between'>
                    <div className=''>

                      <h2 className='lg:text-3xl text-2xl text-center lg:text-start font-black text-darktext tracking-wider mb-3'>Wallet Balance</h2>
                      <h5 className='text-xs lg:text-sm text-text mb-3'>My balance*</h5>
                      <div className='flex space-x-2 text-2xl tracking-wider font-bold  '>
                        <p className='text-main'>202</p>
                        <p className='text-text'>AED</p>
                      </div>
                      <div className='mb-5'>
                        <h5 className='text-xs lg:text-sm text-text mb-3'>is left on your wallet!</h5>
                        <h5 className='text-xs text-text mb-3'>add money to your wallet and expolre destinations</h5>
                        <h5 className='text-xs text-text mb-3'>withdraw the money in to your account.</h5>
                      </div>
                    </div>

                    <div className='lg:space-y-6 py-7 flex lg:block space-x-3 lg:space-x-0'>
                      <div className=''>
                        <button className='w-[15em] bg-dark text-light py-3 rounded-lg text-xs lg:text-sm'
                        >
                          WITHDRAW
                        </button>
                      </div>
                      <div className='flex justify-end items-end'>
                        <img src={totalRevenuePng} alt='revenue' className='w-[70px]' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tables */}
            <div className='px-6'>
            <div className="flex items-center justify-between border-y border-dashed p-4">
            <h1 className="font-medium">Details</h1>
            <div className="flex items-center gap-4">
              <button className={`px-2 bg-transparent font-bold tracking-wide text-textColor transition-all hover:bg-primaryColor hover:text-white`}
                onClick={() => setComponent({
                  all: true,
                  completed: false,
                  failed: false
                })} 
                >
                All Transactions
              </button>
              <button className={`px-2 bg-transparent text-textColor transition-all hover:bg-primaryColor hover:text-white`}
                onClick={() => setComponent({
                  all: false,
                  completed: true,
                  failed: false
                })} 
                >
                Completed Transatcions
              </button>
              <button className={`px-2 bg-transparent text-textColor transition-all hover:bg-primaryColor hover:text-white`}
                onClick={() => setComponent({
                  all: false,
                  completed: false,
                  failed: true
                })} 
                >
                Failed Transactions
              </button>
            </div>
          </div>
              <AllTransaction />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Wallet