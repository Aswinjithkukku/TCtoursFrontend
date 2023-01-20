import React, { useRef, useState } from 'react'
import { MdClose } from 'react-icons/md';
import { useSelector } from 'react-redux';
import axios from '../../../axios';
import { useHandleClickOutside } from '../../../hooks';

function ClientMarkupModal({ setMarkup }) {

  const wrapperRef = useRef();
  useHandleClickOutside(wrapperRef, () =>
    setMarkup({ client: false, agent: false })
  );

  const [markupType, setMarkupType] = useState('')
  const [markupAmount, setMarkupAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const { token } = useSelector(state => state.agents)

  const submitHandler = async(e) => {
    try {
      e.preventDefault();
      setError('')
      setIsLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      const response = await axios.patch("/b2b/resellers/client/markup/upsert", {
        markup: markupAmount,
        markupType: markupType,
        attraction: ''
      }, config);

      setIsLoading(false);
      return response.data;
    } catch (err) {
      setError(
        err?.response?.data?.error || "Something went wrong, Try again"
      );
      setIsLoading(false);
    }
  }

  return (
    <div>

      <div className="fixed inset-0 w-full h-full lightglass flex items-center justify-center z-20 ">
        <div
          ref={wrapperRef}
          className="bg-[#fff] w-full max-h-[90vh] max-w-[500px] rounded shadow-[0_1rem_3rem_rgb(0_0_0_/_18%)] overflow-y-auto"
        >
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="font-medium mb-2">
              Client Markup
            </h2>
            <button
              className="h-auto bg-transparent text-textColor text-xl"
              onClick={() => setMarkup({ client: false, agent: false })}
            >
              <MdClose />
            </button>
          </div>
          <div className="p-6">
            <form onSubmit={submitHandler} className='space-y-3'>
              <h2 className='font-medium'>Attraction Name</h2>
              <div>
                <label htmlFor="" className='label'>Markup Type*</label>
                <select
                  className='select'
                  type="text"
                  placeholder="Enter Flat Amount"
                  value={markupType}
                  onChange={(e) => setMarkupType(e.target.value)}
                  required
                >
                  <option className='text-text' hidden>Choose Markup Type</option>
                  <option value={'flat'}>flat</option>
                  <option value={'percentage'}>percentage</option>
                </select>
              </div>
              <div>
                <label htmlFor="" className='label'>Mark up*</label>
                <input
                  className='input'
                  type="number"
                  placeholder="Enter Percentage"
                  value={markupAmount}
                  onChange={(e) => setMarkupAmount(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4 flex items-center justify-end gap-[12px]">
                <button className="w-[100px] button" type='submit'> 
                Mark
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ClientMarkupModal