import React, { useRef, useState } from "react";
import {
  MdAirlineSeatReclineExtra,
  MdOutlineAirlineSeatReclineExtra,
} from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { RiLuggageCartLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { handleFlightAddOnsChange } from "../../../redux/slices/flightSlice";
import { useHandleClickOutside } from "../../../hooks";
import { RxCross2 } from "react-icons/rx";
import planeHead from "../../../static/images/plane-head.svg";
import rightWing from "../../../static/images/leftWing.svg";
import leftWing from "../../../static/images/rightWing.svg";

const FlightAddOns = ({ navigation, setNavigation }) => {
  const dispatch = useDispatch();
  const rightModalRef = useRef();
  const [showSeatModal, setShowSeatModal] = useState(false);

  const { selectedAddOns } = useSelector((state) => state.flight);

  const submitHandler = (e) => {
    e.preventDefault();
    setNavigation({
      itenary: false,
      details: true,
      payment: false,
      addOns: false,
    });
  };

  const handleSeatSelect = (seatNo) => {
    dispatch(handleFlightAddOnsChange({ name: "seats", value: seatNo }));
  };

  useHandleClickOutside(rightModalRef, () => {
    setShowSeatModal(!showSeatModal);
  });

  return (
    <>
      <div className="p-6 text-darktext">
        <form onSubmit={submitHandler}>
          <div
            className={`my-2 border px-3 py-4 ${
              navigation.addOns ? "bg-lightblue " : "bg-slate-400"
            } rounded-[.25rem]`}
            onClick={() => {
              navigation.addOns &&
                setNavigation({
                  itenary: false,
                  details: true,
                  payment: false,
                  addOns: false,
                });
            }}
          >
            <p className="font-[600] text-[20px] text-soft">Add-Ons</p>
          </div>
          {navigation.addOns && (
            <div className="rounded-md shadow bg-white p-6">
              <div className="w-[100%] flex flex-col gap-y-2">
                <div
                  onClick={() => {
                    // setShowSeatModal(!showSeatModal);
                  }}
                  className="cursor-pointer py-2 text-gray-500 font-[550]  bg-gray-100 border-dashed px-1"
                >
                  <h2 className="flex gap-2 text-[18px] font-medium">
                    <span className="text-[25px] ">
                      <MdOutlineAirlineSeatReclineExtra />{" "}
                    </span>{" "}
                    Choose seat that you want.
                  </h2>
                </div>
                {/* <div>
                  <div
                    onClick={() => {
                      handleSeatSelect("E4");
                    }}
                    className="min-h-[50px] p-2 w-[50px] bg-blue-50 max-w-[140px] flex flex-col gap-1 items-center px-2 rounded-md cursor-pointer"
                  >
                    <span className="text-[25px]">
                      <MdAirlineSeatReclineExtra />
                    </span>
                    <span className="font-semibold text-[24px] text-blue-500 ">
                      E4
                    </span>
                  </div>
                </div> */}
                <div className="py-2 text-gray-500 font-[550]  bg-gray-100 border-dashed px-1">
                  <h2 className="flex gap-2 text-[18px] font-medium">
                    {" "}
                    <span className="text-[25px]">
                      {" "}
                      <GiMeal />
                    </span>{" "}
                    Add a delicious meal for your flight
                  </h2>
                </div>
                <div>
                  <div
                    onClick={() => {
                      handleSeatSelect("E4");
                    }}
                    className="min-h-[50px] p-2  bg-blue-50 max-w-[140px] flex flex-col gap-1 items-center px-2 rounded-md cursor-pointer"
                  >
                    <span className="text-[25px]">
                      <MdAirlineSeatReclineExtra />
                    </span>
                    <span className="font-semibold text-[24px] text-blue-500 ">
                      E4
                    </span>
                  </div>
                </div>
                <div className="py-2 text-gray-500 font-[550]  bg-gray-100 border-dashed px-1">
                  <h2 className="flex gap-2 text-[18px] font-medium">
                    {" "}
                    <span className="text-[25px]">
                      <RiLuggageCartLine />{" "}
                    </span>{" "}
                    Add Extra Luggage
                  </h2>
                </div>
                <div className="flex shadow-md h-[100px]">
                  <div className="">
                    <div
                      onClick={() => {
                        handleSeatSelect("E4");
                      }}
                      className="min-h-[50px] p-2  bg-blue-50 max-w-[140px] flex flex-col gap-1 items-center px-2 rounded-md cursor-pointer"
                    >
                      <span className="text-[25px]">
                        <MdAirlineSeatReclineExtra />
                      </span>
                      <span className="font-semibold text-[24px] text-blue-500 ">
                        E4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-lightblue text-[14px] text-white px-3 py-2 rounded"
                >
                  Move to Details
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
      {showSeatModal && (
        <div className="absolute top-0 right-0 w-[100%] h-[100vh] bg-gray-400/20 z-50">
          <div
            ref={rightModalRef}
            className="absolute right-0 top-0 w-[40%] h-[100vh] overflow-y-auto bg-white"
          >
            <div className="flex justify-between bg-gray-400 px-4 py-2">
              <h2 className="text-[20px] font-semibold text-gray-50 ">
                Choose seat that you want.
              </h2>
              <span
                className=" text-[25px] text-white cursor-pointer"
                onClick={() => {
                  setShowSeatModal(!showSeatModal);
                }}
              >
                <RxCross2 />
              </span>
            </div>
            <div className="">
              <div className="h-[300px] w-full bg-red-100"></div>
              <div className="overflow-x-scroll scrollbar-hide">
                <div className="p-4 flex items-center gap-2 w-fit bg-blue-200">
                  <div className="h-[300px] relative ">
                    <div className=" top-0 h-[400px] bg-teal-500">
                      <img
                        src={planeHead}
                        alt=""
                        className="  h-[400px] bg-green-300 transform -rotate-90 "
                      />
                    </div>
                  </div>
                  <div className="h-[282px] border-[1px] w-[800px] relative">
                    <div className="absolute bottom-0">
                      <img src={leftWing} alt="" />
                    </div>
                    <div className="absolute top-0">
                      <img src={rightWing} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FlightAddOns;
