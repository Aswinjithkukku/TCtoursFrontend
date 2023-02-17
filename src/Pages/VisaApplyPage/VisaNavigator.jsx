import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import { useSelector } from "react-redux";
import ItenarySection from "./ItenarySection";
import PaymentSection from "./PaymentSection";
import TravellerDetails from "./TravellerDetails";
import UploadDetailsSection from "./UploadDetailsSection";

function VisaNavigator({}) {
  const { visaEnquiry } = useSelector((state) => state.b2cVisa);
  const { visaType, selectedVisaType, travellersCount } = visaEnquiry;
  const [itenaryFlag, setItenaryFlag] = useState(false);
  const [selectedVisaInfo, setselectedVisaInfo] = useState(null);

  const [navigation, setNavigation] = useState({
    itenary: true,
    details: false,
    payment: false,
    upload: false,
  });

  useEffect(() => {
    for (let x of visaType) {
      if (x._id === selectedVisaType) {
        setselectedVisaInfo(x);
      }
    }
  }, [visaEnquiry]);

  useEffect(() => {}, []);

  const totalPrice =
    +selectedVisaInfo?.totalPrice +
    selectedVisaInfo?.insurance +
    selectedVisaInfo?.tax;

  const grandTotal = totalPrice * travellersCount;

  return (
    <>
      <div className="bg-semisoft sticky top-0 z-10 ">
        <div className="md:max-w-screen-xl md:mx-auto text-darktext ">
          <div className=" overflow-x-auto scrollbar-hide">
            <div className=" flex md:grid md:grid-cols-7  px-1 md:px-10 py-3 md:py-1 items-center  ">
              <button
                className={`flex justify-center text-sm md:text-base items-center px-2 md:px-3 py-3 border-b-4 border-blue hover:text-lightblue text-lightblue  hover:border-b-4 duration-300 space-x-1 h-[100%]`}
                onClick={() => {
                  setNavigation({ itenary: true });
                }}
              >
                <span className="">Itenary</span>
              </button>
              <button
                onClick={() => {
                  setNavigation({ details: true });
                }}
                className={`flex justify-center text-sm md:text-base items-center px-2 md:px-3 py-3 h-[100%] ${
                  !navigation?.itenary ? " border-blue border-b-4" : ""
                } `}
              >
                <span
                  className={`${!navigation?.itenary ? "text-lightblue" : ""}`}
                >
                  {!navigation?.itenary ? (
                    <FiCheckCircle />
                  ) : (
                    <BsArrowRightCircle />
                  )}
                </span>
              </button>
              <button
                onClick={() => {
                  setNavigation({ details: true });
                }}
                className={`h-[100%] flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-3 border-blue hover:text-lightblue  hover:border-b-4 duration-300 space-x-1 ${
                  navigation?.payment || navigation?.upload
                    ? " border-blue border-b-4"
                    : ""
                } `}
              >
                <span className="">Traveller Details</span>
              </button>
              <button
                onClick={() => {
                  setNavigation({ payment: true });
                }}
                className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-3   duration-300 space-x-1  h-[100%] ${
                  navigation?.payment || navigation?.upload
                    ? " border-blue border-b-4"
                    : ""
                }`}
              >
                <span
                  className={`${
                    navigation?.payment || navigation?.upload
                      ? "text-lightblue "
                      : ""
                  }`}
                >
                  {navigation?.payment || navigation?.upload ? (
                    <FiCheckCircle />
                  ) : (
                    <BsArrowRightCircle />
                  )}
                </span>
              </button>
              <button
                onClick={() => {
                  setNavigation({ payment: true });
                }}
                className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-3 border-blue hover:text-lightblue  hover:border-b-4 duration-300 space-x-1 h-[100%] ${
                  navigation?.upload ? " border-blue border-b-4" : ""
                } `}
              >
                <span className="">Make Payment</span>
              </button>

              <button
                onClick={() => {
                  setNavigation({ upload: true });
                }}
                className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-3   duration-300 space-x-1  h-[100%] ${
                  navigation?.upload ? " border-blue border-b-4" : ""
                } `}
              >
                <span
                  className={`${navigation?.upload ? "text-lightblue" : ""}`}
                >
                  {navigation?.upload ? (
                    <FiCheckCircle />
                  ) : (
                    <BsArrowRightCircle />
                  )}
                </span>
              </button>
              <button
                onClick={() => {
                  setNavigation({ upload: true });
                }}
                className={`h-[100%] flex justify-center text-sm md:text-base items-center px-6 md:px-3 py-3 border-blue hover:text-lightblue  hover:border-b-4 duration-300 space-x-1  `}
              >
                <span className="">Upload Details</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main  flex justify-center pr-4">
        <div className="main px-4 w-[70vw]">
          <div className="">
            <ItenarySection
              itenaryFlag={itenaryFlag}
              setItenaryFlag={setItenaryFlag}
              navigation={navigation}
              setNavigation={setNavigation}
            />
          </div>
          <div className="">
            <TravellerDetails
              itenaryFlag={itenaryFlag}
              navigation={navigation}
              setNavigation={setNavigation}
            />
          </div>
          <div className="">
            <PaymentSection
              price={grandTotal}
              navigation={navigation}
              setNavigation={setNavigation}
            />
          </div>
          <div className="">
            <UploadDetailsSection
              navigation={navigation}
              setNavigation={setNavigation}
            />
          </div>
        </div>
        <div className="main w-[300px] pt-5 ">
          <div className=" w-[300px] h-[280px] bg-white rounded-md p-4">
            <h2 className="text-primaryColor text-lg ">Fare Deatils</h2>
            <ul className="list-none  text-primaryColor flex flex-col space-y-2 py-3 text-sm">
              <li className="flex justify-between">
                Base Fare <span>AED {selectedVisaInfo?.totalPrice}</span>
              </li>
              <li className="flex justify-between">
                Surcharges & Taxes <span>AED {selectedVisaInfo?.tax}</span>
              </li>
              <li className="flex justify-between">
                Insurance <span>AED {selectedVisaInfo?.insurance}</span>
              </li>
              <li className="mt-2 pt-2  flex justify-between border-t-[1px] border-gray-600 border-solid">
                Total Fare <span>AED {totalPrice}</span>
              </li>
              <li className="pb-2   flex justify-between border-b-[1px] border-gray-600 border-solid">
                Travellers <span>{travellersCount}</span>
              </li>
              <li className="mt-2   flex justify-between border-b-[1px] border-gray-600 border-solid">
                Total Price <span>AED {+travellersCount * +totalPrice}</span>
              </li>
              <li className="mt-1   text-[#039BE5] flex justify-end  underline text-[9px] ">
                Fare BreakUp
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisaNavigator;
