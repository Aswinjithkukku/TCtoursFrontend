import React, { useEffect, useState } from 'react'
import { Month } from '../../../utils/Month'
// import { rows } from '../../../redux/slices/visaSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addRows, handleRowItemChange } from '../../../redux/slices/visaSlice'
import axios from '../../../axios'

function TravellerDetails() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const { token } = useSelector(state => state.agents)

  let limit = new Date().getFullYear()
  let year = []
  for (let i = limit; i > limit - 100; i--) {
    year.push(i)
  }

  let day = []
  for (let i = 1; i <= 31; i++) {
    day.push(i)
  }

  const { rows, visaEnquiry } = useSelector(state => state.visa)
  useEffect(() => {

    dispatch(addRows())

  }, [dispatch, visaEnquiry])

  const onRowChange = (e, index) => {
    dispatch(handleRowItemChange({
      value: e.target.value,
      name: e.target.name,
      index
    }))
  }

  const submitHandler = async(e) => {
    try {
      setIsLoading(true)
      setError('')
      const sum =
        Number(visaEnquiry?.adult) + Number(visaEnquiry?.children);

      const config = {
        headers: {
            authorization: `Bearer ${token}`,
        },
    }
        const response = await axios.post(`/b2b/visa/create`, {
          visaType: visaEnquiry?.visaType,
            email: visaEnquiry?.email,
            contactNo: visaEnquiry?.contactNo,
            onwardDate: visaEnquiry?.onwardDate,
            returnDate: visaEnquiry?.returnDate,
            noOfTravellers: sum,
            travellers: rows,
            country: visaEnquiry?.country
        }  ,config);
        setIsLoading(false)
        return response.data
    } catch (error) {
      setError(
        error?.response?.data?.error || "Something went wrong, Try again"
      );
      setIsLoading(false);
    }
  }

  return (
    <div className='p-6 text-darktext '>
      <div className='my-2 border px-3 py-4 bg-lightblue rounded-[.25rem]'>
        <p className='font-[600] text-[20px] text-soft'>Traveller Details</p>
      </div>
      <form onSubmit={submitHandler}>
        <div className='bg-white p-6 rounded-md shadow'>
          {rows.map((row, index) => (
            <div key={index} className='pb-6 '>
              <div className='py-2 text-gray-500 font-[550]  bg-gray-100 border-dashed px-1'>
                <p className=''>{index === 0 ? "Lead passenger" : `${index + 1} passenger`} </p>
              </div>
              <div className='lg:grid grid-cols-12 gap-5 text-darktext space-y-3 lg:space-y-0 lg:py-2'>
                <div className='col-span-2'>
                  <div className=''>
                    <label className='label'>Mr/Mrs</label>
                  </div>
                  <div className=''>
                    <select
                      name='title'
                      value={row.title}
                      onChange={(e) => onRowChange(e, index)}
                      className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none' >
                      <option value={"male"}>Mr.</option>
                      <option value={"female"}>Mrs.</option>
                      <option value={"other"}>Ms.</option>
                    </select>
                  </div>
                </div>
                <div className='col-span-5'>
                  <div className=''>
                    <label className='label'>First Name</label>
                  </div>
                  <div className=''>
                    <input
                      type='text'
                      name='firstName'
                      value={row.firstName}
                      onChange={(e) => onRowChange(e, index)}
                      className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                    />
                  </div>
                </div>
                <div className='col-span-5'>
                  <div className=''>
                    <label className='label'>Last Name</label>
                  </div>
                  <div className=''>
                    <input
                      type='text'
                      className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                      name='lastName'
                      value={row.lastName}
                      onChange={(e) => onRowChange(e, index)}
                    />
                  </div>
                </div>
              </div>
              <div className='lg:grid grid-cols-12 gap-5 text-darktext space-y-3 lg:space-y-0 lg:py-2'>
                <div className='col-span-4'>
                  <div className=''>
                    <label className='label'>Email</label>
                  </div>
                  <div className=''>
                    <input
                      type='email'
                      className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                      name='email'
                      value={row.email}
                      onChange={(e) => onRowChange(e, index)}
                    />
                  </div>
                </div>
                <div className='col-span-4'>
                  <div className=''>
                    <label className='label'>Country</label>
                  </div>
                  <div className=''>
                    <select
                      className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                      name='country'
                      value={row.country}
                      onChange={(e) => onRowChange(e, index)}
                    >
                      <option >Choose Country</option>
                    </select>
                  </div>
                </div>
                <div className='col-span-4 flex gap-2'>
                  <div className='w-2/12'>
                    <div className=''>
                      <label className='label'>code</label>
                    </div>
                    <div className=''>
                      <input
                        type='number'
                        className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none no-spinner'
                        name='phone'
                      />
                    </div>
                  </div>
                  <div className='w-10/12'>
                    <div className=''>
                      <label className='label'>Contact Number</label>
                    </div>
                    <div className=''>
                      <input
                        type='number'
                        className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none no-spinner'
                        name='contactNumber'
                        value={row.contactNumber}
                        onChange={(e) => onRowChange(e, index)}
                      />
                    </div>
                  </div>
                </div>

              </div>
              <div className='lg:grid grid-cols-12 gap-5 text-darktext space-y-3 lg:space-y-0 lg:py-2'>
                <div className='col-span-6'>
                  <div className=''>
                    <label className='label'>Passport Number</label>
                  </div>
                  <div className=''>
                    <input
                      type='number'
                      className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                      name='passportNumber'
                      value={row.passportNumber}
                      onChange={(e) => onRowChange(e, index)}
                    />
                  </div>
                </div>
                <div className='col-span-2'>
                  <div className='w-full'>
                    <label className='label'>Date of Birth</label>
                  </div>
                  <div className=''>
                    <select
                      placeholder='Day'
                      className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                      name='day'
                      value={row.day}
                      onChange={(e) => onRowChange(e, index)}
                    >
                      <option hidden> Day</option>
                      {day.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className='col-span-2 flex items-end'>
                  <div className='w-full'>
                    <select
                      placeholder='Month'
                      className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                      name='month'
                      value={row.month}
                      onChange={(e) => onRowChange(e, index)}
                    >
                      <option hidden>Month</option>
                      {Month.map((item, index) => (
                        <option key={index} value={item} className='capitalize'>{item} </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className='col-span-2 flex items-end'>
                  <div className='w-full'>
                    <select
                      className='w-full py-2 p-1 text-primaryColor border-b border-darktext outline-none'
                      name='year'
                      value={row.year}
                      onChange={(e) => onRowChange(e, index)}
                    >
                      <option hidden>Year</option>
                      {year.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  )
}

export default TravellerDetails