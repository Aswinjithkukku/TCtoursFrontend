import React, { useEffect, useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMarkups } from '../../../redux/slices/markupSlice'
import AgentMarkupModal from './AgentMarkupModal'
import ClientMarkupModal from './ClientMarkupModal'

function MarkUpList() {
  const dispatch = useDispatch()
  const [markup, setMarkup] = useState({
    client: false,
    agent: false
  })

  useEffect(() => {
    dispatch(fetchMarkups())
  }, [dispatch])

  const { markups } = useSelector(state => state.markups)
  console.log(markups);

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
              {/* <span className=''>
                <button className='button w-[100px]'
                  onClick={() => setMarkup({ add: true, edit: false })}>
                  Add Markup
                </button>
              </span> */}
            </div>
            <div className='overflow-x-auto'>
              <table className="w-full">
                <thead className="bg-[#f3f6f9] text-grayColor text-[14px] text-left">
                  <tr>
                    <th className="font-[500] p-3 whitespace-nowrap">Attraction</th>
                    <th className="font-[500] p-3 whitespace-nowrap">Booking Type</th>
                    <th className="font-[500] p-3 whitespace-nowrap">Destination</th>
                    <th className="font-[500] p-3 whitespace-nowrap">Agent MarkUp</th>
                    <th className="font-[500] p-3 whitespace-nowrap">Client MarkUp</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {markups?.data?.map((item, index) => (
                    <tr className="border-b border-tableBorderColor" key={index}>
                      <td className="p-3">
                        {item?.title}
                      </td>
                      <td className="p-3">{item?.bookingType}</td>
                      <td className="p-3 ">Dubai</td>
                      <td className="p-3">
                        <span className='flex space-x-2'>
                          <p className=''>
                            {item?.isOffer === true ?
                              item?.offerType === ("flat" && `FLAT ${item?.markupClient}`) ||
                              (item?.offerType === "percentage" && `${item?.markupClient} %`) :
                              'N/A'
                            }
                          </p>
                          {/* <p className=''></p> */}
                          <p className='underline text-lightblue cursor-pointer'
                            onClick={() => setMarkup({
                              client: false,
                              agent: true
                            })}
                          >Edit</p>
                        </span>
                      </td>
                      <td className="p-3">
                        <span className='flex space-x-2'>
                          <p className=''>
                            {item?.isOffer === true ?
                              (item?.offerType === "flat" && `FLAT ${item?.markupClient}`) ||
                              (item?.offerType === "percentage" && `${item?.markupClient} %`) :
                              'N/A'
                            }
                          </p>
                          {/* <p className=''></p> */}
                          <p className='underline text-lightblue cursor-pointer'
                            onClick={() => setMarkup({
                              client: true,
                              agent: false
                            })}
                          >Edit</p>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {markup.client && (
        <ClientMarkupModal
          setMarkup={setMarkup}
        />
      )}
      {markup.agent && (
        <AgentMarkupModal
          setMarkup={setMarkup}
        />
      )}
    </>
  )
}

export default MarkUpList