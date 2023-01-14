import React from 'react'
import Lottie from "lottie-react";
import SigninAnimation from '../data/lottie/23640-sign-in-or-sign-up-animation.json'
import { logoPng } from '../../static/imagesB2B'

function B2BLoginPage() {
  return (
    <section class="h-screen max-w-screen-xl mx-auto">
      <div class=" h-full text-darktext flex items-center justify-center">
        <div className='bg-white p-10 rounded-lg'>

          <div className='flex justify-center mb-7'>
            <img src={logoPng} alt='logo' className='h-[65px]' />
          </div>

          <div class="grid lg:grid-cols-2 gap-[20px]">
            <div className='flex justify-center'>
              <div
                class="w-8/12 flex justify-end items-center"
              >
                <Lottie animationData={SigninAnimation} />
              </div>
            </div>
            <div class=" lg:w-10/12 mb-12 md:mb-0">
              <form>
                <div class="mb-6">
                  <input
                    type="text"
                    class="input"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                  />
                </div>


                <div class="mb-6">
                  <input
                    type="text"
                    class="input"
                    id="exampleFormControlInput2"
                    placeholder="Agent-code"
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="password"
                    class="input"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                  />
                </div>

                <div class="flex justify-end items-center mb-6">
                  <a href="#!" class="text-gray-800">Forgot password?</a>
                </div>

                <div class="text-center lg:text-left">
                  <button
                    type="button"
                    class="inline-block px-7 py-3 bg-lightblue text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                  <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a
                      href="#!"
                      class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
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