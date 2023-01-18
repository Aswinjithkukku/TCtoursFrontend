import React, { useState } from 'react'
import { GiFactory } from 'react-icons/gi'
import { GoPerson } from 'react-icons/go'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../../axios'
import { BtnLoader } from '../../components'

function NewRegisters() {
  const navigate = useNavigate()

  const [data, setData] = useState({
    companyName: '',
    address: '',
    country: '',
    trnNumber: '',
    registrationNumber: '',
    website: '',
    city: '',
    zipCode: '',
    name: "",
    phoneNumber: '',
    telephoneNumber: '',
    email: '',
    designation: '',
    skypeId: '',
    whatsappNumber: ''
  })

  const onChangeHandler = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const { token } = useSelector(state => state.agents)
  const { countries } = useSelector(state => state.home)

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

      const response = await axios.post("/b2b/resellers/register", data, config);
      setIsLoading(false);
      navigate('/b2b/resellers')
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
      <div className="bg-white flex items-center justify-between gap-[10px] px-2 lg:px-6 shadow-sm border-t py-2">
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
      <div className='p-2 lg:p-6'>
        <form onSubmit={submitHandler}>
          <div className="bg-white rounded shadow-sm mt-2 lg:mt-6 p-3 lg:p-6 ">
            <div className='flex items-center justify-between border-b border-dashed p-4'>
              <h2 className='text-xl font-bold tracking-wide space-x-2 flex'>
                <span className=''><GiFactory /> </span>
                <span className=''>Company Details</span>
              </h2>
            </div>
            <div className='space-y-2 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-4'>

              <div className=''>
                <label className='label'>Travel Agency Name</label>
                <input className='input'
                  type='text'
                  placeholder='Ex: TravellerChoice'
                  name='companyName'
                  value={data.companyName}
                  onChange={onChangeHandler}
                  required
                />
              </div>

              <div className=''>
                <label className='label'>Address</label>
                <input className='input'
                  type='text'
                  placeholder='Ex: Tc, North california'
                  name='address'
                  value={data.address}
                  onChange={onChangeHandler}
                  required
                />
              </div>

              <div className=''>
                <label className='label'>Country</label>
                <select className='select'
                  name='country'
                  value={data.country}
                  onChange={onChangeHandler}
                >
                  <option className='text-text'>Ex: United Arab Emirates</option>
                  {countries?.map((item, index) => (
                    <option className='capitalize' value={item?._id} key={index}>{item?.countryName} </option>
                  ))}
                </select>
              </div>
              {data.country && data.country === "63ac33ecff04e5652a2583f5" && (
                <>
                  <div className=''>
                    <label className='label'>TRN Number</label>
                    <input className='input'
                      type='number'
                      placeholder=''
                      name='trnNumber'
                      value={data.trnNumber}
                      onChange={onChangeHandler}
                    />
                  </div>

                  <div className=''>
                    <label className='label'>Company Registration Number</label>
                    <input className='input'
                      type='number'
                      placeholder=''
                      name='registrationNumber'
                      value={data.registrationNumber}
                      onChange={onChangeHandler}
                    />
                  </div>
                </>
              )}

              <div className=''>
                <label className='label'>Website</label>
                <input className='input'
                  type='text'
                  placeholder='Ex: TravellerChoice.ae'
                  name='website'
                  value={data.website}
                  onChange={onChangeHandler}
                />
              </div>

              <div className=''>
                <label className='label'>City</label>
                <input className='input'
                  type='text'
                  placeholder='Ex: Dubai'
                  name='city'
                  value={data.city}
                  onChange={onChangeHandler}
                />
              </div>
              <div className=''>
                <label className='label'>Zip Code</label>
                <input className='input'
                  type='number'
                  placeholder=''
                  name='zipCode'
                  value={data.zipCode}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className='pt-5 lg:pt-3 flex items-center justify-between border-b border-dashed p-4'>
              <h2 className='text-xl font-bold tracking-wide space-x-2 flex'>
                <span className=''><GoPerson /> </span>
                <span className=''>Profile Details</span>
              </h2>
            </div>

            <div className='lg:space-y-0 space-y-2 md:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-4'>

              <div className=''>
                <label className='label'>Agent Name</label>
                <input className='input'
                  type='text'
                  placeholder='Ex: Name'
                  name='name'
                  value={data.name}
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className=' flex space-x-1'>
                <div className='w-3/12'>
                  <label className='label'>Code</label>
                  <input className='input'
                    value={countryArray?.map((item) => item?.phonecode) || ''}
                    readOnly />
                </div>
                <div className='w-9/12'>
                  <label className='label'>Number</label>
                  <input className='input'
                    type='number'
                    placeholder='Ex: 0000000000'
                    name='phoneNumber'
                    value={data.phoneNumber}
                    onChange={onChangeHandler}
                    required
                  />
                </div>
              </div>

              <div className=' flex space-x-1'>
                <div className='w-3/12'>
                  <label className='label'>Code</label>
                  <input className='input'
                    value={countryArray?.map((item) => item?.phonecode) || ''}
                    readOnly />
                </div>
                <div className='w-9/12'>
                  <label className='label'> Telephone Number</label>
                  <input className='input'
                    type='number'
                    placeholder='Ex: 0000000000'
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
                  placeholder='Ex: example@email.com'
                  name='email'
                  value={data.email}
                  onChange={onChangeHandler}
                  required
                />
              </div>

              <div className=''>
                <label className='label'>preffered Currency</label>
                <input className='input'
                  type='text'
                  placeholder='Ex: AED'
                  value={countryArray?.map((item) => item?.currencySymbol) || ''}
                  readOnly
                />
              </div>

              <div className=''>
                <label className='label'>designation</label>
                <input className='input'
                  type='text'
                  placeholder='designation'
                  name='designation'
                  value={data.designation}
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className=''>
                <label className='label'>Skype Id</label>
                <input className='input'
                  type='text'
                  placeholder='skypeid'
                  name='skypeId'
                  value={data.skypeId}
                  onChange={onChangeHandler}
                />
              </div>

              <div className=''>
                <label className='label'>Whatsapp</label>
                <input className='input'
                  type='number'
                  placeholder='Ex: 000000000'
                  name='whatsappNumber'
                  value={data.whatsappNumber}
                  onChange={onChangeHandler}
                />
              </div>
            </div>

            <div className='flex justify-end mt-6 gap-[20px] items-center'>
              {error && (
                <div className='flex justify-end'>
                  <p className='text-main text-xs capitalize'>{error} </p>
                </div>
              )}
              <button type='submit' className='button w-[100px]'>{isLoading ? <BtnLoader /> : 'Create'}</button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default NewRegisters