import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineRight } from 'react-icons/ai'
// import { BsFacebook } from 'react-icons/bs'
// import { FcGoogle } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../axios';
import { setUser } from '../../redux/slices/usersSlice';

function RegisterMobileCard({ view, setView }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    country: "",
    phoneNumber: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { initialData } = useSelector((state) => state.home);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      const response = await axios.post("/users/signup", data);
      dispatch(setUser(response.data));
      setIsLoading(false);
    } catch (err) {
      setError(
        err?.response?.data?.error || "Something went wrong, Try again"
      );
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed ${view.viewRegisterMobile ? "bottom-0" : "-bottom-full "} bg-light rounded-t-3xl overflow-y-auto max-h-[98vh] w-full z-30 transition-all duration-500`}>
      <form onSubmit={handleSubmit}>
        <div className='p-7 py-10 space-y-4'>
          <div className=' flex justify-between items-center'>
            <div className=''>
              <h2 className='text-3xl text-darktext font-bold'>Greetings..</h2>
            </div>
            <div className=' text-3xl' onClick={() => setView(!view)}><AiOutlineClose /></div>
          </div>
          <div className='space-y-2'>
            <label className='text-text '> Name</label>
            <input
              type='text'
              placeholder='Tell us Your Name'
              className='w-full placeholder:text-bluetrans border border-lightblue bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-bluetrans'
              onChange={handleChange}
              name="name"
              value={data.name || ""} />
          </div>
          <div className='space-y-2'>
            <label className='text-text '> Email</label>
            <input
              type='email'
              placeholder='Enter Your Email'
              className='w-full placeholder:text-bluetrans border border-lightblue bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-bluetrans '
              onChange={handleChange}
              name="email"
              value={data.email || ""} />
          </div>
          <div className="flex ">
            <div className="space-y-1">
              <label className="text-text ">
                code
              </label>
              <select
                name="country"
                id=""
                className="placeholder:text-bluetrans border border-lightblue bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-bluetrans"
                onChange={handleChange}
                value={data.country || ""}
              >
                <option value="" hidden>
                  code
                </option>
                {initialData?.countries?.map((country, index) => {
                  return (
                    <option
                      className="text-darktext"
                      value={country?._id}
                      key={index}
                    >
                      {country?.phonecode}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-text ">
                PhoneNumber
              </label>
              <input
                type="number"
                placeholder="Enter Your Phone Number"
                className="w-full placeholder:text-bluetrans border border-lightblue bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-bluetrans"
                name="phoneNumber"
                value={data.phoneNumber || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='space-y-2'>
            <label className='text-text '> Password</label>
            <input
              type='password'
              placeholder='Give a password'
              className='w-full placeholder:text-bluetrans border border-lightblue bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-bluetrans'
              onChange={handleChange}
              name="password"
              value={data.password || ""} />
          </div>
          {error && (
            <p className="text-main text-sm">{error}</p>
          )}
          {/* <div className='text-text'>
            <span className='text-xs'>By register you agree to our</span>
            <span className='text-xs text-blue hover:text-sky-500 cursor-pointer underline'>{' '} Terms and Conditions</span>
          </div> */}
          <div className='flex justify-center pt-2'>
            <button type='submit' className='py-2 rounded-xl px-10 bg-blue hover:bg-light hover:text-blue text-light duration-300 flex items-center space-x-2 cursor-pointer'>
              <span className=''>Register</span>
              <span className=''><AiOutlineRight /> </span>
            </button>

          </div>
          {/* <div className='flex items-center justify-between pt-2'>
            <button className='flex items-center border border-lightblue space-x-2 bg-trans w-full mx-3 justify-center py-2 rounded-xl hover:bg-light hover:text-blue text-bluetrans duration-200'>
              <span className=''><FcGoogle /></span>
              <span className=''>Google</span>
            </button>
            <button className='flex items-center border border-lightblue space-x-2 bg-trans w-full mx-3 justify-center py-2 rounded-xl hover:bg-light hover:text-blue text-bluetrans duration-200'>
              <span className='text-blue'><BsFacebook /> </span>
              <span className=''>Facebook</span>
            </button>
          </div> */}
        </div>
      </form>
    </div>
  )
}

export default RegisterMobileCard