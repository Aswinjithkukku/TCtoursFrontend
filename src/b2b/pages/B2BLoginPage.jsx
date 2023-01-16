import React, { useState } from 'react'
import Lottie from "lottie-react";
import SigninAnimation from '../data/lottie/23640-sign-in-or-sign-up-animation.json'
import { logoPng } from '../../static/imagesB2B'
import axios from '../../axios'

function B2BLoginPage() {
  const [data, setData] = useState({
    email: "",
    agentCode: "",
    password: "",
});
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
        const response = await axios.post("/b2b/login", data);

        // dispatch(setUser(response.data));
        setIsLoading(false);
    } catch (err) {

        if (err?.response?.data?.error === "Invalid credentials") {
            setError("You have given incorrect email or password")
        } else {
            setError(err?.response?.data?.error)
        }
        setIsLoading(false);
    }
};

  return (
    <section className="h-screen max-w-screen-xl mx-auto">
      <div className=" h-full text-darktext flex items-center justify-center">
        <div className='bg-white px-10 py-5 rounded-lg '>

          <div className='flex justify-center pb-4 mb-7 border-b'>
            <img src={logoPng} alt='logo' className='h-[65px]' />
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
              <form>

                <div className="mb-6">
                  <input
                    type="text"
                    className="input"
                    id="exampleFormControlInput2"
                    placeholder="Agent-code"
                    name='agentCode'
                    value={data.agentCode}
                    onChange={handleChange}
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
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="input"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    name='password'
                    value={data.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex justify-end items-center mb-6">
                  <a href="#!" className="text-gray-800">Forgot password?</a>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="button"
                    className="inline-block px-7 py-3 bg-lightblue text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a
                      href="#!"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >Register</a
                    >
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