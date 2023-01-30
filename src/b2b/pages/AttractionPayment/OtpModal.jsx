import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from '../../../axios'
import Swal from 'sweetalert2'
import { useEffect } from 'react'
import { emptyCart } from '../../../redux/slices/agentExcursionSlice'
import { useRef } from 'react'

function OtpModal({ setOtpModal, orderId }) {
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [otp, setOtp] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
    five: ''
  })

  const oneRef = useRef(null)
  useEffect(() => {
    oneRef.current.focus();
}, []);


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
      dispatch(emptyCart())
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
    if (!otp[e.target.name] || !e.target.value) {
    setOtp((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

    if (e.target.value) {
      const next = e.target.tabIndex;
      if (next < 5) {
          e.target.parentNode.childNodes[next].focus();
      }
  } else {
      const next = e.target.tabIndex - 2;
      if (next > -1) {
          e.target.parentNode.childNodes[next].focus();
      }
  }
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

        <div className=" py-3 rounded text-center">
          <h1 className="text-2xl font-bold">OTP Verification</h1>
          <div className="mt-2">
            <span>Enter the OTP you received at</span>
            <span className="font-bold">+91 ******876</span>
          </div>
          <form onSubmit={submitHandler}>
            <div id="otp" className="flex flex-row justify-center text-center  mt-5">
              <input
                ref={oneRef}
                className="m-2 no-spinner border h-10 w-10 text-center form-control rounded"
                type="text"
                id="first"
                maxLength={1}
                tabIndex={1}
                name='one'
                value={otp.one}
                onChange={onChangeHandler}
              />
              <input
                className="m-2 no-spinner border h-10 w-10 text-center form-control rounded"
                type="text"
                id="second"
                maxLength={1}
                tabIndex={2}
                name='two'
                value={otp.two}
                onChange={onChangeHandler} />
              <input
                className="m-2 no-spinner border h-10 w-10 text-center form-control rounded"
                type="text"
                id="third"
                maxLength={1}
                tabIndex={3}
                name='three'
                value={otp.three}
                onChange={onChangeHandler} />
              <input
                className="m-2 no-spinner border h-10 w-10 text-center form-control rounded"
                type="text"
                id="fourth"
                maxLength={1}
                tabIndex={4}
                name='four'
                value={otp.four}
                onChange={onChangeHandler} />
              <input
                className="m-2 no-spinner border h-10 w-10 text-center form-control rounded"
                type="text"
                id="fifth"
                maxLength={1}
                tabIndex={5}
                name='five'
                value={otp.five}
                onChange={onChangeHandler} />
            </div>

            <div className="flex justify-center text-center mt-2">
              <div className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                <button className="bg-blue text-light h-9 rounded-[.25rem] w-[100px]">Submit</button><i className='bx bx-caret-right ml-1'></i>
              </div>
            </div>
          </form>
          <div className="flex justify-center text-center mt-5">
            <Link className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
              <span className="font-bold">Resend OTP</span><i className='bx bx-caret-right ml-1'></i>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OtpModal