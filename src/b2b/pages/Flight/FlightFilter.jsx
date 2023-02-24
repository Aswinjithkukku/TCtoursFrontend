import React, { useState } from "react";
import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsFillSunriseFill,
  BsFillSunsetFill,
} from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";

const FlightFilter = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleShowSearch = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div className=" col-span-2 ">
      <div className="flex  justify-between px-2 py-1 items-center border-[1px] bg-white text-blue-500">
        <span>Filter Search Results</span>
        <span className="text-[30px] cursor-pointer" onClick={handleShowSearch}>
          <MdOutlineArrowDropDown />
        </span>
      </div>
      {showFilter && (
        <div className="p-4 flex flex-col gap-2 border-[1px] border-t-0 bg-white">
          <div className="border-[1px] p-1 flex justify-between items-center">
            <div>Filter by Values </div>
            <span className="text-[30px] cursor-pointer">
              <MdOutlineArrowDropDown />
            </span>
          </div>
          <div className="border-[1px] p-1 flex justify-between items-center">
            <div>Filter by Values </div>
            <span className="text-[30px] cursor-pointer">
              <MdOutlineArrowDropDown />
            </span>
          </div>
          <div className="border-[1px] p-1 flex justify-between items-center">
            <div>Filter by Values </div>
            <span className="text-[30px] cursor-pointer">
              <MdOutlineArrowDropDown />
            </span>
          </div>
          <div className="border-[1px] p-1 flex justify-between items-center">
            <div>Filter by Values </div>
            <span className="text-[30px] cursor-pointer">
              <MdOutlineArrowDropDown />
            </span>
          </div>
          <div className="border-[1px] p-1 flex justify-between items-center">
            <div>Filter by Values </div>
            <span className="text-[30px] cursor-pointer">
              <MdOutlineArrowDropDown />
            </span>
          </div>
          <div className="border-[1px] p-1 flex justify-between items-center">
            <div>Filter by Values </div>
            <span className="text-[30px] cursor-pointer">
              <MdOutlineArrowDropDown />
            </span>
          </div>
          <div className="border-[1px] p-1 flex flex-col  justify-start text-left items-start">
            <div>Onward </div>
            <h2>Departure Time</h2>
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col  gap-1 bg-[whitesmoke] p-2 items-center">
                <span className="text-[25px]">
                  <BsFillMoonStarsFill />
                </span>
                <span>00:00</span>
                <span className="bg-red-200 h-1">-</span>
                <span>23:59</span>
              </div>
              <div className="flex flex-col  gap-1 bg-[whitesmoke] p-2 items-center">
                <span className="text-[25px]">
                  <BsFillSunriseFill />
                </span>
                <span>00:00</span>
                <span>-</span>
                <span>23:59</span>
              </div>
              <div className="flex flex-col  gap-1 bg-[whitesmoke] p-2 items-center">
                <span className="text-[25px]">
                  <BsFillSunFill />
                </span>
                <span>00:00</span>
                <span>-</span>
                <span>23:59</span>
              </div>
              <div className="flex flex-col  gap-1 bg-[whitesmoke] p-2 items-center">
                <span className="text-[25px]">
                  <BsFillSunsetFill />
                </span>
                <span>00:00</span>
                <span>-</span>
                <span>23:59</span>
              </div>
            </div>
            <h2>Arrival Time</h2>
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col  gap-1 bg-[whitesmoke] p-2 items-center">
                <span className="text-[25px]">
                  <BsFillMoonStarsFill />
                </span>
                <span>00:00</span>
                <span>-</span>
                <span>23:59</span>
              </div>
              <div className="flex flex-col  gap-1 bg-[whitesmoke] p-2 items-center">
                <span className="text-[25px]">
                  <BsFillSunriseFill />
                </span>
                <span>00:00</span>
                <span>-</span>
                <span>23:59</span>
              </div>
              <div className="flex flex-col  gap-1 bg-[whitesmoke] p-2 items-center">
                <span className="text-[25px]">
                  <BsFillSunFill />
                </span>
                <span>00:00</span>
                <span>-</span>
                <span>23:59</span>
              </div>
              <div className="flex flex-col  gap-1 bg-[whitesmoke] p-2 items-center">
                <span className="text-[25px]">
                  <BsFillSunsetFill />
                </span>
                <span>00:00</span>
                <span>-</span>
                <span>23:59</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightFilter;
