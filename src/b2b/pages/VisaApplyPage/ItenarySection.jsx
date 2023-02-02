import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setVisaEnquiry } from '../../../redux/slices/visaSlice'

function ItenarySection() {
  const dispatch = useDispatch()

  const [data, setData] = useState({
    visaType: JSON.parse(localStorage.getItem("visaEnquiry"))?.visaType || '',
    email: JSON.parse(localStorage.getItem("visaEnquiry"))?.email || '',
    contactNo: JSON.parse(localStorage.getItem("visaEnquiry"))?.contactNo || '',
    adult: JSON.parse(localStorage.getItem("visaEnquiry"))?.adult || '',
    children: JSON.parse(localStorage.getItem("visaEnquiry"))?.children || '',
    onwardDate: '',
    returnDate: '',
    country: '',
  })

  const onChangeHandler = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    localStorage.setItem("visaEnquiry", JSON.stringify(data))
    dispatch(setVisaEnquiry())
  }

  return (
    <div className='p-6 text-darktext'>
      <form onSubmit={submitHandler}>
        <div className='my-2 border px-3 py-4 bg-lightblue rounded-[.25rem]'>
          <p className='font-[600] text-[20px] text-soft'>Itenary</p>
        </div>
        <div className='rounded-md shadow bg-white p-6'>
          <div className='grid grid-cols-12 gap-3 '>
            <div className='col-span-4 flex flex-col'>
              <label htmlFor="" className='label'>Visa Type</label>
              <select
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none '
                name='visaType'
                value={data.visaType}
                onChange={onChangeHandler}
              >
                <option hidden>Choose Visa Type</option>
                <option>30 Days of Dubai</option>
              </select>
            </div>
            <div className='col-span-2'>
              <label htmlFor="" className='label'>From Date</label>
              <input
                type='date'
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                name='onwardDate'
                value={data.onwardDate}
                onChange={onChangeHandler}
              />
            </div>
            <div className='col-span-2'>
              <label htmlFor="" className='label'>To Date</label>
              <input
                type='date'
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                name='returnDate'
                value={data.returnDate}
                onChange={onChangeHandler}
              />
            </div>
            <div className='col-span-2 flex flex-col'>
              <label htmlFor="" className='label'>Adult</label>
              <select
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                name='adult'
                value={data.adult}
                onChange={onChangeHandler}
              >
                <option hidden>Choose</option>
                {Array.from(Array(50).keys(), n => n + 1).map((item) => (
                  <option key={item} value={item} >{item}</option>
                ))}
              </select>
            </div>
            <div className='col-span-2 flex flex-col'>
              <label htmlFor="" className='label'>Children</label>
              <select
                className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                name='children'
                value={data.children}
                onChange={onChangeHandler}
              >
                <option hidden>Choose</option>
                {Array.from(Array(50).keys()).map((item) => (
                  <option key={item} value={item} >{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className='mt-2'>
            <button type='submit' className='bg-lightblue text-[14px] text-white px-3 py-2 rounded'>Update</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ItenarySection