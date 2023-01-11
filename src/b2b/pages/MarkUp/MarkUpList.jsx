import React, { useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import AddMarkupModal from './AddMarkupModal'
import EditMarkupModal from './EditMarkupModal'

function MarkUpList() {
  const [markup, setMarkup] = useState({
    add: false,
    edit: false
  })
  return (
    <>
      <div className='text-darktext mx-4'>
        <div className=''>
          <h1 className='text-[25px] font-bold'>Markups</h1>
        </div>
        <div className="bg-white rounded shadow-sm mt-6">
          <div className="flex items-center justify-between border-b border-dashed p-4">
            <h1 className="font-medium">Markup Lists</h1>
            <span className=''>
              <button className='py-1 w-[130px] text-sm text-light rounded-md bg-lightblue whitespace-nowrap'
              onClick={() => setMarkup({add: true, edit: false})}>
                Add Markup
              </button>
            </span>
          </div>
          <table className="w-full">
            <thead className="bg-[#f3f6f9] text-grayColor text-[14px] text-left">
              <tr>
                <th className="font-[500] p-3">Attraction Id</th>
                <th className="font-[500] p-3">Attraction</th>
                <th className="font-[500] p-3">Previous Price</th>
                <th className="font-[500] p-3">Flat</th>
                <th className="font-[500] p-3">Percentage</th>
                <th className="font-[500] p-3">Current Price</th>
                <th className="font-[500] p-3">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-tableBorderColor">
                <td className="p-3">#63b2cc</td>
                <td className="p-3">
                  SKy Fly
                </td>
                <td className="p-3">120</td>
                <td className="p-3 ">50</td>
                <td className="p-3">N/A</td>
                <td className="p-3">170</td>
                <td className="p-3 flex space-x-1">
                  <span className='text-xl text-lightblue'
                    onClick={() => setMarkup({
                      add: false,
                      edit: true
                    })}><AiFillEdit /> </span>
                  <span className='text-xl text-main'><AiFillDelete /> </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {markup.edit && (
        <EditMarkupModal
        setMarkup={setMarkup}
        />
      )}
      {markup.add && (
        <AddMarkupModal
        setMarkup={setMarkup}
        />
      )}
    </>
  )
}

export default MarkUpList