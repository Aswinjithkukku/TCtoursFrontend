import React, { useState } from "react";
import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsFillSunriseFill,
  BsFillSunsetFill,
} from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TbArrowsRight } from "react-icons/tb";
import { useSelector } from "react-redux";
import SearchCards from "../../components/Cards/SearchCards";
import FlightCard from "./FlightCard";

const FlightHomePage = () => {
  const { flightsData, travellers } = useSelector((state) => state.flight);
  const [showFilter, setShowFilter] = useState(false);

  console.log(travellers);

  const totalTravellers =
    travellers.children + travellers.adult + travellers.infant;

  const Flight = ({ info }) => {
    return (
      <>
        <div className="max-w-[150px] flex flex-col justify-center px-4 items-center border-r-[1px]">
          <div className="flex gap-x-2">
            <div className="flex flex-col">
              <span className="font-semibold">{info?.cityFrom?.iata}</span>
              {/* <span className="text-[12px]">{info?.cityFrom?.name}</span> */}
            </div>
            <div className="text-[15px] text-blue-500 flex items-center">
              <TbArrowsRight />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">{info?.cityTo?.iata}</span>
              {/* <span className="text-[12px]">{info?.cityTo?.name}</span> */}
            </div>
          </div>
          <div className="w-[100%] text-[12px] flex justify-center">
            {info?.departureDate}
          </div>
        </div>
      </>
    );
  };

  console.log(flightsData.length);

  const handleShowSearch = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="min-h-[100vh]">
      <div className="p-2 lg:p-6">
        <div className="">
          <SearchCards />
        </div>
      </div>
      <div className=" w-[100%] h-[80px] px-10 flex  ">
        <div className=" w-[100%] h-[80px]  flex   justify-between rounded-lg border-[1px]">
          <div className=" w-[100%] h-[100%] flex ">
            <div className="">
              {flightsData.length === 1 ? (
                <div className="max-w-[240px] flex justify-center px-4 items-center border-r-[1px] h-[100%] gap-x-6 ">
                  <div className="flex flex-col">
                    <span className="font-semibold">
                      {flightsData?.[0]?.cityFrom?.iata}
                    </span>
                    <span className="text-[12px]">
                      {flightsData?.[0]?.cityFrom?.name}
                    </span>
                  </div>
                  <div className="text-[20px] text-blue-500 flex items-center">
                    <TbArrowsRight />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">
                      {flightsData?.[0]?.cityTo?.iata}
                    </span>
                    <span className="text-[12px]">
                      {flightsData?.[0]?.cityTo?.name}
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <div className=" w-[100%] h-[100%] flex ">
                    {flightsData?.map((ele) => (
                      <>
                        <Flight info={ele} />
                      </>
                    ))}
                  </div>
                </>
              )}
            </div>
            {flightsData.length === 1 && (
              <div className="max-w-[150px] flex flex-col px-4 justify-center border-r-[1px] ">
                <span className="text-[12px]">Departure Date</span>
                <span className="text-[16px]  tracking-[2px] font-medium">
                  {flightsData?.[0]?.departureDate}
                </span>
              </div>
            )}
            <div className="max-w-[150px] flex flex-col px-4 justify-center ">
              <span className="text-[12px]">Travellers</span>
              <span className="text-[18px] font-medium tracking-[2px]">
                {totalTravellers < 10 && "0"}
                {totalTravellers}
              </span>
            </div>
          </div>
          <div className="flex items-center px-4">
            <button className="h-10 px-4 py-2 bg-blue-500 text-white rounded-md">
              Change
            </button>
          </div>
        </div>
      </div>
      <div className=" w-[100%] grid grid-cols-5 p-10 gap-5">
        <div className=" col-span-2 ">
          <div className="flex  justify-between px-2 py-1 items-center border-[1px] bg-white text-blue-500">
            <span>Filter Search Results</span>
            <span
              className="text-[30px] cursor-pointer"
              onClick={handleShowSearch}
            >
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
        <div className=" flex flex-wrap col-span-3">
          <FlightCard />
        </div>
      </div>
    </div>
  );
};

export default FlightHomePage;
