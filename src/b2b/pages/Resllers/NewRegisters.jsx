import React from 'react'

function NewRegisters() {
  return (
    <div>
      <div className='space-y-3 mx-5'>
        <div className=''>
          <h1 className='text-[25px] font-bold text-darktext'>New Registration</h1>
        </div>
        
        <div className='flex space-x-4'>
          <span className='w-6/12'>
            <label className=''>Company Name</label>
            <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-lg px-2 focus:outline-none focus:border-lightblue focus:ring-1 focus:ring-lightborder-lightblue' type='text' placeholder='Ex: Name'/>
          </span>
          <span className='w-6/12 '>
              <label className=''>Representative Name</label>
              <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-lg px-2 focus:outline-none focus:border-lightblue focus:ring-1 focus:ring-lightborder-lightblue' type='text' placeholder='Ex: 0000000000'/>
          </span>
        </div>

        <div className='flex space-x-4'>
          <span className='w-6/12'>
            <label className=''>Email</label>
            <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-lg px-2 focus:outline-none focus:border-lightblue focus:ring-1 focus:ring-lightborder-lightblue' type='email' placeholder='Ex: Name'/>
          </span>
          <span className='w-6/12 flex space-x-1'>
            <div className='w-2/12'>
              <label className=''>Code</label>
              <select className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-lg px-2 focus:outline-none focus:border-lightblue focus:ring-1 focus:ring-lightborder-lightblue'>
                <option>Ex: +451</option>
                <option></option>
                <option></option>
              </select>
            </div>
            <div className='w-10/12'>
              <label className=''>Number</label>
              <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-lg px-2 focus:outline-none focus:border-lightblue focus:ring-1 focus:ring-lightborder-lightblue' type='text' placeholder='Ex: 0000000000'/>
            </div>
          </span>
        </div>

        <div className='flex space-x-4'>
          <span className='w-6/12'>
            <label className=''>Vat Number</label>
            <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-lg px-2 focus:outline-none focus:border-lightblue focus:ring-1 focus:ring-lightborder-lightblue' type='text' placeholder='Ex: Name'/>
          </span>
          <span className='w-6/12 '>
            <label className=''>Password</label>
              <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-lg px-2 focus:outline-none focus:border-lightblue focus:ring-1 focus:ring-lightborder-lightblue' type='text' placeholder='Ex: 0000000000'/>
          </span>
        </div>

        <div className='flex space-x-4'>
          <span className='w-6/12'>
            <label className=''>Confirm Password</label>
            <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-lg px-2 focus:outline-none focus:border-lightblue focus:ring-1 focus:ring-lightborder-lightblue' type='text' placeholder='Ex: Name'/>
          </span>
        </div>

        <div className='flex justify-end'>
          <button className='text-sm bg-primaryColor text-light rounded-md px-8 py-2'>Submit</button>
        </div>

      </div>
    </div>
  )
}

export default NewRegisters