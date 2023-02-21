import React from 'react'
import { Link } from 'react-router-dom'
import VisaNavigator from './VisaNavigator'

function VisaIndex() {
  return (
    <>
      <div>
        {/* <div className="bg-white flex items-center justify-between gap-[10px] px-2 lg:px-6 shadow-sm border-t py-2">
          <h1 className="font-[600] text-[15px] uppercase">
            Visa
          </h1>
          <div className="text-sm text-grayColor flex items-center gap-[5px]">
            <Link to="/b2b" className="text-textColor">
              Dashboard{" "}
            </Link>
            <span>{">"} </span>
            <span>Visa</span>
            <span>{">"} </span>
            <span>Apply</span>
          </div>
        </div> */}

        <div className="p-2 ">
          <div className="">
          <VisaNavigator />
          </div>
        </div>
      </div>
    </>
  )
}

export default VisaIndex