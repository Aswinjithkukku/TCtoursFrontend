import React from 'react'
import Lottie from "lottie-react";
import { ErrorAnimation } from '../../data'
import { useLocation, useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate()
  const location = useLocation()
  return (

    <div className='h-[100vh] bg-slate-500'>
      <div className='flex justify-center items-center h-full'>
        <div className='w-[40em] '>
          <Lottie animationData={ErrorAnimation} />
          <p className='text-lg font-semibold tracking-wide text-[#1a2e35] text-center'>The page you looking for is not found!!</p>
          <div className='flex justify-center my-1'>
            <button className='bg-white text-lg font-bold tracking-wider text-[#1a2e35] rounded w-[120px] py-2'
            onClick={() =>  {
              location?.pathname?.includes("/error") ?
              navigate(-2) : navigate(-1)
            }}
            >RETURN</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound