import React from 'react'

function ProfileSettings() {
  return (
    <div className=''>
      <div className='space-y-2 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>

        <div className=''>
          <label className='label'>Agent Name</label>
          <input className='input' type='text' placeholder='Ex: TravellerChoice' />
        </div>
        <div className='flex'>
          <div className='w-2/12'>
            <label className='label'>code</label>
            <select className='select' type='text' placeholder='Ex: Tc, North california' >
              <option>Ex: +451</option>
            </select>
          </div>
          <div className='w-10/12'>
            <label className='label'>Number</label>
            <input className='input' type='text' placeholder='Ex: Tc, North california' />
          </div>
        </div>
        <div className='flex'>
          <div className='w-2/12'>
            <label className='label'>code</label>
            <select className='select' type='text' placeholder='Ex: Tc, North california' >
              <option>Ex: +451</option>
            </select>
          </div>
          <div className='w-10/12'>
            <label className='label'> Telephone Number</label>
            <input className='input' type='text' placeholder='Ex: Tc, North california' />
          </div>
        </div>

        <div className=''>
          <label className='label'>Email</label>
          <input className='input' type='text' placeholder='Ex: TravellerChoice.ae' />
        </div>
        <div className=''>
          <label className='label'>Preffered Currency</label>
          <select className='select' >
            <option>Ex: AED</option>
            <option></option>
            <option></option>
          </select>
        </div>

        <div className=''>
          <label className='label'>Director</label>
          <input className='input' type='text' placeholder='Ex: Dubai' />
        </div>
        <div className=''>
          <label className='label'>Skype Id</label>
          <input className='input' type='text' placeholder='' />
        </div>
        <div className=''>
          <label className='label'>Whatsapp</label>
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

export default ProfileSettings