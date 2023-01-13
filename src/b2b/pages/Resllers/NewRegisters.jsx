import React from 'react'
import { FaLock } from 'react-icons/fa'
import { GiFactory } from 'react-icons/gi'
import { GoPerson } from 'react-icons/go'
import { Link } from 'react-router-dom'

function NewRegisters() {
  return (
    <div className=''>
      <div className="bg-white flex items-center justify-between gap-[10px] px-6 shadow-sm border-t py-2">
        <h1 className="font-[600] text-[15px] uppercase">
          New Reseller Register
        </h1>
        <div className="text-sm text-grayColor">
          <Link to="/b2b" className="text-textColor">
            Dashboard{" "}
          </Link>
          <span>{">"} </span>
          <span>New Register</span>
        </div>
      </div>
      <div className='p-6'>
        <div className="bg-white rounded shadow-sm mt-6 p-6 ">
          <div className='flex items-center justify-between border-b border-dashed p-4'>
            <h2 className='text-xl font-bold tracking-wide space-x-2 flex'>
              <span className=''><GiFactory /> </span>
              <span className=''>Company Details</span>
            </h2>
          </div>
          <div className='grid grid-cols-3 gap-[20px] mt-4'>

            <div className=''>
              <label className='label'>Travel Agency Name</label>
              <input className='input' type='text' placeholder='Ex: TravellerChoice'></input>
            </div>
            <div className=''>
              <label className='label'>Address</label>
              <input className='input' type='text' placeholder='Ex: Tc, North california'></input>
            </div>

            <div className=''>
              <label className='label'>Website</label>
              <input className='input' type='text' placeholder='Ex: TravellerChoice.ae'></input>
            </div>
            <div className=''>
              <label className='label'>Country</label>
              <select className='select' >
                <option>Ex: United Arab Emirates</option>
                <option></option>
                <option></option>
              </select>
            </div>

            <div className=''>
              <label className='label'>City</label>
              <input className='input' type='text' placeholder='Ex: Dubai'></input>
            </div>
            <div className=''>
              <label className='label'>Zip Code</label>
              <input className='input' type='text' placeholder=''></input>
            </div>
          </div>
          <div className='pt-3 flex items-center justify-between border-b border-dashed p-4'>
            <h2 className='text-xl font-bold tracking-wide space-x-2 flex'>
              <span className=''><GoPerson /> </span>
              <span className=''>Profile Details</span>
            </h2>
          </div>

          <div className='grid grid-cols-3 gap-[20px] mt-4'>

            <div className=''>
              <label className='label'>Agent Name</label>
              <input className='input' type='text' placeholder='Ex: Name'></input>
            </div>
            <div className=' flex space-x-1'>
              <div className='w-2/12'>
                <label className='label'>Code</label>
                <select className='select'>
                  <option>Ex: +451</option>
                  <option></option>
                  <option></option>
                </select>
              </div>
              <div className='w-10/12'>
                <label className='label'>Number</label>
                <input className='input' type='text' placeholder='Ex: 0000000000'></input>
              </div>
            </div>

            <div className=' flex space-x-1'>
              <div className='w-2/12'>
                <label className='label'>Code</label>
                <select className='select'>
                  <option>Ex: +451</option>
                </select>
              </div>
              <div className='w-10/12'>
                <label className='label'> Telephone Number</label>
                <input className='input' type='number' placeholder='Ex: 0000000000'></input>
              </div>
            </div>
            <div className=''>
              <label className='label'>Email</label>
              <input className='input' type='text' placeholder='Ex: example@email.com'></input>
            </div>

            <div className='w'>
              <label className='label'>Confirm Email</label>
              <input className='input' type='text' placeholder='Ex: example@email.com'></input>
            </div>
            <div className=''>
              <label className='label'>Reffered Currency</label>
              <input className='input' type='text' placeholder='Ex: AED'></input>
            </div>

            <div className=''>
              <label className='label'>Director</label>
              <input className='input' type='text' placeholder='Director'></input>
            </div>
            <div className=''>
              <label className='label'>Skype Id</label>
              <input className='input' type='text' placeholder='skypeid'></input>
            </div>

            <div className=''>
              <label className='label'>Whatsapp</label>
              <input className='input' type='number' placeholder='Ex: 000000000'></input>
            </div>
          </div>

          <div className='flex justify-end mt-6'>
            <button className='button w-[100px]'>Create</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NewRegisters