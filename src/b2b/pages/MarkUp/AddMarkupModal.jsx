import React, { useRef } from 'react'
import { MdClose } from 'react-icons/md';
import { useHandleClickOutside } from '../../../hooks';

function AddMarkupModal({
  setMarkup
}) {

  const wrapperRef = useRef();
  useHandleClickOutside(wrapperRef, () =>
    setMarkup({add: false, edit: false})
  );

  return (
    <div>

      <div className="fixed inset-0 w-full h-full lightglass flex items-center justify-center z-20 ">
        <div
          ref={wrapperRef}
          className="bg-[#fff] w-full max-h-[90vh] max-w-[500px] rounded shadow-[0_1rem_3rem_rgb(0_0_0_/_18%)] overflow-y-auto"
        >
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="font-medium mb-2">
              Add Markup
            </h2>
            <button
              className="h-auto bg-transparent text-textColor text-xl"
              onClick={() => setMarkup({add: false, edit: false})}
            >
              <MdClose />
            </button>
          </div>
          <div className="p-6">
            <form action="" className='space-y-2'>
              <div>
                <label className='label' htmlFor="">Excursion</label>
                <select
                  className='select'
                  type="text"
                  required
                >
                  <option> Choose Attraction</option>
                </select>
              </div>
              <div>
                <label className='label' htmlFor="">Price</label>
                <input
                  className='input'
                  type="number"
                  readonly
                />
              </div>
              <div>
                <label className='label' htmlFor="">Flat</label>
                <input
                  className='input'
                  type="text"
                  placeholder="Enter Flat Amount"
                />
              </div>
              <div>
                <label className='label' htmlFor="">Percentage</label>
                <input
                  className='input'
                  type="text"
                  placeholder="Enter Percentage"
                />
              </div>
              <div>
                <label className='label' htmlFor="">Current Price</label>
                <input
                  className='input'
                  type="text"
                  placeholder="Enter Percentage"
                />
              </div>
              <div className="mt-4 flex items-center justify-end gap-[12px]">
                <button className="button w-[100px]">
                   Add Markup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddMarkupModal