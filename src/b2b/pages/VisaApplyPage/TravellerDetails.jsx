import React from 'react'
import { Month } from '../../../utils/Month'

function TravellerDetails() {
  let limit =  new Date().getFullYear() 
  let year = []
  for(let i = limit ; i > limit - 100; i--){
   year.push(i)
  }

  let day = []
  for(let i = 1 ; i <= 31; i++){
    day.push(i)
  }
  return (
    <div className='p-6 text-darktext '>
      <div className='my-2 border px-3 py-4 bg-primaryColor rounded-[.25rem]'>
        <p className='font-[600] text-[20px] text-soft'>Traveller Details</p>
      </div>
      <div className='bg-white p-6 rounded-md shadow'>
        <div className='lg:grid grid-cols-12 gap-5 text-darktext space-y-3 lg:space-y-0 lg:py-2'>
          <div className='col-span-2'>
            <div className=''>
              <label className='label'>Mr/Mrs</label>
            </div>
            <div className=''>
              <select
                type='text'
                name='gender'
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none' >
                <option value={"male"}>Mr.</option>
                <option value={"female"}>Mrs.</option>
                <option value={"other"}>Ms.</option>
              </select>
            </div>
          </div>
          <div className='col-span-5'>
            <div className=''>
              <label className='label'>First Name</label>
            </div>
            <div className=''>
              <input
                type='text'
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                name='firstname'
              />
            </div>
          </div>
          <div className='col-span-5'>
            <div className=''>
              <label className='label'>Last Name</label>
            </div>
            <div className=''>
              <input
                type='text'
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                name='lastname'
              />
            </div>
          </div>
        </div>
        <div className='lg:grid grid-cols-12 gap-5 text-darktext space-y-3 lg:space-y-0 lg:py-2'>
          <div className='col-span-4'>
            <div className=''>
              <label className='label'>Email</label>
            </div>
            <div className=''>
              <input
                type='text'
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                name='email'
              />
            </div>
          </div>
          <div className='col-span-4'>
            <div className=''>
              <label className='label'>Country</label>
            </div>
            <div className=''>
              <select
                type='text'
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                name='country'
              >
                <option >Choose Country</option>
              </select>
            </div>
          </div>
          <div className='col-span-4'>
            <div className=''>
              <label className='label'>Contact Number</label>
            </div>
            <div className=''>
              <input
                type='number'
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                name='phone'
              />
            </div>
          </div>
        </div>
        <div className='lg:grid grid-cols-12 gap-5 text-darktext space-y-3 lg:space-y-0 lg:py-2'>
          <div className='col-span-6'>
            <div className=''>
              <label className='label'>Passport Number</label>
            </div>
            <div className=''>
              <input
                type='number'
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                name='email'
              />
            </div>
          </div>
          <div className='col-span-2'>
            <div className='w-full'>
              <label className='label'>Date of Birth</label>
            </div>
            <div className=''>
              <select
                type='number'
                placeholder='Day'
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                name='email'
              >
                <option hidden> Day</option>
                {day.map((item,index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className='col-span-2 flex items-end'>
            <div className='w-full'>
              <select
                type='number'
                placeholder='Month'
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                name='email'
              >
                <option hidden>Month</option>
                {Month.map((item,index) => (
                  <option key={index} value={item} className='capitalize'>{item} </option>
                ))}
              </select>
            </div>
          </div>
          <div className='col-span-2 flex items-end'>
            <div className='w-full'>
              <select
                type='number'
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                name='email'
              >
                <option hidden>Year</option>
                {year.map((item,index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TravellerDetails