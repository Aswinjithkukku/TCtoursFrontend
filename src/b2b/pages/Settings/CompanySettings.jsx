import React from 'react'

function CompanySettings() {
  return (
    <div className=''>
      <div className='grid grid-cols-3 gap-[20px]'>

        <div className=''>
          <label className='label'>Travel Agency Name</label>
          <input className='input' type='text' placeholder='Ex: TravellerChoice' />
        </div>
        <div className=''>
          <label className='label'>TRN Number</label>
          <input className='input' type='number' placeholder='Ex: Dubai' />
        </div>

        <div className=''>
          <label className='label'>Company Registration Number</label>
          <input className='input' type='text' placeholder='Ex: Dubai' />
        </div>
        <div className=''>
          <label className='label'>Address</label>
          <input className='input' type='text' placeholder='Ex: Tc, North california' />
        </div>

        <div className=''>
          <label className='label'>Website</label>
          <input className='input' type='text' placeholder='Ex: TravellerChoice.ae' />
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
          <input className='input' type='text' placeholder='Ex: Dubai' />
        </div>
        <div className=''>
          <label className='label'>Zip Code</label>
          <input className='input' type='text' placeholder='' />
        </div>

      </div>
      <div className="mt-4 flex items-center justify-end gap-[12px]">
        <button
          className="button w-[100px] "
          type="button"
        >
          Update
        </button>
      </div>
    </div>
  )
}

export default CompanySettings