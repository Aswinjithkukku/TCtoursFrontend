import React, { useState } from "react";
import {
  AiOutlinePlus,
} from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useSelector } from "react-redux";

function VisaApplyCard() {
  const { home } = useSelector((state) => state.general);


  return (
    <>
      <div className="">
        <div className="  lg:bg-[#f4f7ff] shadow mx-6 rounded-2xl px-5 py-7 lg:mt-5">

          <div className="hidden lg:block rounded-2xl space-y-4 bg-white shadow-sm p-1 px-4 relative ">
            <input
              type="checkbox"
              className="peer absolute top-5 w-full h-5 inset-x-0  cursor-pointer opacity-0"
              defaultChecked
            />
            <div className="flex justify-between text-lightblue ">
              <span className="text-xl">Contact Us</span>
              <span className="text-xl">
                <AiOutlinePlus />{" "}
              </span>
            </div>
            <div className="peer-checked:max-h-[100vh] max-h-0 transition-all duration-500 overflow-hidden space-y-3">
              <div className="space-y-1 w-full px-2">
                <div className="flex items-center space-x-2 text-lightblue">
                  <span className=" text-lightblue">
                    <BsPhone />
                  </span>
                  <span className="text-xs uppercase">Phone Number</span>
                </div>
                <div className="">
                  <p className="text-gray-500 font-[500] text-sm">+{home?.phoneNumber1} </p>
                </div>
              </div>
              <div className="space-y-2 w-full px-2">
                <div className="flex items-center space-x-2 text-lightblue">
                  <span className=" text-lightblue">
                    <BsPhone />
                  </span>
                  <span className="text-xs uppercase">Phone Number</span>
                </div>
                <div className="">
                  <p className="text-gray-500 font-[500] text-sm">+{home?.phoneNumber2} </p>
                </div>
              </div>
              <div className="space-y-2 w-full px-2  mb-3">
                <div className="flex items-center space-x-2 text-lightblue">
                  <span className=" text-lightblue">
                    <MdEmail />
                  </span>
                  <span className="text-xs uppercase">Email Id</span>
                </div>
                <div className="">
                  <p className="text-gray-500 font-[500] text-sm">{home?.email} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisaApplyCard;
