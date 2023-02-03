import React, { useEffect, useState } from "react";
import ItenarySection from "./ItenarySection";
import TravellerDetails from "./TravellerDetails";
import { BsArrowRightCircle } from "react-icons/bs";
import MakePaymentSection from "./MakePaymentSection";
import UploadDetailSection from "./UploadDetailSection";
import { useParams } from "react-router-dom";
import { fetchVisas } from "../../../redux/slices/visaSlice";
import { useDispatch } from "react-redux";

function VisaNavigator() {
  const dispatch = useDispatch();
  const [navigation, setNavigation] = useState({
    itenary: true,
    details: false,
    payment: false,
    upload: false,
  });

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchVisas(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="bg-gray-300 sticky top-0 z-10">
        <div className=" text-darktext ">
          <div className=" overflow-x-auto">
            <div className=" flex md:grid md:grid-cols-7 space-x-1 px-1 md:px-10 py-3 md:py-1 items-center ">
              <button
                className={`flex justify-center text-sm md:text-base items-center px-2 md:px-3 py-3  hover:text-lightblue  ${navigation.details || navigation.itenary || navigation.upload || navigation.payment  ? "border-b-4 border-blue text-lightblue" : ""} border-blue  hover:border-b-4 duration-300 space-x-1 `}
              >
                {/* <span className=''><FaWpforms /></span> */}
                <span className="">Itenary</span>
              </button>

              <button
                className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-3   duration-300 space-x-1  `}
              >
                <span className="">
                  <BsArrowRightCircle />{" "}
                </span>
              </button>
              <button
                className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-3  hover:text-lightblue  ${navigation.details || navigation.upload || navigation.payment  ? "border-b-4 border-blue text-lightblue" : ""} border-blue hover:border-b-4 duration-300 space-x-1  `}
              >
                {/* <span className=''><HiOutlineDocumentDuplicate /> </span> */}
                <span className="">Traveller Details</span>
              </button>
              <button
                className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-3   duration-300 space-x-1  `}
              >
                <span className="">
                  <BsArrowRightCircle />{" "}
                </span>
              </button>
              <button
                className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-3  hover:text-lightblue  ${ navigation.upload || navigation.payment ? "border-b-4 border-blue text-lightblue" : ""} border-blue hover:border-b-4 duration-300 space-x-1  `}
              >
                {/* <span className=''><GiEncirclement/></span> */}
                <span className="">Make Payment</span>
              </button>
              <button
                className={`flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-3  duration-300 space-x-1  `}
              >
                <span className="">
                  <BsArrowRightCircle />{" "}
                </span>
              </button>
              <button
                className={`flex justify-center text-sm md:text-base items-center px-6 md:px-3 py-3  hover:text-lightblue ${ navigation.upload  ? "border-b-4  text-lightblue" : ""} border-blue hover:border-b-4 duration-300 space-x-1  `}
              >
                {/* <span className=''><FaQuoteRight /></span> */}
                <span className="">Upload Details</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="">
          <ItenarySection
            navigation={navigation}
            setNavigation={setNavigation}
          />
        </div>

        <div className="">
          <TravellerDetails
            navigation={navigation}
            setNavigation={setNavigation}
          />
        </div>
        <div className="">
          <MakePaymentSection
            navigation={navigation}
            setNavigation={setNavigation}
          />
        </div>
        <div className="">
          <UploadDetailSection
            navigation={navigation}
            setNavigation={setNavigation}
          />
        </div>
      </div>
    </>
  );
}

export default VisaNavigator;
