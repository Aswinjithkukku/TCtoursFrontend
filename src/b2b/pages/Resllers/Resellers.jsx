import React, { useEffect } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { fetchResellers } from '../../../redux/slices/resellerSlice'

function Resellers() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { resellers } = useSelector(state => state.resellers)

  useEffect(() => {
    dispatch(fetchResellers())
  },[dispatch])

  console.log(resellers);

  return (
    <div className=''>
      <div className="bg-white flex items-center justify-between gap-[10px] px-2 lg:px-6 shadow-sm border-t py-2">
        <h1 className="font-[600] text-[15px] uppercase">
          Resellers
        </h1>
        <div className="text-sm text-grayColor">
          <Link to="/b2b" className="text-textColor">
            Dashboard{" "}
          </Link>
          <span>{">"} </span>
          <span>Total resellers</span>
        </div>
      </div>
      <div className='p-2 lg:p-6'>
        <div className="bg-white rounded shadow-sm mt-2 lg:mt-6">
          <div className="flex items-center justify-between border-b border-dashed p-3 lg:p-6">
            <h1 className="font-medium">Resellers Lists</h1>
          </div>
          <div className='overflow-x-auto'>
            <table className="w-full">
              <thead className="bg-[#f3f6f9] text-grayColor text-[14px] text-left">
                <tr>
                  <th className="font-[500] p-3 whitespace-nowrap">Agent Code</th>
                  <th className="font-[500] p-3 whitespace-nowrap">Company</th>
                  <th className="font-[500] p-3 whitespace-nowrap">Representative Name</th>
                  <th className="font-[500] p-3 whitespace-nowrap">Phone</th>
                  <th className="font-[500] p-3 whitespace-nowrap">Whatsapp</th>
                  <th className="font-[500] p-3 whitespace-nowrap">Email</th>
                  <th className="font-[500] p-3 whitespace-nowrap">Designation</th>
                  <th className="font-[500] p-3 whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {resellers?.map((item,index) => (
                <tr className="border-b border-tableBorderColor cursor-default" 
                key={index}
                onClick={() => navigate(`/b2b/reseller/${item?._id}`)}
                >
                  <td className="p-3">{item?.agentCode}</td>
                  <td className="p-3">
                    <div className='w-[150px] md:w-auto'>
                    {item?.companyName}
                    </div>
                  </td>
                  <td className="p-3">{item?.name}</td>
                  <td className="p-3 ">{item?.phoneNumber}</td>
                  <td className="p-3 ">{item?.whatsappNumber}</td>
                  <td className="p-3">{item?.email}</td>
                  <td className="p-3">{item?.designation}</td>
                  <td className="p-3 flex space-x-1">
                    <span className='text-xl text-lightblue'
                      onClick={() => navigate('/b2b/reseller/edit')}
                    ><AiFillEdit /> </span>
                    <span className='text-xl text-main'><AiFillDelete /> </span>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resellers