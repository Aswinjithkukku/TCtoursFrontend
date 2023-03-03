import React from "react";
import {
  MdOutlineFlight,
  MdOutlineFlightLand,
  MdOutlineFlightTakeoff,
} from "react-icons/md";
import { TbArrowRight, TbArrowsRight } from "react-icons/tb";
import { useSelector } from "react-redux";
import formatDate from "../../../utils/formatDate";
import formatTime from "../../../utils/formatTime";

const FlightItinerary = ({ navigation, setNavigation }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setNavigation({
      itenary: false,
      addOns: true,
      details: false,
      upload: false,
    });
  };

  const { selectedFlight } = useSelector((state) => state.flight);

  return (
    <div className="p-6 text-darktext">
      <form onSubmit={submitHandler}>
        <div
          className={`my-2 border px-3 py-4 ${
            navigation.itenary ? "bg-lightblue " : "bg-slate-400"
          } rounded-[.25rem]`}
          onClick={() => {
            navigation.itenary &&
              setNavigation({
                itenary: false,
                addOns: true,
                details: false,
                upload: false,
              });
          }}
        >
          <p className="font-[600] text-[20px] text-soft">Itinerary</p>
        </div>
        {navigation.itenary && (
          <div className="rounded-md shadow gap-4 p-6">
            <div className=" flex flex-col">
              <div className="flex items-center ">
                <div className="p-1">
                  <img
                    src="https://media.istockphoto.com/id/1137971264/vector/airplane-fly-out-logo-plane-taking-off-stylized-sign.jpg?s=612x612&w=0&k=20&c=TH1vDs4wmGnfWapq_e1XYxqzQV_qxaF4_aJWoDJyKNI="
                    alt=""
                    className="h-[40px]"
                  />
                </div>
                <div className="flex items-end">
                  <span>Air India</span>
                </div>
              </div>
              {selectedFlight?.trips?.map((ele, i, stops) => (
                <>
                  <div className="">
                    <div className="relative md:grid grid-cols-5  w-[100%] justify-between items-center ">
                      <div className="absolute border-t-2 border-dashed w-[100%] -z-10 left-0  flex justify-around">
                        {/* {ele?.flightSegments?.map(() => (
                          <>
                            <span className="relative md:text-[25px] botto">
                              <TbArrowRight />
                            </span>
                          </>
                        ))} */}
                      </div>
                      <div className="flex flex-col bg-[#f1f3f6] items-end pr-1">
                        <span className="text-[16px] text-darktext">
                          {selectedFlight?.firstDeparture?.aiportLocation} ({" "}
                          <span className="text-[16px] font-semibold text-darktext">
                            {selectedFlight?.firstDeparture?.airportCode}
                          </span>
                          )
                        </span>
                        <span className="text-[16px] text-darktext font-semibold">
                          {formatTime(selectedFlight?.firstDeparture?.dateTime)}
                        </span>
                        <span className="text-[16px] text-darktext">
                          {formatDate(selectedFlight?.firstDeparture?.dateTime)}
                        </span>
                      </div>

                      <div className="flex items-center justify-around col-span-3">
                        {ele?.flightSegments?.map((ele, i, stops) => {
                          if (i === stops.length - 1) return null;
                          return (
                            <>
                              <div className="flex flex-col bg-[#f1f3f6] px-1 items-center">
                                <span className="text-[16px] font-semibold text-darktext">
                                  ( {ele?.to})
                                </span>
                                <span className="text-[16px] font-semibold text-darktext">
                                  {formatTime(ele?.arrivalDateTime)}
                                </span>
                                <span className="text-[16px] text-darktext">
                                  {formatDate(ele?.arrivalDateTime)}
                                </span>
                              </div>
                            </>
                          );
                        })}
                      </div>
                      <div className="flex flex-col bg-[#f1f3f6] pl-1">
                        <span className="text-[16px] font-semibold text-darktext">
                          (
                          {
                            ele?.flightSegments?.[
                              ele?.flightSegments?.length - 1
                            ]?.to
                          }
                          ){/* {selectedFlight?.lastArrival?.airportCode} */}
                        </span>
                        {/* <span className="text-[16px] text-darktext">
                          {selectedFlight?.lastArrival?.aiportLocation}
                        </span> */}
                        <span className="w-[120px] font-semibold">
                          {formatTime(
                            ele?.flightSegments?.[
                              ele?.flightSegments?.length - 1
                            ]?.arrivalDateTime
                          )}
                        </span>
                        <span className="w-[120px]">
                          {formatDate(
                            ele?.flightSegments?.[
                              ele?.flightSegments?.length - 1
                            ]?.arrivalDateTime
                          )}
                        </span>
                      </div>
                    </div>
                    {/* <div className="flex gap-x-10 items-center ">
                  <div>
                    <span className="text-[12px] text-darktext">
                      Tuesday, Feb 28
                    </span>
                  </div>
                  <div>
                  <span className="text-[12px] text-darktext">
                      Wednesday, Feb 29
                    </span>
                  </div>
                </div> */}
                  </div>
                </>
              ))}
            </div>
            <div className="mt-2 flex justify-end">
              <button
                type="submit"
                className="bg-lightblue text-[14px] text-white px-3 py-2 rounded"
              >
                Move to Add-ons
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default FlightItinerary;
