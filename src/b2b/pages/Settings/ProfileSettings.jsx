import React, { useState } from 'react'
import { BtnLoader } from '../../components'
import axios from '../../../axios'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

function ProfileSettings() {

  const { agent,token } = useSelector(state => state.agents)

  const [data, setData] = useState({
    name: agent?.name || '',
    country: agent?.country || "",
    phoneNumber: agent?.phoneNumber || '',
    telephoneNumber: agent?.telephoneNumber|| "",
    email: agent?.email || '',
    designation: agent?.designation || '',
    skypeId: agent?.skypeId || '',
    whatsappNumber: agent?.whatsappNumber || ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const { countries } = useSelector(state => state.home)

  const onChangeHandler = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      setError('')
      setIsLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      const response = await axios.patch("/b2b/resellers/auth/update/profileSetings", data, config);
      setIsLoading(false);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Update Successful',
      })
      return response.data;
    } catch (err) {
      setError(
        err?.response?.data?.error || "Something went wrong, Try again"
      );
      setIsLoading(false);
    }
  }

  const countryArray = countries?.filter((item) => item._id === data.country)

  return (
    <div className=''>
      <form onSubmit={submitHandler}>
        <div className='space-y-2 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>

          <div className=''>
            <label className='label'>Agent Name</label>
            <input className='input'
              type='text'
              placeholder='Ex: TravellerChoice'
              name='name'
              value={data.name}
              onChange={onChangeHandler}
            />
          </div>
          <div className=''>
            <label className='label'>Country</label>
            <select className='select'
              name='country'
              value={data.country}
              onChange={onChangeHandler}
            >
              <option>Ex: United Arab Emirates</option>
              {countries?.map((item, index) => (
                <option className='capitalize' value={item?._id} key={index}>{item?.countryName} </option>
              ))}
            </select>
          </div>
          <div className='flex gap-2'>
            <div className='w-2/12'>
              <label className='label'>code</label>
              <input className='input'
                type='text'
                value={countryArray?.map((item) => item?.phonecode) || ''}
                readOnly />
            </div>
            <div className='w-10/12'>
              <label className='label'>Number</label>
              <input className='input'
                type='number'
                placeholder='Ex: Tc, North california'
                name='phoneNumber'
                value={data.phoneNumber}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className='flex gap-2'>
            <div className='w-2/12'>
              <label className='label'>code</label>
              <input className='input'
                readOnly
                type='text'
                value={countryArray?.map((item) => item?.phonecode) || ''}
              />
            </div>
            <div className='w-10/12'>
              <label className='label'> Telephone Number</label>
              <input className='input'
                type='number'
                placeholder='Ex: Tc, North california'
                name='telephoneNumber'
                value={data.telephoneNumber}
                onChange={onChangeHandler}
              />
            </div>
          </div>

          <div className=''>
            <label className='label'>Email</label>
            <input className='input'
              type='email'
              placeholder='Ex: TravellerChoice.ae'
              name='email'
              value={data.email}
              onChange={onChangeHandler}
            />
          </div>
          <div className=''>
            <label className='label'>Preffered Currency</label>
            <input className='input'
              value={countryArray?.map((item) => item?.currencySymbol) || ''}
              readOnly />
          </div>

          <div className=''>
            <label className='label'>Designation</label>
            <input className='input'
              type='text'
              placeholder='Ex: Dubai'
              name='designation'
              value={data.designation}
              onChange={onChangeHandler}
            />
          </div>
          <div className=''>
            <label className='label'>Skype Id</label>
            <input className='input'
              type='text'
              placeholder=''
              name='skypeId'
              value={data.skypeId}
              onChange={onChangeHandler}
            />
          </div>
          <div className=''>
            <label className='label'>Whatsapp</label>
            <input className='input'
              type='number'
              placeholder=''
              name='whatsappNumber'
              value={data.whatsappNumber}
              onChange={onChangeHandler}
            />
          </div>

        </div>
        <div className="mt-4 flex items-center justify-end gap-[12px]">
        {error && (
            <div className='flex justify-end'>
              <p className='text-main text-xs capitalize'>{error} </p>
            </div>
          )}
          <button
            className="button w-[100px] "
            type="submit"
          >
            {isLoading ? <BtnLoader /> : 'Update'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProfileSettings