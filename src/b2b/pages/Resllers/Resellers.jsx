import React from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

function Resellers() {
  return (
    <div className='text-darktext mx-4'>
      <div className=''>
        <h1 className='text-[25px] font-bold'>Resellers</h1>
      </div>
      <div className="bg-white rounded shadow-sm mt-6">
                <div className="flex items-center justify-between border-b border-dashed p-4">
                    <h1 className="font-medium">Resellers Lists</h1>
                </div>
                <table className="w-full">
                    <thead className="bg-[#f3f6f9] text-grayColor text-[14px] text-left">
                        <tr>
                            <th className="font-[500] p-3">Reseller Id</th>
                            <th className="font-[500] p-3">Company</th>
                            <th className="font-[500] p-3">Representative Name</th>
                            <th className="font-[500] p-3">Phone</th>
                            <th className="font-[500] p-3">Email</th>
                            <th className="font-[500] p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        <tr className="border-b border-tableBorderColor">
                            <td className="p-3">#63b2cc</td>
                            <td className="p-3">
                                Travllers Choice Tours
                            </td>
                            <td className="p-3">Sam Philipie</td>
                            <td className="p-3 ">9800456123</td>
                            <td className="p-3">test@email.com</td>
                            <td className="p-3 flex space-x-1">
                              <span className='text-xl text-lightblue'><AiFillEdit/> </span>
                              <span className='text-xl text-main'><AiFillDelete /> </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default Resellers