import React, { useEffect, useState } from 'react'
import Lottie from "lottie-react";
import SigninAnimation from '../data/lottie/23640-sign-in-or-sign-up-animation.json'
import { logoPng } from '../../static/imagesB2B'
import axios from '../../axios'
import { setAgent } from '../../redux/slices/agentSlice'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BtnLoader } from '../components'
import { BiHide, BiShow } from 'react-icons/bi';

function B2BLoginPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data, setData] = useState({
    email: "",
    agentCode: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");


  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError("");
      setIsLoading(true);
      const response = await axios.post("/b2b/resellers/auth/login", data);

      dispatch(setAgent(response.data));
      setIsLoading(false);
      navigate('/b2b')
    } catch (err) {

      if (err?.response?.data?.error === "Invalid credentials") {
        setError("You have given incorrect email or password")
      } else {
        setError(err?.response?.data?.error)
      }
      setIsLoading(false);
    }
  };

  const { isLoggedIn } = useSelector(state => state.agents)

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/b2b");
    }
  }, [isLoggedIn, navigate]);

  return (
    <section className="h-screen max-w-screen-xl mx-auto">
      <div className=" h-full text-darktext flex items-center justify-center">
        <div className='bg-white px-10 py-5 rounded-lg '>

          <div className='flex justify-center pb-4 mb-7 border-b'>
            <img src={logoPng} alt='logo' className='h-[65px]'
              onClick={() => navigate('/')}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-[20px]">
            <div className='flex justify-center'>
              <div
                className="w-8/12 flex justify-end items-center"
              >
                <Lottie animationData={SigninAnimation} />
              </div>
            </div>
            <div className=" lg:w-10/12 mb-12 md:mb-0">
              <form onSubmit={handleSubmit}>

                <div className="mb-6">
                  <input
                    type="text"
                    className="input"
                    id="exampleFormControlInput2"
                    placeholder="Agent-code"
                    name='agentCode'
                    value={data.agentCode}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    className="input"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    name='email'
                    value={data.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <div className='relative text-gray-400 focus-within:text-gray-600'>
                    <p className='pointer-events-none text-2xl absolute top-1/2 transform -translate-y-1/2 right-3'
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <BiShow /> : <BiHide />}
                    </p>
                    <input
                      type="password"
                      className="input"
                      id="exampleFormControlInput2"
                      placeholder="Password"
                      name='password'
                      value={data.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end items-center mb-6">
                  <a href="#!" className="text-gray-800">Forgot password?</a>
                </div>
                {error && (
                  <p className='text-sm capitalize text-main mb-1'>{error} </p>
                )}
                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-lightblue text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    {isLoading ? <BtnLoader /> : "Login"}
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <Link
                      to="/b2b/register"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >Register</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default B2BLoginPage