import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

function WithdrawModal({ modal, setModal }) {
  // const [amount, setAmount] = useState(0)
  // const [email, setEmail] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
  }

  if (!modal.withdraw) return null
  return (
    <>
      <div className={`${modal ? "fixed" : "hidden"} top-0 bottom-0 left-0 right-0 modal_overlay`} >
      </div >
      <div className={` h-full w-full fixed top-0 left-0 right-0 ${modal ? "bottom-0" : "-bottom-full " } lg:flex lg:justify-center items-center z-10 transition-all duration-500 h-[100vh] `}onClick={() => setModal(!modal)}>
        <div className={`fixed lg:static  ${modal ? "bottom-0" : "-bottom-full " } left-0 right-0 bg-white lg:w-7/12  z-10 rounded-xl max-h-[90vh] overflow-auto transition-all duration-500`} onClick={(e) => e.stopPropagation()}>
          <div className=''>
            <form onSubmit={submitHandler}>
              <div className='p-7 space-y-4 '>
                <div className='flex justify-between items-center border-b border-dashed border-text pb-3'>
                  <p className='text-3xl font-bold text-darktext'></p>
                  <h1 className='text-3xl font-bold text-darktext tracking-wide'>Withdraw</h1>
                  <h3 className='text-3xl font-bold text-darktext' onClick={() => setModal(false)}><AiOutlineClose /></h3>
                </div>

                {/* <div className=' flex w-full'>
                  <div className=' w-full px-2'>
                    <div className='flex items-center space-x-2 text-lightblue'>
                      <span className='text-lg text-lightblue'> </span>
                      <span className='text-lg'>Amount</span>
                    </div>
                    <div className=''>
                      <input type='number'
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-lg text-text' />
                    </div>
                  </div>
                </div> */}
                {/* <div className=' flex w-full'>
                  <div className=' w-full px-2'>
                    <div className='flex items-center space-x-2 text-lightblue'>
                      <span className='text-lg text-lightblue'> </span>
                      <span className='text-lg'>Email</span>
                    </div>
                    <div className=''>
                      <input type='email'
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='px-3 w-full border placeholder:text-text py-3 focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue rounded-lg text-text' />
                    </div>
                  </div>
                </div> */}
                <div className='lg:flex gap-5 text-darktext space-y-3 lg:space-y-0'>
                  <div className='lg:w-4/12'>
                    <div className=''>
                      <label className=''>Amount</label>
                    </div>
                    <div className=''>
                      <input
                        type='number'
                        name='amount'
                        className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light' >
                      </input>
                    </div>
                  </div>
                  <div className='lg:w-4/12'>
                    <div className=''>
                      <label className=''>Bank Name</label>
                    </div>
                    <div className=''>
                      <input
                        type='text'
                        className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light'
                        name='bankname'
                      />
                    </div>
                  </div>
                  <div className='lg:w-4/12'>
                    <div className=''>
                      <label className=''>IFSC Code</label>
                    </div>
                    <div className=''>
                      <input
                        type='text'
                        className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light'
                        name='ifsc'
                      />
                    </div>
                  </div>
                </div>
                <div className='lg:flex gap-5 text-darktext space-y-3 lg:space-y-0'>
                  <div className='lg:w-4/12'>
                    <div className=''>
                      <label className=''>Account Number</label>
                    </div>
                    <div className=''>
                      <input
                        type='text'
                        className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light'
                        name='accountnumber'
                      />
                    </div>
                  </div>
                  <div className='lg:w-4/12'>
                    <div className=''>
                      <label className=''>Beneficiary Name</label>
                    </div>
                    <div className=''>
                      <input
                        type='text'
                        className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light'
                        name='name'
                      >
                      </input>
                    </div>
                  </div>
                  <div className='lg:w-4/12'>
                    <div className=''>
                      <label className=''>Phone</label>
                    </div>
                    <div className=''>
                      <input
                        type='number'
                        className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light'
                        name='phone'
                      />
                    </div>
                  </div>
                </div>
                <div className='lg:flex gap-5 text-darktext space-y-3 lg:space-y-0'>
                  <div className='lg:w-4/12'>
                    <div className=''>
                      <label className=''>IBAN Number</label>
                    </div>
                    <div className=''>
                      <input
                        type='text'
                        className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light'
                        name='iban'
                      />
                    </div>
                  </div>
                  <div className='lg:w-4/12'>
                    <div className=''>
                      <label className=''>Email</label>
                    </div>
                    <div className=''>
                      <input
                        type='email'
                        className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light'
                        name='email'
                      >
                      </input>
                    </div>
                  </div>
                  <div className='lg:w-4/12'>
                    <div className=''>
                      <label className=''>Country</label>
                    </div>
                    <div className=''>
                      <input
                        type='text'
                        className='border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light'
                        name='country'
                      />
                    </div>
                  </div>
                </div>
                <div className=' flex justify-end mt-10 mr-10'>
                  <button type='submit' className='bg-lightblue hover:bg-blueColor text-white px-5 py-2 rounded-lg'
                  >Withdraw</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default WithdrawModal