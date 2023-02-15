import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import axios from '../../../axios';
import { BtnLoader } from '../../components';
import Swal from 'sweetalert2'

function CompanySettings() {

  const { agent, token } = useSelector(state => state.agents)
  const [companyDetails, setCompanyDetails] = useState({
    companyName: agent?.companyName || "",
    address: agent?.address || "",
    website: agent?.website || "",
    trnNumber: agent?.trnNumber || "",
    companyRegistration: agent?.companyRegistration || "",
    city: agent?.city || "",
    zipCode: agent?.zipCode || "",
  })
  const [country, setCountry] = useState(agent?.country || "")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const { countries } = useSelector(state => state.home)

  const handleChange = (e) => {
    setCompanyDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

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

      const response = await axios.patch("/b2b/resellers/auth/update/comapnySettings", companyDetails, config);
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
  console.log(error);
  return (
    <div className=''>
      <form onSubmit={submitHandler}>
        <div className='space-y-2 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>

          <div className=''>
            <label className='label'>Travel Agency Name</label>
            <input className='input'
              type='text'
              placeholder='Ex: TravellerChoice'
              name='companyName'
              value={companyDetails.companyName}
              onChange={handleChange}
            />
          </div>

          <div className=''>
            <label className='label'>Address</label>
            <input className='input'
              type='text'
              placeholder='Ex: Tc, North california'
              name='address'
              value={companyDetails.address}
              onChange={handleChange}
            />
          </div>

          <div className=''>
            <label className='label'>Country</label>
            <select className='select'
              name='country'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option>select</option>
              {countries?.map((item, index) => (
                <option className='capitalize' value={item?._id} key={index}>{item?.countryName} </option>
              ))}
            </select>
          </div>

          <div className=''>
            <label className='label'>Website</label>
            <input className='input'
              type='text'
              placeholder='Ex: TravellerChoice.ae'
              name='website'
              value={companyDetails.website}
              onChange={handleChange}
            />
          </div>
          {country && country === "63ac33ecff04e5652a2583f5" && (
            <>
              <div className=''>
                <label className='label'>TRN Number</label>
                <input className='input'
                  type='number'
                  placeholder='Ex: Dubai'
                  name='trnNumber'
                  value={companyDetails.trnNumber}
                  onChange={handleChange}
                />
              </div>

              <div className=''>
                <label className='label'>Company Registration Number</label>
                <input className='input'
                  type='text'
                  placeholder='Ex: Dubai'
                  name='companyRegistration'
                  value={companyDetails.companyRegistration}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          <div className=''>
            <label className='label'>City</label>
            <input className='input'
              type='text'
              placeholder='Ex: Dubai'
              name='city'
              value={companyDetails.city}
              onChange={handleChange}
            />
          </div>
          {country && country !== "63ac33ecff04e5652a2583f5" && (
            <div className=''>
              <label className='label'>Zip Code</label>
              <input className='input'
                type='text'
                placeholder=''
                name='zipCode'
                value={companyDetails.zipCode}
                onChange={handleChange}
              />
            </div>
          )}
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
            {isLoading ? <BtnLoader /> : "Update"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CompanySettings