import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setVisaEnquiry } from '../../../redux/slices/visaSlice'

function ItenarySection({ navigation, setNavigation }) {
  const dispatch = useDispatch()

  const [data, setData] = useState({
    visaType: JSON.parse(localStorage.getItem("visaEnquiry"))?.visaType || '',
    email: JSON.parse(localStorage.getItem("visaEnquiry"))?.email || '',
    contactNo: JSON.parse(localStorage.getItem("visaEnquiry"))?.contactNo || '',
    traveller: JSON.parse(localStorage.getItem("visaEnquiry"))?.traveller || '',
    onwardDate: JSON.parse(localStorage.getItem("visaEnquiry"))?.onwardDate || '',
    returnDate: JSON.parse(localStorage.getItem("visaEnquiry"))?.returnDate || '',
    country: '',
  })

  const onChangeHandler = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const { visa } = useSelector(state => state.visa)
  
  const submitHandler = (e) => {
    e.preventDefault()
    localStorage.setItem("visaEnquiry", JSON.stringify(data))
    dispatch(setVisaEnquiry())
    setNavigation({
      itenary: false,
      details: true,
      payment: false,
      upload: false,
    })
  }

  return (
    <div className='p-6 text-darktext'>
      <form onSubmit={submitHandler}>
        <div className={`my-2 border px-3 py-4 ${navigation.itenary ?  "bg-lightblue " : "bg-slate-400" } rounded-[.25rem]`}>
          <p className='font-[600] text-[20px] text-soft'>Itenary</p>
        </div>
        {navigation.itenary && (
        <div className='rounded-md shadow bg-white p-6'>
          <div className='grid grid-cols-12 gap-3 '>
            <div className='col-span-4 flex flex-col'>
              <label htmlFor="" className='label'>Visa Type</label>
              <select
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none '
                name='visaType'
                value={data.visaType}
                onChange={onChangeHandler}
                required
              >
                <option hidden>Choose Visa Type</option>
                {visa?.visaType?.map((item,index) => (
                <option key={index} value={item?._id}>{item?.visaName} </option>
                ))}
              </select>
            </div>
            <div className='col-span-3'>
              <label htmlFor="" className='label'>Onward Date</label>
              <input
                type='date'
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                name='onwardDate'
                value={data.onwardDate}
                onChange={onChangeHandler}
                required
              />
            </div>
            <div className='col-span-3'>
              <label htmlFor="" className='label'>Return Date</label>
              <input
                type='date'
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                name='returnDate'
                value={data.returnDate}
                onChange={onChangeHandler}
                required
              />
            </div>
            <div className='col-span-2 flex flex-col'>
              <label htmlFor="" className='label'>Traveller</label>
              <select
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                name='traveller'
                value={data.traveller}
                onChange={onChangeHandler}
                required
              >
                <option hidden>Choose</option>
                {Array.from(Array(50).keys(), n => n + 1).map((item) => (
                  <option key={item} value={item} >{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className='mt-2 flex justify-end'>
            <button type='submit' className='bg-lightblue text-[14px] text-white px-3 py-2 rounded'>Move to Details</button>
          </div>
        </div>
        )}
      </form>
    </div>
  )
}

export default ItenarySection