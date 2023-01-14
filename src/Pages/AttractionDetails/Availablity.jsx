import React, { useEffect } from 'react'
import { BsDoorClosedFill, BsDoorOpenFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
// import hours from '../../static/images/hours.png'

function Availablity() {
  const { excursion } = useSelector(state => state.excursion)

  const avail = excursion?.availability && excursion?.availability?.filter(item => item?.isEnabled === true)


  return (
    <main>
      <div className='font-semibold text-xl tracking-wide'>
        Availability
      </div>
      <div className=''>
        <div className='col-span-10 space-y-3 py-3 text-darktext'>
          <div className=' '>
            <span className=''>
              <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>
                {excursion?.availability?.map((item, index) => (
                  <div className='bg-white rounded-2xl shadow-sm lg:w-[190px] h-[100px] ' key={index}>
                    <div className='py-1 border-b border-dashed'>
                      <p className='text-center font-bold uppercase ' >{item?.day}</p>
                    </div>
                    <div className='mt-2'>
                      <div className=''>
                        <div className='flex space-x-1 justify-center'>
                          <span className='text-lightblue '><BsDoorOpenFill />  </span>
                          <span className=''>{item?.open} </span>
                        </div>
                        <div className='flex space-x-1 justify-center'>
                          <span className='text-lightblue'><BsDoorClosedFill /> </span>
                          <span className=''>{item?.close} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </span>
          </div>
          {/* <div className='flex space-x-2'>
            <span className=''>Off dates : </span>
            <span className=''>
              {excursion?.offDates &&
                excursion?.offDates?.length > 0 ?
                excursion?.offDates?.map((item, index) => (
                  <p className='bg-[#E6e6e6] text-center rounded w-[100px] uppercase' key={index}>{item?.fromDate + " - " + item?.toDate}</p>
                ))
                : (
                  <div className='bg-lighttrans'>No Off Dates</div>
                )}
            </span>

          </div> */}
        </div>
      </div>
    </main>
  )
}

export default Availablity