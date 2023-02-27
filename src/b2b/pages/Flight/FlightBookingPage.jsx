import React, { useState } from "react";
import { BsArrowRightCircle, BsCheck2Circle } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
import { IoChevronBackSharp } from "react-icons/io5";
import {
  MdArrowBackIosNew,
  MdOutlineFlight,
  MdOutlineFlightLand,
  MdOutlineFlightTakeoff,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import SearchCards from "../../components/Cards/SearchCards";
import VisaApplyCard from "../Visa/VisaApplyCard";
import FlightAddOns from "./FlightAddOns";
import FlightItinerary from "./FlightItinerary";
import PaymentSection from "./PaymentSection";
import TravellerDetails from "./TravellerDetails";

const FlightBookingPage = () => {
  const [navigation, setNavigation] = useState({
    itenary: true,
    addOns: false,
    details: false,
    payment: false,
  });
  const navigate = useNavigate();

  return (
    <>
      <div className="px-10 pb-0 mt-2 flex justify-between">
        <SearchCards />
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="px-4 mt-3 items-center flex bg-blue-400 text-white h-[40px] rounded-md font-semibold"
        >
          <span>
            <IoChevronBackSharp />
          </span>
          Back
        </button>
      </div>
      <div className="min-h-[100vh]">
        <div className="w-[100%]">
          <div className=" text-darktext px-6 mt-6">
            <div className="bg-gray-300 rounded-lg sticky top-0 z-10 overflow-x-auto scrollbar-hide">
              <div className=" flex md:grid md:grid-cols-11  items-center ">
                <button
                  className={`col-span-2 flex justify-center text-[10px] lg:text-sm md:text-base items-center px-2 md:px-3 py-[18px]  hover:text-lightblue  ${
                    navigation.details ||
                    navigation.addOns ||
                    navigation.itenary ||
                    navigation.payment
                      ? "border-b-4  text-lightblue"
                      : ""
                  } border-blue-500  hover:border-b-4 duration-300 space-x-1 `}
                  onClick={() => {
                    navigation.addOns &&
                      setNavigation({
                        itenary: true,
                        details: false,
                        payment: false,
                        addOns: false,
                      });
                  }}
                >
                  {/* <span className=''><FaWpforms /></span> */}
                  <span className="">Itinerary</span>
                </button>

                <button
                  className={`col-span-1 hidden lg:flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-4   duration-300 space-x-1 ${
                    navigation.details ||
                    navigation.addOns ||
                    navigation.payment
                      ? "border-b-4 text-lightblue"
                      : ""
                  } border-blue-500  `}
                >
                  {navigation.details ||
                  navigation.addOns ||
                  navigation.payment ? (
                    <span className="text-2xl text-lightblue">
                      <BsCheck2Circle />
                    </span>
                  ) : (
                    <span className="text-2xl">
                      <BsArrowRightCircle />{" "}
                    </span>
                  )}
                </button>
                <button
                  className={`col-span-2 flex justify-center text-[10px] lg:text-sm md:text-base items-center px-5 md:px-3 py-[18px]  hover:text-lightblue  ${
                    navigation.details ||
                    navigation.addOns ||
                    navigation.payment
                      ? "border-b-4 text-lightblue"
                      : ""
                  } border-blue-500 hover:border-b-4 duration-300 space-x-1  whitespace-nowrap`}
                >
                  <span className="">Add-ons</span>
                </button>
                <button
                  className={`col-span-1 hidden lg:flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-4   duration-300 space-x-1 ${
                    navigation.details || navigation.payment
                      ? "border-b-4 text-lightblue"
                      : ""
                  } border-blue-500 `}
                >
                  {navigation.upload || navigation.payment ? (
                    <span className="text-2xl text-lightblue">
                      <BsCheck2Circle />
                    </span>
                  ) : (
                    <span className="text-2xl">
                      <BsArrowRightCircle />{" "}
                    </span>
                  )}
                </button>
                <button
                  className={`col-span-2 flex justify-center text-[10px] lg:text-sm md:text-base items-center px-5 md:px-3 py-[18px]  hover:text-lightblue  ${
                    navigation.upload || navigation.payment
                      ? "border-b-4 text-lightblue"
                      : ""
                  } border-blue-500 hover:border-b-4 duration-300 space-x-1  whitespace-nowrap`}
                >
                  <span className="">Traveller Detailst</span>
                </button>
                <button
                  className={`col-span-1 hidden lg:flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-4  duration-300 space-x-1 ${
                    navigation.upload ? "border-b-4  text-lightblue" : ""
                  } border-blue-500 `}
                >
                  {navigation.upload ? (
                    <span className="text-2xl text-lightblue">
                      <BsCheck2Circle />
                    </span>
                  ) : (
                    <span className="text-2xl">
                      <BsArrowRightCircle />{" "}
                    </span>
                  )}
                </button>
                <button
                  className={`col-span-2 flex justify-center text-[10px] lg:text-sm md:text-base items-center px-6 md:px-3 py-[18px] hover:text-lightblue ${
                    navigation.upload ? "border-b-4  text-lightblue" : ""
                  } border-blue-500 hover:border-b-4 duration-300 space-x-1  whitespace-nowrap`}
                >
                  <span className="">Make Payment</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="w-[100%] col-span-3 ">
              <FlightItinerary
                navigation={navigation}
                setNavigation={setNavigation}
              />
              <FlightAddOns
                navigation={navigation}
                setNavigation={setNavigation}
              />
              <TravellerDetails
                navigation={navigation}
                setNavigation={setNavigation}
              />

              <PaymentSection
                navigation={navigation}
                setNavigation={setNavigation}
              />

              {/* <div className="bg-white w-[100%] flex flex-col items-center rounded-md p-2">
              <h2 className="w-[100%] text-left font-semibold placeholder:">
                Review your Itinarary
              </h2>
              <div className="grid grid-cols-8 min-w-[400px] w-[90%] bg-white h-[140px] p-4 rounded-lg items-center cursor-pointer">
                <div className="col-span-1">
                  <div className=" grid place-items-center">
                    <img
                      src="https://media.istockphoto.com/id/1137971264/vector/airplane-fly-out-logo-plane-taking-off-stylized-sign.jpg?s=612x612&w=0&k=20&c=TH1vDs4wmGnfWapq_e1XYxqzQV_qxaF4_aJWoDJyKNI="
                      alt=""
                      className="h-[100px]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-10 col-span-5  mb-2 gap-4 items-center  ">
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
                      <MdOutlineFlightLand />
                    </span>
                  </div>
                  <div className="flex flex-col col-span-2 items-start">
                    <span className="text-left text-[20px]">12:30</span>
                    <span className="text-left text-[12px] font-semibold text-teal-500">
                      Delhi
                    </span>
                  </div>
                </div>
                <div className="col-span-1 flex justify-center items-center flex-col pl-4">
                  <h2 className="text-[12px] w-[100%]">Price : </h2>
                  <h2 className="text-[18px] font-semibold w-[100%]">
                    1200 AED
                  </h2>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                 
                  <span></span>
                </div>
              </div>
            </div> */}
              {/* <section className="rounded-md bg-white w-[100%] h-[80vh] my-2 p-2 flex flex-col gap-y-3">
              <h2 className="w-[100%] text-left font-semibold placeholder:">
                Add Ons
              </h2>
              <div className="px-3">
                <h2 className="px-3">
                  Need More Legroom? Choose the seat you want
                </h2>
                <div className="bg-blue-50 p-3">
                  <ul className="flex gap-2">
                    {Array.from({ length: 14 }).map((ele, i) => (
                      <>
                        {i === 0 && (
                          <li>
                            <ul>
                              {Array.from({ length: 6 }).map((ele, j) => (
                                <li>{j + 1}</li>
                              ))}
                            </ul>
                          </li>
                        )}
                        <li>
                          <ul>
                            {Array.from({ length: 6 }).map((ele, j) => (
                              <>
                                <li>
                                  <input
                                    type="checkbox"
                                    className="cursor-pointer"
                                  />
                                </li>
                              </>
                            ))}
                            <li className="">{rows[i]}</li>
                          </ul>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-3">
                <h2 className="px-3">Meal Section</h2>
              </div>
              <div className="px-3">
                <h2 className="px-3">Extra Luggage section</h2>
              </div>
            </section> */}
            </div>
            <div className="w-[100%] col-span-1 pt-8">
              <h2 className="pb-1 font-medium text-blue-500">Fare Summary</h2>
              <div className="bg-gray-100 shadow-sm rounded-xl p-2 text-darktext max-w-[310px] min-w-[250px]">
                <p className="text-[16px]">Fare Details</p>
                <div className="border-b border-darktext py-2">
                  <div className="flex justify-between">
                    <p className="text-[14px]">Base Fare</p>
                    <p className="text-[14px]">
                      {/* {priceConversion(
                    selectedVisa?.totalPrice,
                    selectedCurrency,
                    true
                  )}{" "} */}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[14px]">Tax</p>
                    <p className="text-[14px]">
                      {/* {priceConversion(selectedVisa?.tax, selectedCurrency, true)}{" "} */}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[14px]">Insurance</p>
                    <p className="text-[14px]">
                      {/* {priceConversion(
                    selectedVisa?.insurance,
                    selectedCurrency,
                    true
                  )}{" "} */}
                    </p>
                  </div>
                </div>
                <div className="border-b border-darktext py-2">
                  <div className="flex justify-between">
                    <p className="text-[14px]">Total Fare</p>
                    <p className="text-[14px]">
                      {/* {priceConversion(totalPrice, selectedCurrency, true)}{" "} */}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[14px]">Traveller</p>
                    <p className="text-[14px]">{24} </p>
                  </div>
                </div>
                <div className="border-b  border-darktext py-1">
                  <div className="flex justify-between">
                    <p className="text-[14px]">Total Price</p>
                    <p className="text-[14px]">
                      {/* {priceConversion(grandTotal, selectedCurrency, true)}{" "} */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start relative -left-6">
                <VisaApplyCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightBookingPage;
