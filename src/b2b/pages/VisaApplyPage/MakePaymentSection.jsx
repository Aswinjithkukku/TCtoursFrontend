import React, { useState } from 'react'
import Lottie from 'lottie-react'
import { PaymentAnimation } from '../../../data'
import VisaOtpModal from './VisaOtpModal'
import { useSelector } from 'react-redux'
import axios from '../../../axios'
import priceConversion from '../../../utils/PriceConversion'

function MakePaymentSection({ navigation, setNavigation }) {
  const [otpModal, setOtpModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [order, setOrder] = useState({})

  const { visaEnquiry, visa, rows } = useSelector(state => state.visa)
  const { token } = useSelector(state => state.agents)
  const { balance } = useSelector(state => state.wallet)
  const { selectedCurrency } = useSelector(state => state.home)

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      setError('')

      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.post(`/b2b/visa/application/create`, {
        visaType: visaEnquiry?.visaType,
        email: visaEnquiry?.email,
        contactNo: visaEnquiry?.contactNo,
        onwardDate: visaEnquiry?.onwardDate,
        returnDate: visaEnquiry?.returnDate,
        noOfTravellers: Number(visaEnquiry?.traveller),
        travellers: rows,
        country: visa?.visa?.country?._id
      }, config);
      setIsLoading(false)
      setOtpModal(true)
      setOrder(response.data)
      return response.data
    } catch (error) {
      setError(
        error?.response?.data?.error || "Something went wrong, Try again"
      );
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className='p-6 text-darktext'>
        <div className={`my-2 border px-3 py-4 ${navigation.payment ? "bg-lightblue " : "bg-slate-400"} rounded-[.25rem]`}>
          <p className='font-[600] text-[20px] text-soft'>Make Payment</p>
        </div>
        {navigation.payment && (
        <form onSubmit={submitHandler}>
          <div className='flex justify-between gap-3 rounded-md shadow bg-white p-6'>
            <div className='space-y-2'>
              <p className='text-gray-500 text-sm font-[500]'>Make use of our Wallet system to purchase which is help for faster transaction.</p>
              <p className=''>Make payment through your wallet.</p>
              <p className='text-gray-500 font-[500] text-sm'>Your wallet amount is : <span className='text-main font-[600]'>{priceConversion(balance?.balance, selectedCurrency, true)}</span> </p>
              <button className='bg-lightblue rounded-[.25rem] text-white w-[100px] h-9'
                onClick={() => setOtpModal(true)}
              >Pay</button>
            </div>
            {/* <div className='text-center'>
              <p className='text-gray-500  font-[500]'>Purchase Cost: </p>
              <p className='text-lightblue underline text-xl font-[750]'> </p>
            </div> */}
            <div className=' w-[170px] '>
              <Lottie animationData={PaymentAnimation} />
            </div>
          </div>
        </form>
        )}
      </div>
      {otpModal && (
        <VisaOtpModal
          order={order}
          setOtpModal={setOtpModal}
          setNavigation={setNavigation}
        />
      )}
    </>
  )
}

export default MakePaymentSection