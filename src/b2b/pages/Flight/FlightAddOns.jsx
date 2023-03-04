import React, { useRef, useState } from "react";
import {
  MdAirlineSeatReclineExtra,
  MdOutlineAirlineSeatReclineExtra,
} from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { RiLuggageCartLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { handleFlightAddOnsChange } from "../../../redux/slices/flightSlice";
import { useHandleClickOutside } from "../../../hooks";
import planeHead from "../../../static/images/plane-head.svg";
import rightWing from "../../../static/images/leftWing.svg";
import leftWing from "../../../static/images/rightWing.svg";
import { BsPlusLg } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import { TbLuggage } from "react-icons/tb";

const FlightAddOns = ({ navigation, setNavigation }) => {
  const dispatch = useDispatch();
  const rightModalRef = useRef();
  const [modalsState, setModalState] = useState({
    seatModal: true,
    mealModal: false,
    luggageModal: false,
  });

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

  const toggleModal = (name) => {
    const initial = {
      seatModal: false,
      mealModal: false,
      luggageModal: false,
    };

    if (name === "seatModal" && modalsState.seatModal) {
      initial.mealModal = true;
    }
    if (name === "mealModal" && modalsState.mealModal) {
      initial.luggageModal = true;
    }

    setModalState({ ...initial, [name]: !modalsState[name] });
  };
  // useHandleClickOutside(rightModalRef, () => {
  //   setShowSeatModal(!showSeatModal);
  // });

  const SeatBoxes = ({ status, row, col }) => {
    const [selected, setSelected] = useState(false);
    const handleSeatSelected = () => {
      if (status === "booked") return;
      setSelected(!selected);
    };

    return (
      <>
        <button
          type="button"
          className={`block h-[20px] w-[20px] border-[2px] relative group hover:border-blue-500 ${
            status !== "booked" && (selected ? "bg-teal-400" : "bg-gray-300")
          } ${
            status === "booked" && "bg-blue-500"
          } cursor-pointer rounded-tl-lg rounded-bl-lg`}
          onClick={handleSeatSelected}
          disabled={status === "booked"}
        >
          <div
            className={`p-2 z-50 group-hover:flex hidden absolute text-[16px] w-[100px] text-left ${
              status === "booked" ? "bg-blue-100 text-blue-500" : "bg-white"
            } bottom-[30px] -left-3 rounded-lg shadow-lg border-[1px] border-black flex-col justify-start`}
          >
            {`S-${row + col}`}
            <span className="text-green-600">{`${"816"} AED`}</span>
            <span className="absolute -bottom-[20px] text-[30px] text-black left-2">
              <IoMdArrowDropdown />
            </span>
          </div>
        </button>
      </>
    );
  };

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
                    toggleModal("seatModal");
                  }}
                  className="cursor-pointer py-2 text-gray-500 font-[550]  bg-gray-100 border-dashed px-1 flex justify-between"
                >
                  <h2 className="flex gap-2 text-[18px] font-medium">
                    <span className="text-[25px] ">
                      <MdOutlineAirlineSeatReclineExtra />{" "}
                    </span>{" "}
                    Choose seat that you want.
                  </h2>
                  {modalsState?.seatModal && (
                    <div className="col-span-12 flex items-center gap-4 pr-4">
                      <div className=" flex gap-2">
                        {" "}
                        <div className="h-5 w-5  bg-blue-500 rounded-3xl items-center" />
                        Booked
                      </div>
                      <div className=" flex gap-2">
                        {" "}
                        <div className="h-5 w-5 bg-gray-300 rounded-3xl  items-center" />
                        Available
                      </div>
                      <div className=" flex gap-2">
                        {" "}
                        <div className="h-5 w-5 bg-teal-400  rounded-3xl items-center" />
                        Selected
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  {modalsState?.seatModal && (
                    <div className="overflow-x-scroll">
                      <div className="p-4 grid grid-cols-12 w-[1500px] items-center h-[500px] py-10">
                        <div className="h-[200px] flex items-center relative col-span-2">
                          <img
                            src={planeHead}
                            alt=""
                            className="  w-[240px]  transform -rotate-90"
                          />
                          <div className="absolute right-0 h-[100%] ">
                            <ul className="flex flex-col justify-between h-[100%] py-1.5 text-[16px] font-medium">
                              <div className=" flex flex-col gap-1">
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                              </div>
                              <div className=" flex flex-col gap-1">
                                <li>D</li>
                                <li>E</li>
                                <li>F</li>
                              </div>
                            </ul>
                          </div>
                        </div>
                        <div className="h-[240px] border-[2px] border-x-0 w-[1000px] relative col-span-10">
                          <div className="absolute bottom-[135px] left-[40%]  ">
                            <img
                              src={leftWing}
                              alt=""
                              className="w-[120px]  transform -rotate-90  "
                            />
                          </div>
                          <div className="absolute left-[40%] top-[135px]">
                            <img
                              src={rightWing}
                              alt=""
                              className="w-[120px]   transform -rotate-90  "
                            />
                          </div>

                          <div className="h-[100%] flex gap-3 py-3.5 px-8">
                            {Array.from({ length: 28 })?.map((ele, i) => (
                              <>
                                <div className="flex  h-full relative">
                                  <ul className="flex flex-col justify-between h-[100%] py-3.5 text-[24px] font-medium">
                                    <div className=" flex flex-col gap-1.5">
                                      <li>
                                        <SeatBoxes
                                          status="booked"
                                          row="A"
                                          col={i + 1}
                                        />
                                      </li>
                                      <li>
                                        <SeatBoxes row="B" col={i + 1} />
                                      </li>
                                      <li>
                                        <SeatBoxes row="C" col={i + 1} />
                                      </li>
                                    </div>
                                    <div className=" flex flex-col gap-1.5">
                                      <li>
                                        <SeatBoxes row="D" col={i + 1} />
                                      </li>
                                      <li>
                                        <SeatBoxes row="E" col={i + 1} />
                                      </li>
                                      <li>
                                        <SeatBoxes row="F" col={i + 1} />
                                      </li>
                                    </div>
                                  </ul>
                                  <div className="absolute text-[16px] bottom-[-45px] left-1 text-center font-semibold">
                                    {i + 1}
                                  </div>
                                </div>
                              </>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="py-2 text-gray-500 font-[550]  bg-gray-100 border-dashed px-1">
                  <h2
                    className="flex gap-2 text-[18px] font-medium cursor-pointer"
                    onClick={() => {
                      toggleModal("mealModal");
                    }}
                  >
                    {" "}
                    <span className="text-[25px]">
                      {" "}
                      <GiMeal />
                    </span>{" "}
                    Add a delicious meal for your flight
                  </h2>
                </div>
                {modalsState?.mealModal && (
                  <div className="overflow-x-scroll py-4">
                    <div className="flex gap-4 w-fit">
                      {Array.from({ length: 10 }).map((ele) => (
                        <>
                          <div
                            onClick={() => {
                              handleSeatSelect("E4");
                            }}
                            className="min-w-[120px] p-2  bg-blue-50 max-w-[120px] flex flex-col  gap-1 px-2 rounded-md cursor-pointer"
                          >
                            <span className="text-[25px]">
                              <img
                                src="http://www.dineout.co.in/blog/wp-content/uploads/2018/02/shutterstock_369523526-700x482.jpg"
                                alt=""
                                className="h-[80px] w-[100px]"
                              />
                            </span>
                            <span className="text-left text-[12px] text-blue-500 ">
                              Dish Name
                            </span>
                            <span className="text-left text-[12px] text-blue-500 ">
                              120 AED
                            </span>

                            <button
                              type="button"
                              className="flex items-center gap-1 justify-center bg-teal-400 rounded-lg"
                            >
                              <span className="">
                                <HiPlus />
                              </span>
                              ADD
                            </button>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                )}
                <div className="py-2 text-gray-500 font-[550]  bg-gray-100 border-dashed px-1">
                  <h2
                    className="flex gap-2 text-[18px] font-medium cursor-pointer"
                    onClick={() => {
                      toggleModal("luggageModal");
                    }}
                  >
                    {" "}
                    <span className="text-[25px]">
                      <RiLuggageCartLine />{" "}
                    </span>{" "}
                    Add Extra Luggage
                  </h2>
                </div>
                {modalsState?.luggageModal && (
                  <div className="overflow-x-scroll">
                    <div className="flex shadow-md h-[100px] gap-4 py-4">
                      {Array.from({ length: 10 }).map((ele) => (
                        <>
                          <div
                            onClick={() => {
                              handleSeatSelect("E4");
                            }}
                            className="min-h-[50px] p-2 shadow-lg hover:shadow-blue-200  bg-blue-50 min-w-[150px] flex justify-between items-end  px-2 rounded-md cursor-pointer border-[1px] border-blue-50 hover:border-black"
                          >
                            <div className="flex flex-col gap-1 ">
                              <div className="text-[18px] flex items-center gap-1">
                                <span className="text-[25px]">
                                  <TbLuggage />
                                </span>
                                15 Kg
                              </div>
                              <div className="font-medium text-[14px] text-blue-500 pl-1 ">
                                50 AED
                              </div>
                            </div>
                            <div className="">
                              <button className=" bg-teal-400 rounded-md px-1">
                                ADD
                              </button>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                )}
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
      {/* {showSeatModal && (
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
              <div className="h-[200px] w-full bg-red-100"></div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default FlightAddOns;
