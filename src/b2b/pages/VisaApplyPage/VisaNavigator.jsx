import React, { useEffect, useState } from "react";
import ItenarySection from "./ItenarySection";
import TravellerDetails from "./TravellerDetails";
import { BsArrowRightCircle, BsCheck2Circle } from "react-icons/bs";
import MakePaymentSection from "./MakePaymentSection";
import UploadDetailSection from "./UploadDetailSection";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setVisas } from "../../../redux/slices/visaSlice";
import axios from "../../../axios";
import priceConversion from "../../../utils/PriceConversion";

function VisaNavigator() {
  const dispatch = useDispatch();
  const [navigation, setNavigation] = useState({
    itenary: true,
    details: false,
    payment: false,
    upload: false,
  });

  const [data, setData] = useState({
    visaType: localStorage.getItem("visaEnquiry")
      ? localStorage.getItem("visaEnquiry")
      : "",
    email: "",
    contactNo: "",
    traveller: "",
    onwardDate: "",
    returnDate: "",
    country: "",
  });

  const { id } = useParams();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState({});

  const { token } = useSelector((state) => state.agents);
  const { visa, visaEnquiry } = useSelector((state) => state.visa);
  const { selectedCurrency } = useSelector((state) => state.home);

  const fetchVisas = async (id) => {
    try {
      setError("");
      setIsLoading(true);
      const response = await axios.get(`/b2b/visa/list/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      dispatch(setVisas(response.data));
      setIsLoading(false);
    } catch (err) {
      setError(err?.response?.data?.error);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVisas(id);
  }, [id]);

  useEffect(() => {
    if (visa?.visaType?.length > 0) {
      for (let item of visa?.visaType) {
        if (item._id === visaEnquiry?.visaType) {
          setSelectedVisa(item);
        }
      }
    }
  }, [visaEnquiry]);

  const totalPrice =
    +selectedVisa?.totalPrice + selectedVisa?.insurance + selectedVisa?.tax;

  const grandTotal = totalPrice * visaEnquiry?.traveller;

  return (
    <>
      <div className="bg-gray-300 rounded-lg sticky top-0 z-10">
        <div className=" text-darktext ">
          <div className=" overflow-x-auto scrollbar-hide">
            <div className=" flex md:grid md:grid-cols-11  px-1 md:px-10 py-3 md:py-1 items-center ">
              <button
                className={`col-span-2 flex justify-center text-[10px] lg:text-sm md:text-base items-center px-2 md:px-3 py-3  hover:text-lightblue  ${
                  navigation.details ||
                  navigation.itenary ||
                  navigation.upload ||
                  navigation.payment
                    ? "border-b-4  text-lightblue"
                    : ""
                } border-blue-500  hover:border-b-4 duration-300 space-x-1 `}
                onClick={() => {
                  navigation.details &&
                    setNavigation({
                      itenary: true,
                      details: false,
                      payment: false,
                      upload: false,
                    });
                }}
              >
                {/* <span className=''><FaWpforms /></span> */}
                <span className="">Itenary</span>
              </button>

              <button
                className={`col-span-1 hidden lg:flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-3   duration-300 space-x-1 ${
                  navigation.details || navigation.upload || navigation.payment
                    ? "border-b-4 text-lightblue"
                    : ""
                } border-blue-500  `}
              >
                {navigation.details ||
                navigation.upload ||
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
                className={`col-span-2 flex justify-center text-[10px] lg:text-sm md:text-base items-center px-5 md:px-3 py-3  hover:text-lightblue  ${
                  navigation.details || navigation.upload || navigation.payment
                    ? "border-b-4 text-lightblue"
                    : ""
                } border-blue-500 hover:border-b-4 duration-300 space-x-1  whitespace-nowrap`}
              >
                <span className="">Traveller Details</span>
              </button>
              <button
                className={`col-span-1 hidden lg:flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-3   duration-300 space-x-1 ${
                  navigation.upload || navigation.payment
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
                className={`col-span-2 flex justify-center text-[10px] lg:text-sm md:text-base items-center px-5 md:px-3 py-3  hover:text-lightblue  ${
                  navigation.upload || navigation.payment
                    ? "border-b-4 text-lightblue"
                    : ""
                } border-blue-500 hover:border-b-4 duration-300 space-x-1  whitespace-nowrap`}
              >
                <span className="">Make Payment</span>
              </button>
              <button
                className={`col-span-1 hidden lg:flex justify-center text-sm md:text-base items-center px-5 md:px-3 py-3  duration-300 space-x-1 ${
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
                className={`col-span-2 flex justify-center text-[10px] lg:text-sm md:text-base items-center px-6 md:px-3 py-3  hover:text-lightblue ${
                  navigation.upload ? "border-b-4  text-lightblue" : ""
                } border-blue-500 hover:border-b-4 duration-300 space-x-1  whitespace-nowrap`}
              >
                {/* <span className=''><FaQuoteRight /></span> */}
                <span className="">Upload Details</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main lg:flex ">
        <div className="w-[80%]">
          <div className="">
            <ItenarySection
              navigation={navigation}
              setNavigation={setNavigation}
              setData={setData}
              data={data}
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
        <div className="w-[20%] py-8 pr-6">
          <div className="bg-gray-100 shadow-sm rounded p-2 text-darktext">
            <p className="text-[16px]">Fare Details</p>
            <div className="border-b border-darktext py-2">
              <div className="flex justify-between">
                <p className="text-[14px]">Base Fare</p>
                <p className="text-[14px]">
                  {priceConversion(
                    selectedVisa?.totalPrice,
                    selectedCurrency,
                    true
                  )}{" "}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[14px]">Tax</p>
                <p className="text-[14px]">
                  {priceConversion(selectedVisa?.tax, selectedCurrency, true)}{" "}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[14px]">Insurance</p>
                <p className="text-[14px]">
                  {priceConversion(
                    selectedVisa?.insurance,
                    selectedCurrency,
                    true
                  )}{" "}
                </p>
              </div>
            </div>
            <div className="border-b border-darktext py-2">
              <div className="flex justify-between">
                <p className="text-[14px]">Total Fare</p>
                <p className="text-[14px]">
                  {priceConversion(totalPrice, selectedCurrency, true)}{" "}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[14px]">Traveller</p>
                <p className="text-[14px]">{visaEnquiry?.traveller} </p>
              </div>
            </div>
            <div className="border-b  border-darktext py-1">
              <div className="flex justify-between">
                <p className="text-[14px]">Total Price</p>
                <p className="text-[14px]">
                  {priceConversion(grandTotal, selectedCurrency, true)}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisaNavigator;
