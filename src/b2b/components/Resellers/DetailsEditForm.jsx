import React, { useState } from 'react'
import { GiFactory } from 'react-icons/gi'
import { GoPerson } from 'react-icons/go'
import { useSelector } from 'react-redux'

function DetailsEditForm() {

  const [details, setDetails] = useState({
    agency_name: "",
    address: "",
    website: "",
    country: "",
    trn_number: "",
    registration_number: "",
    city: "",
    zip_code: "",
    agent_name: "",
    Phonecode: "",
    PhoneNumber: "",
    TeleCode: "",
    TelephoneNumber: "",
    email: "",
    confirm_email: "",
    currency: "",
    director: "",
    skype: "",
    whatsapp: ""
  })

  const { countries, UAE } = useSelector(state => state.home)

  const handleChange = (e) => {
    setDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };


  return (
    <div className=''>
      <div className='p-3 lg:p-6'>
        <div className='flex items-center justify-between border-b border-dashed p-4'>
          <h2 className='text-xl font-bold tracking-wide space-x-2 flex'>
            <span className=''><GiFactory /> </span>
            <span className=''>Company Details</span>
          </h2>
        </div>
        <div className='space-y-2 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-4'>

          <div className=''>
            <label className='label'>Travel Agency Name</label>
            <input
              className='input'
              type='text'
              placeholder='Ex: TravellerChoice'
              name='agency_name'
              value={details.agency_name}
              onChange={handleChange}
            />
          </div>

          <div className=''>
            <label className='label'>Address</label>
            <input
              className='input'
              type='text'
              placeholder='Ex: Tc, North california'
              name='address'
              value={details.address}
              onChange={handleChange}
            />
          </div>

          <div className=''>
            <label className='label'>Website</label>
            <input className='input' type='text' placeholder='Ex: TravellerChoice.ae' />
          </div>
          <div className=''>
            <label className='label'>Country</label>
            <select className='select'
              name='country'
              value={details.country}
              onChange={handleChange}
            >
              <option>Ex: United Arab Emirates</option>
              {countries?.map((item, index) => (
                <option className='capitalize' value={item?._id} key={index}>{item?.countryName} </option>
              ))}
            </select>
          </div>
          {details.country === UAE?._Id && (
            <>
              <div className=''>
                <label className='label'>TRN Number</label>
                <input
                  className='input'
                  type='number'
                  placeholder='Ex: Dubai'
                  name='trn_number'
                  value={details.trn_number}
                  onChange={handleChange}
                />
              </div>

              <div className=''>
                <label className='label'>Company Registration Number</label>
                <input className='input'
                  type='number'
                  placeholder='Ex: Dubai'
                  name='registration_number'
                  value={details.registration_number}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
          <div className=''>
            <label className='label'>City</label>
            <input
              className='input'
              type='text'
              placeholder='Ex: Dubai'
              name='city'
              value={details.city}
              onChange={handleChange}
            />
          </div>
          <div className=''>
            <label className='label'>Zip Code</label>
            <input
              className='input'
              type='text'
              placeholder=''
              name='city'
              value={details.zip_code}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='flex items-center justify-between border-b border-dashed p-4'>
          <h2 className='text-xl font-bold tracking-wide space-x-2 flex'>
            <span className=''><GoPerson /> </span>
            <span className=''>Profile Details</span>
          </h2>
        </div>

        <div className='space-y-2 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-4'>

          <div className=''>
            <label className='label'>Agent Name</label>
            <input className='input' 
            type='text'
             placeholder='Ex: Name'
             name='agent_name'
             value={details.agent_name}
             onChange={handleChange}
             />
          </div>
          <div className=' flex space-x-1'>
            <div className='w-2/12'>
              <label className='label'>Code</label>
              <select className='select'>
                <option>Ex: +0</option>
                {countries?.map((item, index) => (
                <option className='capitalize' value={item?._id} key={index}>{item?.phonecode} </option>
              ))}
              </select>
            </div>
            <div className='w-10/12'>
              <label className='label'>Number</label>
              <input className='input' type='text' placeholder='Ex: 0000000000' />
            </div>
          </div>

          <div className=' flex space-x-1'>
            <div className='w-2/12'>
              <label className='label'>Code</label>
              <select className='select'>
                <option>Ex: +0</option>
                {countries?.map((item, index) => (
                <option className='capitalize' value={item?._id} key={index}>{item?.phonecode} </option>
              ))}
              </select>
            </div>
            <div className='w-10/12'>
              <label className='label'> Telephone Number</label>
              <input className='input' type='number' placeholder='Ex: 0000000000' />
            </div>
          </div>
          <div className=''>
            <label className='label'>Email</label>
            <input className='input' type='text' placeholder='Ex: example@email.com' />
          </div>

          <div className='w'>
            <label className='label'>Confirm Email</label>
            <input className='input' type='text' placeholder='Ex: example@email.com' />
          </div>
          <div className=''>
            <label className='label'>Reffered Currency</label>
            <input className='input' type='text' placeholder='Ex: AED' />
          </div>

          <div className=''>
            <label className='label'>Director</label>
            <input className='input' type='text' placeholder='Director' />
          </div>
          <div className=''>
            <label className='label'>Skype Id</label>
            <input className='input' type='text' placeholder='skypeid' />
          </div>

          <div className=''>
            <label className='label'>Whatsapp</label>
            <input className='input' type='number' placeholder='Ex: 000000000' />
          </div>
        </div>

        <div className='flex justify-end mt-6'>
          <button className='button w-[100px]'>Update</button>
        </div>

      </div>
    </div>
  )
}

export default DetailsEditForm