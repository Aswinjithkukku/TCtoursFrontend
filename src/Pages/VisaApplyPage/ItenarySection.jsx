import React from 'react'

function ItenarySection() {

  const onChangeHandler = (e) => {
    ''
  }
  return (
    <div className='md:max-w-screen-xl md:mx-auto text-darktext my-5'>
      <div className='my-2 border px-3 py-4 bg-primaryColor rounded-lg'>
        <p className='font-[600] text-[20px] text-soft'>Itenary</p>
      </div>
      <div className='grid grid-cols-12 gap-3 rounded-md shadow-sm bg-white p-6'>
        <div className='col-span-4 flex flex-col'>
          <label htmlFor="" className='label'>Visa Type</label>
          <select 
          className='w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none'
          value=''
          onChange={onChangeHandler}
          >
            <option hidden>Choose Visa Type</option>
            <option>30 Days of Dubai</option>
          </select>
        </div>
        <div className='col-span-2'>
          <label htmlFor="" className='label'>From Date</label>
          <input className='w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none'/>
        </div>
        <div className='col-span-2'>
          <label htmlFor="" className='label'>To Date</label>
          <input className='w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none'/>
        </div>
        <div className='col-span-2 flex flex-col'>
          <label htmlFor="" className='label'>Adult</label>
          <select 
          className='w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none'
          value=''
          onChange={onChangeHandler}
          >
            <option hidden>Choose</option>
            <option></option>
          </select>
        </div>
        <div className='col-span-2 flex flex-col'>
          <label htmlFor="" className='label'>Children</label>
          <select 
          className='w-full py-2 rounded-md p-1 text-primaryColor border border-lightblue outline-none'
          value=''
          onChange={onChangeHandler}
          >
            <option hidden>Choose</option>
            <option></option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ItenarySection