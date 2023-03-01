import React, { useRef, useState } from "react";
import formatDate from "../../../utils/formatDate";
import {
  MdOutlineFlight,
  MdOutlineFlightLand,
  MdOutlineFlightTakeoff,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useHandleClickOutside } from "../../../hooks";

const FlightCard = ({ data, index }) => {
  const cardRef = useRef();
  const dropDownRef = useRef();
  const navigate = useNavigate();

  const [selected, setSelected] = useState(null);

  const handleClick = () => {
    navigate("/b2b/flight/booking/54646545645");
  };

  const findFlightDuration = (from, to) => {
    const duration = new Date(to) - new Date(from);
    console.log(duration);
    let flightDuration = duration / (1000 * 60);

    const min = parseInt(flightDuration % 60);
    const hours = parseInt(flightDuration / 60);

    return `${hours} Hr. ${min} min`;
  };

  useHandleClickOutside(dropDownRef, () => {
    setSelected(null);
  });

  console.log(data);
  return (
    <div className="mb-4">
      <div
        ref={cardRef}
        className="grid grid-cols-8 min-w-[400px]  bg-white min-h-[140px] p-4 rounded-lg items-center cursor-pointer shadow-lg transform hover:translate-y-[-4px] transition-all"
      >
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
          <div className="col-span-5 items-center ">
            {data?.trips?.map((ele, index, x) => (
              <>
                <div
                  className="grid grid-cols-10 col-span-5  mb-2 gap-4 items-center  "
                  onClick={() => {
                    setSelected(ele);
                  }}
                >
                  <div className="flex flex-col col-span-2 items-end">
                    <span className="text-left text-[12px]">
                      <span className="text-left text-[20px] font-semibold text-blue-400">
                        {/* {data?.firstDeparture?.aiportLocation} */}
                        {ele?.flightSegments[0]?.from}
                      </span>
                      {/* ( {data?.firstDeparture?.airportCode}) */}
                    </span>
                    <span className="text-right text-[12px] max-w-[100px]">
                      {formatDate(
                        ele?.flightSegments[0]?.departureDateTime,
                        true
                      )}
                    </span>
                  </div>
                  <div className="col-span-6 flex items-center justify-center gap-1">
                    <span className="text-[20px]  mb-[14px] transform text-blue-500">
                      <MdOutlineFlightTakeoff />
                    </span>
                    <div className="border-t-2 w-[100%] border-dashed h-[1px] relative">
                      <span className="absolute bottom-3 text-[20px] right-[45%] transform rotate-90 text-blue-500">
                        {}
                        <MdOutlineFlight />
                      </span>
                      <span className="absolute -bottom-6 text-[12px] right-[35%] w-[100px] text-teal-600  text-center">
                        {findFlightDuration(
                          ele?.flightSegments[0]?.departureDateTime,
                          ele?.flightSegments[ele.flightSegments.length - 1]
                            ?.arrivalDateTime
                        )}
                      </span>
                      <div className="absolute w-[100%] h-[10px] -top-[6px] flex justify-between items-center">
                        {data?.trips?.[index]?.flightSegments?.map((ele, i) => {
                          if (i === 0) {
                            return (
                              <>
                                <abbr title={ele?.from}>
                                  <div className="h-[8px] w-[8px] rounded-lg bg-blue-300" />
                                </abbr>
                                <abbr title={ele?.to}>
                                  <div className="h-[8px] w-[8px] rounded-lg bg-blue-300" />
                                </abbr>
                              </>
                            );
                          }
                          return (
                            <>
                              <abbr title={ele?.to}>
                                <div className="h-[8px] w-[8px] rounded-lg bg-blue-300" />
                              </abbr>
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <span className="text-[20px]  mb-[14px] text-blue-500">
                      <MdOutlineFlightLand />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col col-span-2 items-start">
                    <span className="text-left text-[12px] font-semibold text-teal-500">
                      <span className="text-left text-[20px] font-semibold text-teal-500">
                        {/* {data?.lastArrival?.aiportLocation} */}
                        {ele?.flightSegments[ele.flightSegments.length - 1]?.to}
                      </span>
                      {/* ( {data?.lastArrival?.airportCode}) */}
                    </span>
                    <span className="text-left text-[12px] max-w-[100px]">
                      {/* {formatDate(data?.lastArrival?.dateTime, true)} */}
                      {formatDate(
                        ele?.flightSegments[ele.flightSegments.length - 1]
                          ?.arrivalDateTime,
                        true
                      )}
                    </span>
                  </div>
                </div>
              </>
            ))}
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
      {/* Dropdown section */}
      {selected && (
        <div
          ref={dropDownRef}
          className={`w-[100%] bg-blue-50 shadow-md  ${
            selected && "flex "
          } gap-2 transition-all flex-col gap-4 duration-1000 rounded-md p-4`}
        >
          {selected?.flightSegments?.map((ele) => (
            <>
              <div className="w-[100%] grid grid-cols-6">
                <div className="col-span-4 border-b-2">
                  <div
                    className="grid grid-cols-10 col-span-5  mb-2 gap-4 items-center  "
                    onClick={() => {
                      setSelected(ele);
                    }}
                  >
                    <div className="flex flex-col col-span-2 items-end">
                      <span className="text-left text-[12px]">
                        <span className="text-left text-[20px] font-semibold text-blue-400">
                          {ele?.from}
                        </span>
                      </span>
                      <span className="text-right text-[12px] max-w-[100px]">
                        {formatDate(ele?.departureDateTime, true)}
                      </span>
                    </div>
                    <div className="col-span-6 flex items-center justify-center gap-1">
                      <span className="text-[20px]  mb-[14px] transform text-blue-500">
                        <MdOutlineFlightTakeoff />
                      </span>
                      <div className="border-t-2 w-[100%] border-dashed h-[1px] relative">
                        <span className="absolute bottom-3 text-[12px] items-center gap-1  right-[45%]  text-blue-500 flex ">
                          {ele?.flightNumber}
                          <span className=" transform rotate-90 text-blue-500 text-[20px]">
                            <MdOutlineFlight />
                          </span>
                        </span>
                        <span className="absolute -bottom-6 text-[12px] right-[35%] w-[100px] text-teal-600  text-center">
                          {findFlightDuration(
                            ele?.departureDateTime,
                            ele?.arrivalDateTime
                          )}
                        </span>
                        <div className="absolute w-[100%] h-[10px] -top-[6px] flex justify-between items-center">
                          <abbr title={ele?.from}>
                            <div className="h-[8px] w-[8px] rounded-lg bg-blue-300" />
                          </abbr>
                          <abbr title={ele?.to}>
                            <div className="h-[8px] w-[8px] rounded-lg bg-blue-300" />
                          </abbr>
                        </div>
                      </div>
                      <span className="text-[20px]  mb-[14px] text-blue-500">
                        <MdOutlineFlightLand />{" "}
                      </span>
                    </div>
                    <div className="flex flex-col col-span-2 items-start">
                      <span className="text-left text-[12px] font-semibold text-teal-500">
                        <span className="text-left text-[20px] font-semibold text-teal-500">
                          {ele?.to}
                        </span>
                      </span>
                      <span className="text-left text-[12px] max-w-[100px]">
                        {formatDate(ele?.arrivalDateTime, true)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 border-b-2"></div>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightCard;
