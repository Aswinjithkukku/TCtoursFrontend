import React from 'react'
import { BsDash } from 'react-icons/bs'
import { IoMdCart } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import priceConversion from '../../utils/PriceConversion'

function CartModal({ setCart }) {
  const navigate = useNavigate()
  const { excursionCart } = useSelector(state => state.excursion)
  const { selectedCurrency } = useSelector(state => state.home)

  return (
    <div className="absolute z-20 top-7 md:top-10 right-0 bg-light rounded-xl w-[400px] "  >
      <div className=" p-2">
        <div className='border rounded-lg overflow-hidden'>
          <div className='flex justify-start items-center h-10'>
            <h1 className='pl-3 text-gray-500  text-xl'><IoMdCart /></h1>
            <h1 className='px-2 text-gray-500  font-[800] tracking-wide text-xl'>Cart</h1>
          </div>
          {excursionCart?.map((item, index) => (
            <div className="  hover:bg-gray-100 p-2  border-b  overflow-hidden" key={index}>
              <div className='flex justify-end'>
                <button className='text-main text-xl bg-gray-200 rounded-full'>

                  <BsDash />
                </button>
              </div>
              <div className='flex space-x-2'>
                <div className='w-[50px] h-[40px] overflow-hidden '>
                  <img src="https://s.yimg.com/ny/api/res/1.2/S88wB9srlG3g52WgoGbnHw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MA--/https://s.yimg.com/os/creatr-uploaded-images/2021-12/73fab4e0-6c01-11ec-8f6f-7fead6a7c3f2" alt='name' className='w-full h-full object-cover ' />
                </div>
                <div className=''>
                  <p className='text-[14px] capitalize whitespace-normal leading-tight'>{item?.name}</p>
                  <div className='flex justify-end'>
                    <p className='text-[14px] font-[600] text-start whitespace-nowrap capitalize'>{priceConversion(item?.price, selectedCurrency, true)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CartModal