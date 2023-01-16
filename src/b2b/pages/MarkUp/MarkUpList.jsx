import React, { useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import AddMarkupModal from './AddMarkupModal'
import EditMarkupModal from './EditMarkupModal'

function MarkUpList() {
  const [markup, setMarkup] = useState({
    add: false,
    edit: false
  })
  return (
    <>
      <div className=' '>
        <div className="bg-white flex items-center justify-between gap-[10px] px-2 lg:px-6 shadow-sm border-t py-2">
          <h1 className="font-[600] text-[15px] uppercase">
            Markups
          </h1>
          <div className="text-sm text-grayColor">
            <Link to="/b2b" className="text-textColor">
              Dashboard{" "}
            </Link>
            <span>{">"} </span>
            <span>Markups</span>
          </div>
        </div>
        <div className='p-2 lg:p-6'>
          <div className="bg-white rounded shadow-sm mt-2 lg:mt-6">
            <div className="flex items-center justify-between border-b border-dashed p-4">
              <h1 className="font-medium">Markup Lists</h1>
              <span className=''>
                <button className='button w-[100px]'
                  onClick={() => setMarkup({ add: true, edit: false })}>
                  Add Markup
                </button>
              </span>
            </div>
            <div className='overflow-x-auto'>
              <table className="w-full">
                <thead className="bg-[#f3f6f9] text-grayColor text-[14px] text-left">
                  <tr>
                    <th className="font-[500] p-3 whitespace-nowrap">Attraction Id</th>
                    <th className="font-[500] p-3 whitespace-nowrap">Attraction</th>
                    <th className="font-[500] p-3 whitespace-nowrap">Previous Price</th>
                    <th className="font-[500] p-3 whitespace-nowrap">Flat</th>
                    <th className="font-[500] p-3 whitespace-nowrap">Percentage</th>
                    <th className="font-[500] p-3 whitespace-nowrap">Current Price</th>
                    <th className="font-[500] p-3 whitespace-nowrap">Status</th>
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