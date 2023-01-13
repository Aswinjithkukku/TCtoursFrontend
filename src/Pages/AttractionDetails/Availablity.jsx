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
              <div className='grid lg:grid-cols-7 grid-cols-2 gap-3'>
                {excursion?.availability?.map((item, index) => (
                  <div className='bg-[#E6e6e6] rounded w-[100px] h-[100px]  flex justify-center items-center '>
                    <div className=''>
                    <p className='text-center  uppercase' key={index}>{item?.day}</p>
                    <div className='flex space-x-1 justify-center'>
                      <span className=''><BsDoorOpenFill /> </span>
                      <span className=''>{item?.open} </span>
                    </div>
                    <div className='flex space-x-1 justify-center'>
                      <span className=''><BsDoorClosedFill /> </span>
                      <span className=''>{item?.close} </span>
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