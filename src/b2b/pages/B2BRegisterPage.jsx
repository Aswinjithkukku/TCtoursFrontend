import React, { useEffect, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BsCalendar2Week, BsFillCartCheckFill } from 'react-icons/bs'
import { FaHandsHelping, FaLock } from 'react-icons/fa'
import { GiClockwork, GiFactory, GiReceiveMoney } from 'react-icons/gi'
import { GoPerson } from 'react-icons/go'
import { ImFilePdf, ImProfile } from 'react-icons/im'
import { IoIosPricetags } from 'react-icons/io'
import { TfiPackage } from 'react-icons/tfi'
import { TbBuildingWarehouse } from 'react-icons/tb'
import { logoPng } from '../../static/imagesB2B'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../axios.js'
import { setAgent } from '../../redux/slices/agentSlice'
import { BtnLoader } from '../components'
import { Link, useNavigate } from 'react-router-dom'

function B2BRegisterPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [register, setRegister] = useState({
    comapny: true,
    profile: false,
    password: false
  })
  const [confirmPassword, setConfirmPassword] = useState('')
  const [data, setData] = useState({
    companyName: '',
    address: '',
    website: '',
    country: '',
    trnNumber: '',
    companyRegistration: '',
    city: '',
    zipCode: '',
    name: '',
    phoneNumber: '',
    telephoneNumber: '',
    email: '',
    designation: '',
    skypeId: '',
    whatsappNumber: '',
    password: '',
  })

  const { countries } = useSelector(state => state.home)

  const onChangeHandler = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  console.log(data);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError('')
      if (data.password === confirmPassword) {
        setIsLoading(true);

        const response = await axios.post("/b2b/resellers/auth/signup", data);
        dispatch(setAgent(response.data));
        setIsLoading(false);
        navigate('/b2b')
      }
    } catch (err) {
      setError(
        err?.response?.data?.error || "Something went wrong, Try again"
      );
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (data.password !== confirmPassword) {
      setError('password you have entered is not similiar')
    }
  }, [confirmPassword, data.password])

  const country = countries?.filter((item) => item._id === data.country)

  const { isLoggedIn } = useSelector(state => state.agents)

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/b2b");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className='max-w-screen-xl mx-auto lg:my-10'>
      <div className='bg-white lg:rounded-xl px-10 py-5'>
        <div className='flex justify-center pb-5 border-b'>
          <img src={logoPng} alt='logo' className='h-[65px]'
          onClick={() => navigate('/')}
           />
        </div>
        <form onSubmit={handleSubmit}>
          <div className='lg:grid grid-cols-12 gap-0 pt-4'>
            <div className='1 col-span-7 text-darktext space-y-2 text-sm'>

              <ol className="relative  border-l border-gray-200 ">
                <li className={`mb-10 ml-6 ${register.comapny ? 'h-full' : 'h-6'} overflow-hidden `}>
                  <span className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ${register.comapny ? "bg-green-200" : "bg-gray-100"} `}
                    onClick={() => setRegister({
                      comapny: true,
                      profile: false,
                      password: false
                    })}>
                    {register.comapny ? (
                      <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    ) : (
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path></svg>
                    )}
                  </span>
                  <div className='cursor-pointer'
                    onClick={() => setRegister({
                      comapny: true,
                      profile: false,
                      password: false
                    })}>
                    <h2 className='text-[15px] uppercase font-semibold tracking-wide space-x-2 flex pt-2'>
                      <span className=''><GiFactory /> </span>
                      <span className=''>Company Details</span>
                    </h2>
                  </div>

                  <div className='lg:grid grid-cols-2 space-y-2 lg:space-y-0 gap-[10px] pt-3'>
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
                      <label className='label'>Website</label>
                      <input className='input'
                        type='text'
                        placeholder='Ex: TravellerChoice.ae'
                        name='website'
                        value={data.website}
                        onChange={onChangeHandler} />
                    </div>
                    <div className=''>
                      <label className='label'>Country</label>
                      <select className='select'
                        name='country'
                        value={data.country}
                        onChange={onChangeHandler}
                        required
                      >
                        <option>Ex: United Arab Emirates</option>
                        {countries?.map((item, index) => (
                          <option className='capitalize' value={item?._id} key={index}>{item?.countryName} </option>
                        ))}
                      </select>
                    </div>
                    {data.country === "63ac33ecff04e5652a2583f5" && (
                      <>
                        <div className=''>
                          <label className='label'>TRN Number</label>
                          <input
                            className='input'
                            type='number'
                            placeholder='Ex: Dubai'
                            name='trnNumber'
                            value={data.trnNumber}
                            onChange={onChangeHandler}
                          />
                        </div>

                        <div className=''>
                          <label className='label'>Company Registration Number</label>
                          <input className='input'
                            type='number'
                            placeholder='Ex: Dubai'
                            name='companyRegistration'
                            value={data.companyRegistration}
                            onChange={onChangeHandler}
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
                        value={data.city}
                        onChange={onChangeHandler} />
                    </div>
                    {data.country !== "63ac33ecff04e5652a2583f5" && (
                      <div className=''>
                        <label className='label'>Zip Code</label>
                        <input className='input'
                          type='number'
                          placeholder=''
                          name='zipCode'
                          value={data.zipCode}
                          onChange={onChangeHandler} />
                      </div>
                    )}
                  </div>
                </li>
                <li className={`mb-10 ml-6 ${register.profile ? 'h-full' : 'h-8'} overflow-hidden `}>
                  <span className={`absolute flex items-center justify-center w-8 h-8  rounded-full -left-4 ring-4 ring-white ${register.profile ? "bg-green-200" : "bg-gray-100"}`}
                    onClick={() => setRegister({
                      comapny: false,
                      profile: true,
                      password: false
                    })}>
                    {register.profile ? (
                      <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    ) : (
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    )}
                  </span>
                  <div className='pt-2 cursor-pointer'
                    onClick={() => setRegister({
                      comapny: false,
                      profile: true,
                      password: false
                    })}>
                    <h2 className='text-[15px] uppercase font-semibold tracking-wide space-x-2 flex'>
                      <span className=''><GoPerson /> </span>
                      <span className=''>Profile Details</span>
                    </h2>
                  </div>

                  <div className='lg:grid grid-cols-2 gap-[10px] space-y-2 lg:space-y-0 pt-2'>
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
                          value={country?.map((item) => item?.phonecode) || ''}
                          readOnly
                        />
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
                        <input className='select'
                          value={country?.map((item) => item?.phonecode) || ''}
                          readOnly
                        />
                      </div>
                      <div className='w-9/12'>
                        <label className='label'> Telephone Number</label>
                        <input className='input'
                          type='number'
                          placeholder='Ex: 0000000000'
                          name='telephoneNumber'
                          value={data.telephoneNumber}
                          onChange={onChangeHandler} />
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
                      <label className='label'>Designation</label>
                      <input className='input'
                        type='text'
                        placeholder='Designation'
                        name='designation'
                        value={data.designation}
                        onChange={onChangeHandler} />
                    </div>
                    <div className=''>
                      <label className='label'>Skype Id</label>
                      <input className='input'
                        type='text'
                        placeholder='skypeid'
                        name='skypeId'
                        value={data.skypeId}
                        onChange={onChangeHandler} />
                    </div>

                    <div className=''>
                      <label className='label'>Whatsapp</label>
                      <input className='input'
                        type='number'
                        placeholder='Ex: 000000000'
                        name='whatsappNumber'
                        value={data.whatsappNumber}
                        onChange={onChangeHandler} />
                    </div>

                  </div>
                </li>
                <li className={`mb-10 ml-6 ${register.password ? 'h-full' : 'h-8'} overflow-hidden `}>
                  <span className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ${register.password ? "bg-green-200" : "bg-gray-100"} `}
                    onClick={() => setRegister({
                      comapny: false,
                      profile: false,
                      password: true
                    })}>
                    {register.password ? (
                      <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    ) : (
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
                    )}
                  </span>
                  <div className='pt-2 cursor-pointer'
                    onClick={() => setRegister({
                      comapny: false,
                      profile: false,
                      password: true
                    })}>
                    <h2 className='text-[15px] uppercase font-semibold tracking-wide space-x-2 flex'>
                      <span className=''><FaLock /> </span>
                      <span className=''>Password Settings</span>
                    </h2>
                  </div>
                  <div className='lg:grid grid-cols-2 gap-[10px] space-y-2 lg:space-y-0 pt-2'>
                    <div className=''>
                      <label className='label'>Password</label>
                      <input className='input'
                        type='password'
                        placeholder='***********'
                        name='password'
                        value={data.password}
                        onChange={onChangeHandler}
                        required
                      />
                    </div>

                    <div className=''>
                      <label className='label'>Confirm Password</label>
                      <input className='input'
                        type='password'
                        placeholder='***********'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>

                  </div>
                  <div className='pt-3'>
                    <button className='text-sm font-medium text-light bg-lightblue w-[100px] py-2 rounded'>
                      {isLoading ? <BtnLoader /> : 'Signup'}
                    </button>
                  </div>
                </li>
              </ol>
              {error && (
                <div className='flex justify-center'>
                  <p className='text-main text-xs capitalize'>{error} </p>
                </div>
              )}

              <div className=''>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Already have an account?
                  <Link
                    to="/b2b/login"
                    className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >Login</Link>
                </p>
              </div>
            </div>
            <div className='2 col-span-5 text-darktext space-y-4 lg:mx-3 lg:p-5 text-sm lg:border-l'>

              <div className=''>
                <h2 className='text-xl font-bold tracking-wide flex space-x-2 pb-2'>
                  <span className=''><ImProfile /> </span>
                  <span className=''>Registers</span>
                </h2>
              </div>

              <div className='tracking-wide '>
                <p className='mb-2 text-darktext font-medium'>Welcome to Travellers Choice B2B website made for our agents!</p>
                <p className='text-darktext font-medium'>You can resell sdvsgdfgsfdjgs sdsjhdfsjd sfvdshjfgsd fdnbfvsjdfsadf snbvfjsfjhshfjsa fsfjsjsd fdsnbfajsfdvsjafvdsnb sdnfdsgjfdv sdfnsfdsgjvd sncshgdcv sncsndfcgsdnfcvsg nddbfc sbcvsh x</p>
              </div>

              <div className=''>
                <h2 className=' font-medium tracking-wide flex py-[1px]  space-x-2'>
                  <span className='text-lg text-green-700'><TfiPackage /> </span>
                  <span className=''>Build your own package</span>
                </h2>
              </div>

              <div className=''>
                <h2 className=' font-medium tracking-wide flex py-[1px]  space-x-2'>
                  <span className='text-lg text-green-700'><IoIosPricetags /> </span>
                  <span className=''>Best Rate availability</span>
                </h2>
              </div>

              <div className=''>
                <h2 className=' font-medium tracking-wide flex py-[1px]  space-x-2'>
                  <span className='text-lg text-green-700'><ImFilePdf /> </span>
                  <span className=''>Online Settlements of invoices & Reciepts</span>
                </h2>
              </div>

              <div className=''>
                <h2 className=' font-medium tracking-wide flex py-[1px]  space-x-2'>
                  <span className='text-lg text-green-700'><FaHandsHelping /> </span>
                  <span className=''>Create your sub agents</span>
                </h2>
              </div>

              <div className=''>
                <h2 className=' font-medium tracking-wide flex py-[1px]  space-x-2'>
                  <span className='text-lg text-green-700'><GiReceiveMoney /> </span>
                  <span className=''>Strong mrak-up modules</span>
                </h2>
              </div>

              <div className=''>
                <h2 className=' font-medium tracking-wide flex py-[1px]  space-x-2'>
                  <span className='text-lg text-green-700'><TbBuildingWarehouse /> </span>
                  <span className=''>Live inventory of Products</span>
                </h2>
              </div>

              <div className=''>
                <h2 className=' font-medium tracking-wide flex py-[1px]  space-x-2'>
                  <span className='text-lg text-green-700'><AiFillHeart /> </span>
                  <span className=''>Add to favourite list</span>
                </h2>
              </div>

              <div className=''>
                <h2 className=' font-medium tracking-wide flex py-[1px]  space-x-2'>
                  <span className='text-lg text-green-700'><GiClockwork /> </span>
                  <span className=''>Multiple Tour option, Transfer option & time slots for the same tour</span>
                </h2>
              </div>

              <div className=''>
                <h2 className=' font-medium tracking-wide flex py-[1px]  space-x-2'>
                  <span className='text-lg text-green-700'><BsFillCartCheckFill /> </span>
                  <span className=''>Shopping cart application</span>
                </h2>
              </div>

              <div className=''>
                <h2 className=' font-medium tracking-wide flex py-[1px]  space-x-2'>
                  <span className='text-lg text-green-700'><BsCalendar2Week /></span>
                  <span className=''>Get relaxed with instant confirmation on bookings</span>
                </h2>
              </div>

            </div>
          </div>
        </form>
      </div>
    </div >
  )
}

export default B2BRegisterPage