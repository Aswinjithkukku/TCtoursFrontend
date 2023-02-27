import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TimeRanges } from "./filters";

const FlightFilter = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [filters, setFilters] = useState({
    departureTimeRange: [...TimeRanges],
    arrivalTimeRange: [...TimeRanges],
  });

  const handleShowSearch = () => {
    setShowFilter(!showFilter);
  };

  const TimeCard = ({ data }) => {
    return (
      <>
        <div className="flex flex-col  bg-transparent p-2 items-center  rounded-md">
          <span className="text-[25px]">{data?.icon}</span>
          <span>{data?.from}</span>
          <span className="p-0 bg-black  h-[2px] w-[8px] my-1"></span>
          <span>{data?.to}</span>
        </div>
      </>
    );
  };

  const handleDprtrTimeRangeChange = (index) => {
    const filter = { ...filters };
    const dptrRange = filter.departureTimeRange;

    dptrRange[index] = {
      ...dptrRange[index],
      isSelected: !dptrRange[index].isSelected,
    };
    setFilters({
      ...filter,
      dptrRange,
    });
  };

  const handleArvlTimeRangeChange = (index) => {
    const filter = { ...filters };
    const arvlRange = filter.arrivalTimeRange;

    arvlRange[index] = {
      ...arvlRange[index],
      isSelected: !arvlRange[index].isSelected,
    };
    setFilters({
      ...filter,
      arvlRange,
    });
  };

  const FilterDD = ({ label, index, children }) => {
    const [show, setShow] = useState(false);
    return (
      <>
        <div>
          <div
            className="border-[1px] p-1 flex justify-between items-center"
            onClick={() => {
              setShow(!show);
            }}
          >
            <div>{label} </div>
            <span className="text-[30px] cursor-pointer">
              <MdOutlineArrowDropDown />
            </span>
          </div>
          {show && (
            <div className="border-[1px] border-t-0 p-2">{children}</div>
          )}
        </div>
      </>
    );
  };

  return (
    <div className=" col-span-2  rounded-md overflow-hidden bg-white px-4">
      <div className="flex  justify-between  py-1 items-center   text-blue-500 ">
        <span>Filter Search Results</span>
        <span className="text-[30px] cursor-pointer" onClick={handleShowSearch}>
          <MdOutlineArrowDropDown />
        </span>
      </div>
      {showFilter && (
        <div className=" flex flex-col gap-2 bg-white">
          <FilterDD label="Select Price Range">
            <input type="range" className="w-[100%]" />
          </FilterDD>
          <FilterDD label="Filter By Stops">
            <div>
              <ul>
                <li className="flex gap-2 cursor-pointer">
                  <input type="checkbox" />
                  <span>Direct</span>
                </li>
                <li className="flex gap-2 cursor-pointer">
                  <input type="checkbox" />
                  <span>1</span>
                </li>
                <li className="flex gap-2 cursor-pointer">
                  {" "}
                  <input type="checkbox" />
                  <span>2</span>
                </li>
                <li className="flex gap-2 cursor-pointer">
                  <input type="checkbox" />
                  <span>3</span>
                </li>
              </ul>
            </div>
          </FilterDD>
          <FilterDD label="Filter BY Airlines">
            <div>
              <ul>
                <li className="flex gap-2 cursor-pointer">
                  <input type="checkbox" />
                  <span>Airline Name</span>
                </li>
              </ul>
            </div>
          </FilterDD>
          <FilterDD label="Filter By Airports">
            <div>
              <ul>
                <li className="flex gap-2 cursor-pointer">
                  <input type="checkbox" />
                  <span>Airport Name</span>
                </li>
              </ul>
            </div>
          </FilterDD>
        </div>
      )}
      <div className="border-[1px] p-2 flex flex-col gap-2 justify-start text-left items-start my-4 rounded-md">
        <h2 className=" text-blue-600 font-bold">Onward </h2>
        <h2 className="text-blue-500 font-semibold">Departure Time</h2>
        <div className="grid grid-cols-4 gap-2 w-[100%] ">
          {filters?.departureTimeRange?.map((ele, i) => (
            <>
              <button
                onClick={() => {
                  handleDprtrTimeRangeChange(i);
                }}
                className={`rounded-md transform hover:translate-y-[-8px] hover:text-blue-500 overflow-hidden bg-blue-50 border-2 hover:border-blue-200 border-blue-50 ${
                  ele.isSelected && "bg-blue-200 text-blue-500 border-2 "
                }`}
              >
                <TimeCard data={ele} />
              </button>
            </>
          ))}
        </div>
        <h2 className="text-blue-500 font-semibold">Arrival Time</h2>
        <div className="grid grid-cols-4 gap-2 w-[100%]">
          {filters?.arrivalTimeRange?.map((ele, i) => (
            <>
              <button
                onClick={() => {
                  handleArvlTimeRangeChange(i);
                }}
                className={`rounded-md  hover:text-blue-500 transform hover:translate-y-[-8px] overflow-hidden bg-blue-50 ${
                  ele.isSelected && "bg-blue-200 text-blue-500"
                }`}
              >
                <TimeCard data={ele} />
              </button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightFilter;
