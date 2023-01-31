import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import axios from '../../../axios';
import VisaMarkupListSingleRow from './VisaMarkupListSingleRow'

function VisaMarkupList() {
  const [isLoading, setIsLoading] = useState(false)
  const [allVisa, setAllVisa] = useState([])

  const { token } = useSelector(state => state.agents)

  const fetchAllVisa = async () => {
    try {
      setIsLoading(true);
      if (token) {
        const response = await axios.get(`/b2b/visa/list`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setIsLoading(false);
        setAllVisa(response.data || [])
      }
    } catch (err) {
      console.log(err);
      throw Error("Cant find markups");
    }
  };

  useEffect(() => {
    fetchAllVisa()
  },[])
  console.log(allVisa);
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
            <span>{">"} </span>
            <span>Visa</span>
          </div>
        </div>
        <div className='p-2 lg:p-6'>
          <div className="bg-white rounded shadow-sm mt-2 ">
            <div className="flex items-center justify-between border-b border-dashed p-4">
              <h1 className="font-medium">Markup Lists</h1>
              <span className='w-[400px]'>
                <input type="search"
                  className='input w-full'
                  placeholder='search!!!!!' />
              </span>
            </div>
            <div className='overflow-x-auto'>
              <table className="w-full">
                <thead className="bg-[#f3f6f9] text-grayColor text-[14px] text-left">
                  <tr>
                    <th className="font-[500] p-3 whitespace-nowrap">Visa Type Name</th>
                    <th className="font-[500] p-3 whitespace-nowrap">Country</th>
                    <th className="font-[500] p-3 whitespace-nowrap">Default Price</th>
                    <th className="font-[500] p-3 whitespace-nowrap">Agent MarkUp</th>
                    <th className="font-[500] p-3 whitespace-nowrap">Client MarkUp</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-textColor">
                  {allVisa?.map((item,index) => (
                    <VisaMarkupListSingleRow key={index} item={item} />
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

export default VisaMarkupList