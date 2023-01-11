import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BsCalendar2Week, BsFillCartCheckFill } from 'react-icons/bs'
import { FaHandsHelping, FaLock } from 'react-icons/fa'
import { GiClockwork, GiFactory, GiReceiveMoney } from 'react-icons/gi'
import { GoPerson } from 'react-icons/go'
import { ImFilePdf, ImProfile } from 'react-icons/im'
import { IoIosPricetags } from 'react-icons/io'
import { TfiPackage } from 'react-icons/tfi'
import { TbBuildingWarehouse } from 'react-icons/tb'

function B2BRegisterPage() {
  return (
    <div className='max-w-screen-xl mx-auto my-10'>
      <div className='bg-[#C0DEFF] rounded-3xl'>
        <div className='grid grid-cols-12 gap-0 p-10'>
          <div className='1 col-span-7 text-darktext space-y-2 text-sm'>

            <div className=''>
              <h2 className='text-xl font-bold tracking-wide space-x-2 flex'>
                <span className=''><GiFactory /> </span>
                <span className=''>Company Details</span>
              </h2>
            </div>

            <div className='flex space-x-2 mx-2'>
              <span className='w-6/12'>
                <label className=''>Travel Agency Name</label>
                <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: TravellerChoice'></input>
              </span>
              <span className='w-6/12'>
                <label className=''>Address</label>
                <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: Tc, North california'></input>
              </span>
            </div>

            <div className='flex space-x-2 mx-2'>
              <span className='w-6/12'>
                <label className=''>Website</label>
                <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: TravellerChoice.ae'></input>
              </span>
              <span className='w-6/12'>
                <label className=''>Country</label>
                <select className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' >
                  <option>Ex: United Arab Emirates</option>
                  <option></option>
                  <option></option>
                </select>
              </span>
            </div>

            <div className='flex space-x-2 mx-2'>
              <span className='w-6/12'>
                <label className=''>City</label>
                <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: Dubai'></input>
              </span>
              <span className='w-6/12'>
                <label className=''>Zip Code</label>
                <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder=''></input>
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
                <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: Name'></input>
              </span>
              <span className='w-6/12 flex space-x-1'>
                <div className='w-2/12'>
                  <label className=''>Code</label>
                  <select className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400'>
                    <option>Ex: +451</option>
                    <option></option>
                    <option></option>
                  </select>
                </div>
                <div className='w-10/12'>
                  <label className=''>Number</label>
                  <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: 0000000000'></input>
                </div>
              </span>
            </div>

            <div className='flex space-x-2 mx-2'>
              <span className='w-6/12 flex space-x-1'>
              <div className='w-2/12'>
                  <label className=''>Code</label>
                  <select className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400'>
                    <option>Ex: +451</option>
                  </select>
                </div>
                <div className='w-10/12'>
                  <label className=''> Telephone Number</label>
                  <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='number' placeholder='Ex: 0000000000'></input>
                </div>
              </span>
              <span className='w-6/12'>
                <label className=''>Email</label>
                <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: example@email.com'></input>
              </span>
            </div>

            <div className='flex space-x-2 mx-2'>
              <span className='w-6/12'>
                <label className=''>Confirm Email</label>
                <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: example@email.com'></input>
              </span>
              <span className='w-6/12'>
                <label className=''>Reffered Currency</label>
                <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: AED'></input>
              </span>
            </div>

            <div className='flex space-x-2 mx-2'>
              <span className='w-6/12'>
                <label className=''>Director</label>
                <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Director'></input>
              </span>
              <span className='w-6/12'>
                <label className=''>Skype Id</label>
                <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='skypeid'></input>
              </span>
            </div>

            <div className='flex space-x-2 mx-2'>
              <span className='w-6/12'>
                <label className=''>Whatsapp</label>
                <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='number' placeholder='Ex: 000000000'></input>
              </span>
            </div>


            <div className='pt-3'>
              <h2 className='text-xl font-bold tracking-wide space-x-2 flex'>
                <span className=''><FaLock /> </span>
                <span className=''>Password Settings</span>
              </h2>
            </div>

            <div className='flex space-x-2 mx-2'>
              <span className='w-6/12'>
                <label className=''>Username</label>
                <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='text' placeholder='Ex: username@123'></input>
              </span>
              <span className='w-6/12'>
                <label className=''>Password</label>
                <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='passsword' placeholder='***********'></input>
              </span>
            </div>

            <div className='flex space-x-2 mx-2'>
              <span className='w-6/12'>
                <label className=''>Confirm Password</label>
                <input className='placeholder:text-sm placeholder:text-text w-full border border-darktext py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400' type='password' placeholder='***********'></input>
              </span>
            </div>

          </div>
          <div className='2 col-span-5 text-darktext space-y-2 mx-3'>

          <div className=''>
              <h2 className='text-xl font-bold tracking-wide flex space-x-2 pb-4'>
                <span className=''><ImProfile /> </span>
                <span className=''>Registers</span>
              </h2>
            </div>

            <div className=''>
              <p className='mb-2'>Welcome to Travellers Choice B2B website made for our agents!</p>
              <p className=''>You can resell sdvsgdfgsfdjgs sdsjhdfsjd sfvdshjfgsd fdnbfvsjdfsadf snbvfjsfjhshfjsa fsfjsjsd fdsnbfajsfdvsjafvdsnb sdnfdsgjfdv sdfnsfdsgjvd sncshgdcv sncsndfcgsdnfcvsg nddbfc sbcvsh x</p>
            </div>

            <div className=''>
              <h2 className=' font-medium tracking-wide flex py-2 space-x-2'>
                <span className='text-lg'><TfiPackage /> </span>
                <span className=''>Build your own package</span>
              </h2>
            </div>

            <div className=''>
              <h2 className=' font-medium tracking-wide flex py-2 space-x-2'>
                <span className='text-lg'><IoIosPricetags /> </span>
                <span className=''>Best Rate availability</span>
              </h2>
            </div>

            <div className=''>
              <h2 className=' font-medium tracking-wide flex py-2 space-x-2'>
                <span className='text-lg'><ImFilePdf /> </span>
                <span className=''>Online Settlements of invoices & Reciepts</span>
              </h2>
            </div>

            <div className=''>
              <h2 className=' font-medium tracking-wide flex py-2 space-x-2'>
                <span className='text-lg'><FaHandsHelping /> </span>
                <span className=''>Create your sub agents</span>
              </h2>
            </div>

            <div className=''>
              <h2 className=' font-medium tracking-wide flex py-2 space-x-2'>
                <span className='text-lg'><GiReceiveMoney /> </span>
                <span className=''>Strong mrak-up modules</span>
              </h2>
            </div>

            <div className=''>
              <h2 className=' font-medium tracking-wide flex py-2 space-x-2'>
                <span className='text-lg'><TbBuildingWarehouse /> </span>
                <span className=''>Live inventory of Products</span>
              </h2>
            </div>

            <div className=''>
              <h2 className=' font-medium tracking-wide flex py-2 space-x-2'>
                <span className='text-lg'><AiFillHeart /> </span>
                <span className=''>Add to favourite list</span>
              </h2>
            </div>

            <div className=''>
              <h2 className=' font-medium tracking-wide flex py-2 space-x-2'>
                <span className='text-lg'><GiClockwork /> </span>
                <span className=''>Multiple Tour option, Transfer option & time slots for the same tour</span>
              </h2>
            </div>

            <div className=''>
              <h2 className=' font-medium tracking-wide flex py-2 space-x-2'>
                <span className='text-lg'><BsFillCartCheckFill /> </span>
                <span className=''>Shopping cart application</span>
              </h2>
            </div>

            <div className=''>
              <h2 className=' font-medium tracking-wide flex py-2 space-x-2'>
                <span className='text-lg'><BsCalendar2Week /></span>
                <span className=''>Get relaxed with instant confirmation on bookings</span>
              </h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default B2BRegisterPage