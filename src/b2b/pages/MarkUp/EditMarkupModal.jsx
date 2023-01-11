import React, { useRef } from 'react'
import { MdClose } from 'react-icons/md';
import { useHandleClickOutside } from '../../../hooks';

function EditMarkupModal({
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
              Edit Markup
            </h2>
            <button
              className="h-auto bg-transparent text-textColor text-xl"
              onClick={() => setMarkup({add: false, edit: false})}
            >
              <MdClose />
            </button>
          </div>
          <div className="p-4 text-darktext">
            <form action="" className='space-y-2'>
              {/* <div>
                <label htmlFor="">Excursion</label>
                <select
                  className='border rounded w-full outline-none text-text text-sm py-1 px-1'
                  type="text"
                  required
                >
                  <option> Choose Attraction</option>
                </select>
              </div> */}
              <h2 className='font-medium'>Attraction Name</h2>
              <div>
                <label htmlFor="">Price</label>
                <input
                  className='border rounded w-full outline-none placeholder:text-text text-sm py-1 px-1'
                  type="text"
                  placeholder="Enter Flat Amount"
                />
              </div>
              <div>
                <label htmlFor="">Flat</label>
                <input
                  className='border rounded w-full outline-none placeholder:text-text text-sm py-1 px-1'
                  type="text"
                  placeholder="Enter Flat Amount"
                />
              </div>
              <div>
                <label htmlFor="">Percentage</label>
                <input
                  className='border rounded w-full outline-none placeholder:text-text text-sm py-1 px-1'
                  type="text"
                  placeholder="Enter Percentage"
                />
              </div>
              <div>
                <label htmlFor="">Current Price</label>
                <input
                  className='border rounded w-full outline-none placeholder:text-text text-sm py-1 px-1'
                  type="text"
                  placeholder="Enter Percentage"
                />
              </div>
              <div className="mt-4 flex items-center justify-end gap-[12px]">
                <button className="w-[140px] bg-lightblue text-light rounded-md text-sm py-1"> Add Markup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default EditMarkupModal