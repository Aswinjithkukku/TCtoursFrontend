import React from "react";
import {
  MdOutlineFlight,
  MdOutlineFlightLand,
  MdOutlineFlightTakeoff,
} from "react-icons/md";

const FlightCard = () => {
  return (
    <>
      <div className="grid grid-cols-3 min-w-[400px] max-w-[800px] bg-white h-[200px] p-4 rounded-lg items-center cursor-pointer">
        <div className="col-span-3">logosection</div>
        <div className="grid grid-cols-10 col-span-3  mb-2 gap-4 items-center ">
          <div className="flex flex-col col-span-2 items-end">
            <span className="text-left text-[20px]">10:10</span>
            <span className="text-left text-[12px] font-semibold text-blue-400">
              Mumbai
            </span>
          </div>
          <div className="col-span-6 flex items-center justify-center gap-1">
            <span className="text-[20px]  mb-[14px] transform text-blue-500">
              <MdOutlineFlightTakeoff />
            </span>
            <div className="border-t-2 w-[100%] border-dashed h-[1px] relative">
              <span className="absolute bottom-3 text-[20px] right-[45%] transform rotate-90 text-blue-500">
                <MdOutlineFlight />
              </span>
              <span className="absolute -bottom-6 text-[12px] right-[35%] w-[100px] text-teal-600  text-center">
                2 Hr. 15 min
              </span>
            </div>
            <span className="text-[20px]  mb-[14px] text-blue-500">
              <MdOutlineFlightLand />{" "}
            </span>
          </div>
          <div className="flex flex-col col-span-2 items-start">
            <span className="text-left text-[20px]">12:30</span>
            <span className="text-left text-[12px] font-semibold text-teal-500">
              Delhi
            </span>
          </div>
        </div>
        <div className="col-span-2 flex justify-center items-center flex-col pl-4">
          <h2 className="text-[12px] w-[100%]">Price : </h2>
          <h2 className="text-[18px] font-semibold w-[100%]">1200 AED</h2>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <button className="bg-blue-500 text-white rounded-md h-10 px-4 font-bold">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default FlightCard;
