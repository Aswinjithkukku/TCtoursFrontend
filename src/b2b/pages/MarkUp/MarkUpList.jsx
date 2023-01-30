import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMarkups, clearMarkups  } from '../../../redux/slices/markupSlice'
import MarkupListSingleRow from './MarkupListSingleRow'

function MarkUpList() {
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')
  const { markups } = useSelector(state => state.markups)

  useEffect(() => {
    dispatch(fetchMarkups(search))
    console.log("hi");
  }, [dispatch,search])
  useEffect(() => {
    return () => {
      dispatch(clearMarkups())
    }
  },[])

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
              <span className='w-[400px]'>
                <input type="search" 
                className='input w-full' 
                placeholder='search!!!!!'
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
              </span>
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
                <tbody className="text-sm text-textColor">
                  {markups?.data?.map((item, index) => (
                    <MarkupListSingleRow
                    item={item}
                    key={index}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MarkUpList