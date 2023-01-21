import React, { useEffect, useState } from 'react'
import { BsDash, BsPersonFill } from 'react-icons/bs'
import { IoMdCart } from 'react-icons/io'
import { FaBaby, FaChild } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import priceConversion from '../../utils/PriceConversion'
import { removeFromCart } from '../../redux/slices/excursionSlice'
import { AiOutlineClose } from 'react-icons/ai'

function MobileCartModal({ mobileCart, setMobileCart }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [price, setPrice] = useState(0)

  const { excursionCart } = useSelector(state => state.excursion)
  const { selectedCurrency } = useSelector(state => state.home)

  useEffect(() => {
    const sum = excursionCart?.reduce((acc, data) => {
      return Number(acc) + Number(data?.price)
    }, 0)
    setPrice(sum)
  }, [excursionCart])
  return (
    <div className={`fixed ${mobileCart ? "bottom-0" : "-bottom-full "} bg-light rounded-t-3xl max-h-[85vh] overflow-y-auto w-full z-30 transition-all duration-500`}>
      <div className='py-10 p-7 space-y-5'>
        <div className=' flex justify-between items-center border-b border-dashed pb-3'>
          <div className=''>
            <h2 className='text-3xl text-darktext font-bold'>Cart</h2>
          </div>
          <div className=' text-3xl' onClick={() => setMobileCart(!mobileCart)}><AiOutlineClose /></div>
        </div>

        <>
          {excursionCart?.length <= 0 && (
            <div className='flex justify-center py-10'>
              <p className='text-sm text-text'>Your Cart is empty.....</p>
            </div>
          )}
          {excursionCart?.map((item, index) => (
            <div className="  hover:bg-gray-100 p-2  border-b  overflow-hidden" key={index}>
              <div className='flex justify-end'>
                <button className='text-main text-xl bg-gray-200 rounded-full'
                  onClick={() => {
                    dispatch(removeFromCart(item?._id))
                  }}
                >
                  <BsDash />
                </button>
              </div>

              <div className='flex space-x-2'>
                <div className='min-w-[50px] h-[50px] overflow-hidden rounded-[.3rem]'>
                  <img src="https://s.yimg.com/ny/api/res/1.2/S88wB9srlG3g52WgoGbnHw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MA--/https://s.yimg.com/os/creatr-uploaded-images/2021-12/73fab4e0-6c01-11ec-8f6f-7fead6a7c3f2" alt='name' className='w-full h-full object-cover ' />
                </div>
                <div className=''>
                  <p className='text-[14px] capitalize whitespace-normal leading-tight text-darktext'>{item?.name}</p>
                  <p className='text-text text-xs'>Date: {item?.date}</p>
                </div>
              </div>

              <div className='text-sm flex  items-center space-x-2 mt-1'>
                {item?.adult > 0 && (
                  <div className='gap-1 flex bg-gray-200 text-gray-600 py-1 px-1 rounded-md items-center'>
                    <span className=''>{item?.adult}</span>
                    <span className=''><BsPersonFill /> </span>
                    <span className=''>{priceConversion(item?.adultPrice, selectedCurrency, true)}</span>
                  </div>
                )}
                {item?.child > 0 && (
                  <div className='gap-1 flex bg-gray-200 text-gray-600 py-1 px-1 rounded-md items-center'>
                    <span className=''>{item?.child} </span>
                    <span className=''><FaChild /></span>
                    <span className=''>{priceConversion(item?.childPrice, selectedCurrency, true)} </span>
                  </div>
                )}
                {item?.infant > 0 && (
                  <div className='gap-1 flex bg-gray-200 text-gray-600 py-1 px-1 rounded-md items-center'>
                    <span className=''>{item?.infant}</span>
                    <span className=''><FaBaby /> </span>
                    <span className=''>{priceConversion(item?.infantPrice, selectedCurrency, true)}</span>
                  </div>
                )}
              </div>

              <div className='flex justify-end'>
                <p className='text-[15px] font-[600] text-start whitespace-nowrap capitalize text-darktext'>{priceConversion(item?.price, selectedCurrency, true)}</p>
              </div>
            </div>
          ))}
          <div className='flex justify-between m-1'>
            <span className='flex space-x-1 items-center text-darktext'>
              <p className='text-[13px] tracking-tight'>Grand Total:</p>
              <p className='text-lg  font-semibold'>{priceConversion(price, selectedCurrency, true)}</p>
            </span>
            <button className='h-[35px] w-[150px] rounded-md bg-lightblue text-white text-[14px]'>
              Book Now
            </button>
          </div>
        </>
      </div>
    </div>
  )
}

export default MobileCartModal