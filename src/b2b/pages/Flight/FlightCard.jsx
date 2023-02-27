import React from "react";
import formatDate from "../../../utils/formatDate";
import {
  MdOutlineFlight,
  MdOutlineFlightLand,
  MdOutlineFlightTakeoff,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const FlightCard = ({ data, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/b2b/flight/booking/54646545645");
  };

  const duration =
    new Date(data?.lastArrival?.dateTime) -
    new Date(data?.firstDeparture?.dateTime);
  let flightDuration = duration / (1000 * 60 * 60) + "";
  flightDuration = flightDuration.split(".");

  const flightDurationMin = 60 / +flightDuration?.[1];

  console.log(data);
  return (
    <>
      <div className="grid grid-cols-8 min-w-[400px]  bg-white h-[140px] p-4 rounded-lg items-center cursor-pointer shadow-lg mb-4 transform hover:translate-y-[-4px] transition-all">
        <div className="col-span-1">
          <div className=" grid place-items-center">
            {data ? (
              <>
                <img
                  src="https://secure.mytravellerschoice.com/public/images/home/image-1677139835531-842067063.png"
                  alt=""
                  className="h-[50px]"
                />
                <span className="font-medium">Air Arabia</span>
              </>
            ) : (
              <>
                <div className="bg-gray-200 h-[70px] w-[70px] " />
              </>
            )}
          </div>
        </div>
        {data ? (
          <div className="grid grid-cols-10 col-span-5  mb-2 gap-4 items-center  ">
            <div className="flex flex-col col-span-2 items-end">
              <span className="text-left text-[12px]">
                <span className="text-left text-[20px] font-semibold text-blue-400">
                  {data?.firstDeparture?.aiportLocation}
                </span>
                ( {data?.firstDeparture?.airportCode})
              </span>
              <span className="text-right text-[12px]">
                {formatDate(data?.firstDeparture?.dateTime, true)}
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
                  {flightDuration?.[0]} Hr. 15 min
                </span>
              </div>
              <span className="text-[20px]  mb-[14px] text-blue-500">
                <MdOutlineFlightLand />{" "}
              </span>
            </div>
            <div className="flex flex-col col-span-2 items-start">
              <span className="text-left text-[12px] font-semibold text-teal-500">
                <span className="text-left text-[20px] font-semibold text-teal-500">
                  {data?.lastArrival?.aiportLocation}
                </span>
                ( {data?.lastArrival?.airportCode})
              </span>
              <span className="text-left text-[12px]">
                {formatDate(data?.lastArrival?.dateTime, true)}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between col-span-5 h-[100%] py-4">
            <span className="h-[15px] w-[400px] bg-gray-200 rounded-xl"></span>
            <span className="h-[15px] w-[600px] bg-gray-200 rounded-xl"></span>
            <span className="h-[15px] w-[100%] bg-gray-200 rounded-xl"></span>
          </div>
        )}
        <div className="col-span-1 flex justify-center items-center flex-col pl-4">
          {/* <h2 className="text-[12px] w-[100%]">Price : </h2> */}
          {data ? (
            <h2 className="text-[18px] font-semibold w-[100%]">
              {data?.totalFare} {data?.currency}
            </h2>
          ) : (
            <div className="bg-gray-200 h-[40px] w-[100px] rounded-md" />
          )}
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <button
            className={` rounded-md h-10 px-4 font-bold ${
              data ? "bg-blue-500 text-white" : " text-gray-200 bg-gray-200"
            }`}
            onClick={handleClick}
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default FlightCard;
