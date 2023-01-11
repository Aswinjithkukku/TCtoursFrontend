import React from 'react'
import { FaLock } from 'react-icons/fa'
import { GiFactory } from 'react-icons/gi'
import { GoPerson } from 'react-icons/go'

function DetailsEditForm() {
  return (
    <div className='max-w-screen-2xl p-5 mx-auto text-darktext space-y-2 text-sm'>

    <div className=''>
      <h2 className='text-xl font-bold tracking-wide space-x-2 flex'>
        <span className=''><GiFactory /> </span>
        <span className=''>Company Details</span>
      </h2>
    </div>

    <div className='flex space-x-2 mx-2'>
      <span className='w-6/12'>
        <label className=''>Travel Agency Name</label>
        <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-md px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: TravellerChoice'></input>
      </span>
      <span className='w-6/12'>
        <label className=''>Address</label>
        <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-md px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: Tc, North california'></input>
      </span>
    </div>

    <div className='flex space-x-2 mx-2'>
      <span className='w-6/12'>
        <label className=''>Website</label>
        <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-md px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: TravellerChoice.ae'></input>
      </span>
      <span className='w-6/12'>
        <label className=''>Country</label>
        <select className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-md px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' >
          <option>Ex: United Arab Emirates</option>
          <option></option>
          <option></option>
        </select>
      </span>
    </div>

    <div className='flex space-x-2 mx-2'>
      <span className='w-6/12'>
        <label className=''>City</label>
        <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-md px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: Dubai'></input>
      </span>
      <span className='w-6/12'>
        <label className=''>Zip Code</label>
        <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-md px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder=''></input>
      </span>
    </div>

    <div className='pt-3'>
      <h2 className='text-xl font-bold tracking-wide space-x-2 flex'>
        <span className=''><GoPerson /> </span>
        <span className=''>Profile Details</span>
      </h2>
    </div>


    <div className='flex space-x-2 mx-2'>
      <span className='w-6/12'>
        <label className=''>Agent Name</label>
        <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-md px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: Name'></input>
      </span>
      <span className='w-6/12 flex space-x-1'>
        <div className='w-2/12'>
          <label className=''>Code</label>
          <select className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-md px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400'>
            <option>Ex: +451</option>
            <option></option>
            <option></option>
          </select>
        </div>
        <div className='w-10/12'>
          <label className=''>Number</label>
          <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-md px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: 0000000000'></input>
        </div>
      </span>
    </div>

    <div className='flex space-x-2 mx-2'>
      <span className='w-6/12 flex space-x-1'>
      <div className='w-2/12'>
          <label className=''>Code</label>
          <select className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-md px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400'>
            <option>Ex: +451</option>
          </select>
        </div>
        <div className='w-10/12'>
          <label className=''> Telephone Number</label>
          <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-md px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='number' placeholder='Ex: 0000000000'></input>
        </div>
      </span>
      <span className='w-6/12'>
        <label className=''>Email</label>
        <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-md px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: example@email.com'></input>
      </span>
    </div>

    <div className='flex space-x-2 mx-2'>
      <span className='w-6/12'>
        <label className=''>Confirm Email</label>
        <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-md px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: example@email.com'></input>
      </span>
      <span className='w-6/12'>
        <label className=''>Reffered Currency</label>
        <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-md px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: AED'></input>
      </span>
    </div>

    <div className='flex space-x-2 mx-2'>
      <span className='w-6/12'>
        <label className=''>Director</label>
        <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-md px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Director'></input>
      </span>
      <span className='w-6/12'>
        <label className=''>Skype Id</label>
        <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-md px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='skypeid'></input>
      </span>
    </div>

    <div className='flex space-x-2 mx-2'>
      <span className='w-6/12'>
        <label className=''>Whatsapp</label>
        <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-2 text-sm rounded-md px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='number' placeholder='Ex: 000000000'></input>
      </span>
    </div>

    <div className='flex justify-end'>
      <button className='py-2 text-sm text-light bg-primaryColor w-32 rounded-sm'>Update</button>
    </div>

  </div>
  )
}

export default DetailsEditForm