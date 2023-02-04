import React from "react";
import { useState } from "react";
import ItenarySection from "./ItenarySection";
import PaymentSection from "./PaymentSection";
import TravellerDetails from "./TravellerDetails";
import UploadDetailsSection from "./UploadDetailsSection";

function VisaNavigator({ travellerInfo, visaDetails }) {
  const [itenaryInfo, setItenaryInfo] = useState({ ...travellerInfo });
  console.log(visaDetails);
  return (
    <>
      <div className="bg-semisoft sticky top-0 z-10">
        <div className="md:max-w-screen-xl md:mx-auto text-darktext ">
          <div className=" overflow-x-auto">
            <div className=" flex md:grid md:grid-cols-5 space-x-1 px-1 md:px-10 py-3 md:py-1 items-center ">
              <button
                className={`flex justify-center text-sm md:text-base items-center px-2 md:px-3 py-3 border-b-4 border-blue hover:text-lightblue text-lightblue  hover:border-b-4 duration-300 space-x-1 `}
              >
                {/* <span className=''><FaWpforms /></span> */}
                <span className="">Itenary</span>
              </button>
              <button
                className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-3 border-blue hover:text-lightblue  hover:border-b-4 duration-300 space-x-1  `}
              >
                {/* <span className=''><HiOutlineDocumentDuplicate /> </span> */}
                <span className="">Traveller Details</span>
              </button>
              <button
                className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-3 border-blue hover:text-lightblue  hover:border-b-4 duration-300 space-x-1  `}
              >
                {/* <span className=''><GiEncirclement/></span> */}
                <span className="">Make Payment</span>
              </button>
              <button
                className={`flex justify-center text-sm md:text-base items-center px-6 md:px-3 py-3 border-blue hover:text-lightblue  hover:border-b-4 duration-300 space-x-1  `}
              >
                {/* <span className=''><FaQuoteRight /></span> */}
                <span className="">Upload Details</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main  flex justify-center space-x-8">
        <div className="main">
          <div className="">
            <ItenarySection
              itenaryInfo={itenaryInfo}
              setItenaryInfo={setItenaryInfo}
              visaTypes={visaDetails.visaType}
            />
          </div>
          <div className="">
            <TravellerDetails itenaryInfo={itenaryInfo} />
          </div>
          <div className="">
            <PaymentSection itenaryInfo={itenaryInfo} />
          </div>
          <div className="">
            <UploadDetailsSection itenaryInfo={itenaryInfo} />
          </div>
        </div>
        <div className="main w-[300px] pt-5 ">
          <div className=" w-[300px] h-[210px] bg-white rounded-md p-4">
            <h2 className="text-primaryColor text-lg ">Fare Deatils</h2>
            <ul className="list-none  text-primaryColor flex flex-col space-y-2 py-3 text-sm">
              <li className="flex justify-between">
                Base Fare <span>AED 1200</span>
              </li>
              <li className="flex justify-between">
                Surcharges & Taxes <span>AED 1200</span>
              </li>
              <li className="flex justify-between">
                Insurance <span>AED 1200</span>
              </li>
              <li className="mt-2 pt-2  flex justify-between border-t-[1px] border-gray-600 border-solid">
                Total <span>AED 1200</span>
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
