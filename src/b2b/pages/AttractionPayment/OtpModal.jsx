import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from '../../../axios'
import Swal from 'sweetalert2'
import { useEffect } from 'react'

function OtpModal({ setOtpModal, orderId }) {

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [otp, setOtp] = useState({
    one: '',
    two: '',
    three:'',
    four: '',
    five: ''
  })


  // useEffect(() => {
  // const inputs = document.querySelectorAll('#otp > *[id]');
  // for (let i = 0; i < inputs.length; i++) {
  //   inputs[i].addEventListener('keydown', function (event) {
  //     if (event.key === "Backspace") {
  //       inputs[i].value = '';
  //       if (i !== 0) inputs[i - 1].focus();
  //     } else {
  //       if (i === inputs.length - 1 && inputs[i].value !== '') {
  //         return true;
  //       } else if (event.keyCode > 47 && event.keyCode < 58) {
  //         inputs[i].value = event.key;
  //         if (i !== inputs.length - 1) inputs[i + 1].focus();
  //         event.preventDefault();
  //       } else if (event.keyCode > 64 && event.keyCode < 91) {
  //         inputs[i].value = String.fromCharCode(event.keyCode);
  //         if (i !== inputs.length - 1) inputs[i + 1].focus();
  //         event.preventDefault();
  //       }
  //     }
  //   });
  // }
  // })

  const { token } = useSelector(state => state.agents)
  // const { balance } = useSelector(state => state.wallet)

  const submitHandler = async (e) => {
    try {
      e.preventDefault()

      setIsLoading(true);
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.post(`/b2b/attractions/orders/complete/${orderId}`, {
        otp: otp?.one + otp?.two + otp?.three + otp?.four + otp?.five
      }, config);

      setIsLoading(false);
      setOtpModal(false)
      Swal.fire({
        icon: 'success',
        title: 'Order Completed Successfully',
        // text: `You have ${balance?.balance} amount left in your Wallet`,
      })
    } catch (err) {

      if (err?.response?.data?.error) {
        setError(err?.response?.data?.error)
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: error,
        })
        setIsLoading(false);
      }
    }
  }

  const onChangeHandler = (e) => {
    setOtp((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  return (
    <div className='lightglass fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center z-10'>
      <div className='bg-white text-darktext w-3/12'>
        <div className='flex justify-end p-2'>
          <button className=' text-2xl'
            onClick={() => setOtpModal(false)}
          >
            <AiOutlineClose />
          </button>
        </div>

        <div class=" py-3 rounded text-center">
          <h1 class="text-2xl font-bold">OTP Verification</h1>
          <div class="mt-2">
            <span>Enter the OTP you received at</span>
            <span class="font-bold">+91 ******876</span>
          </div>
          <form onSubmit={submitHandler}>
            <div id="otp" class="flex flex-row justify-center text-center  mt-5">
              <input
                class="m-2 border h-10 w-10 text-center form-control rounded"
                type="number"
                id="first"
                maxlength="1"
                name='one'
                value={otp.one}
                onChange={onChangeHandler}
              />
              <input
                class="m-2 border h-10 w-10 text-center form-control rounded"
                type="text"
                id="second"
                maxlength="1"
                name='two'
                value={otp.two}
                onChange={onChangeHandler} />
              <input class="m-2 border h-10 w-10 text-center form-control rounded"
                type="text"
                id="third"
                maxlength="1"
                name='three'
                value={otp.three}
                onChange={onChangeHandler} />
              <input class="m-2 border h-10 w-10 text-center form-control rounded"
                type="text"
                id="fourth"
                maxlength="1"
                name='four'
                value={otp.four}
                onChange={onChangeHandler} />
              <input class="m-2 border h-10 w-10 text-center form-control rounded"
                type="text"
                id="fifth"
                maxlength="1"
                name='five'
                value={otp.five}
                onChange={onChangeHandler} />
            </div>

            <div class="flex justify-center text-center mt-2">
              <div class="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                <button class="bg-blue text-light h-9 rounded-[.25rem] w-[100px]">Submit</button><i class='bx bx-caret-right ml-1'></i>
              </div>
            </div>
          </form>
          <div class="flex justify-center text-center mt-5">
            <Link class="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
              <span class="font-bold">Resend OTP</span><i class='bx bx-caret-right ml-1'></i>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OtpModal