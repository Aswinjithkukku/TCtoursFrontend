import React, { useEffect, useState } from "react";
import { AiFillThunderbolt, AiOutlineMobile } from "react-icons/ai";
import { BsCalendar2X } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { GiClockwork, GiSandsOfTime, GiSurferVan } from "react-icons/gi";
import { useSelector } from "react-redux";

function FeatureSection() {
  const { excursion } = useSelector((state) => state.excursion);

  // const enabledDays = excursion?.availability?.filter(item => item?.isEnabled === true)
  //  if(enabledDays > 3 && enabledDays !== 7) {
  //     let days = excursion?.availability?.filter(item => item?.isEnabled === false)
  //     setAvail(days)
  // }else if (enabledDays < 3){
  //     setAvail(enabledDays)
  // }
  // console.log(avail);

  return (
    <div className=" md:border border-lightblue bg-light py-4 lg:py-5 px-3 rounded-2xl md:my-4 lg:flex text-center justify-between w-full grid grid-cols-3 gap-5">
      {excursion?.availability && (
        <div className="text-center bg-soft lg:bg-light py-5 lg:py-0 rounded-lg lg:rounded-none">
          <span className="text-2xl lg:text-2xl text-lightblue flex justify-center">
            <IoCalendarNumberSharp />{" "}
          </span>
          <span className="text-[11px] text-text">
            {" "}
            Availibility:
            {/* {avail.length > 0 ? (
            avail.map((item,index )=> (
                <p className='text-[11px] text-text'key={index}>{item.day}</p>
            ))
        ) : "Daily"}  */}
            Daily
          </span>
        </div>
      )}
      {excursion?.duration && (
        <div className="text-center bg-soft lg:bg-light py-5 lg:py-0 rounded-lg lg:rounded-none">
          <span className="text-2xl lg:text-2xl text-lightblue flex justify-center">
            <GiSandsOfTime />{" "}
          </span>
          <span className="text-[11px] text-text">
            Duration: {excursion?.duration + " " + excursion?.durationType}{" "}
            (approx){" "}
          </span>
        </div>
      )}
      <div className="text-center bg-soft lg:bg-light py-5 lg:py-0 rounded-lg lg:rounded-none">
        <span className="text-2xl lg:text-2xl text-lightblue flex justify-center">
          <GiClockwork />{" "}
        </span>
        <span className="text-[11px] text-text">
          Time slot:{" "}
          {excursion?.availability && excursion?.availability[0]?.open}-{" "}
          {excursion?.availability && excursion?.availability[0]?.close}
        </span>
      </div>
      {/* <div className='text-center bg-soft lg:bg-light py-5 lg:py-0 rounded-lg lg:rounded-none'>
        <span className='text-2xl lg:text-2xl text-lightblue flex justify-center'><GiSurferVan /> </span>
        <span className='text-[11px] text-text'>Pick Up & Drive</span>
    </div> */}
      {excursion?.bookingType === "ticket" && (
        <div className="text-center bg-soft lg:bg-light py-5 lg:py-0 rounded-lg lg:rounded-none">
          <span className="text-2xl lg:text-2xl text-lightblue flex justify-center">
            <AiFillThunderbolt />{" "}
          </span>
          <span className="text-[11px] text-text">Instant Confirmation</span>
        </div>
      )}
      <div className="text-center bg-soft lg:bg-light py-5 lg:py-0 rounded-lg lg:rounded-none">
        <span className="text-2xl lg:text-2xl text-lightblue flex justify-center">
          <BsCalendar2X />{" "}
        </span>
        {excursion?.cancellationType === "freeCancellation" ? (
          <span className="text-[11px] text-text">
            Free cancellation upto 24 hours
          </span>
        ) : excursion?.cancellationType === "cancelWithFee" ? (
            <span className="text-[11px] text-text">
             Cancellation With Fee
          </span>
        ) : (
            <span className="text-[11px] text-text">
            Non Refundable
          </span> 
        )}
      </div>
    </div>
  );
}

export default FeatureSection;
