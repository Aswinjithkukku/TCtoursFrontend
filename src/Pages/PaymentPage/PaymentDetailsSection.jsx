import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import OtpModal from "./OtpModal";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import Swal from "sweetalert2";
import PaymentApproval from "../PaymentApproval/PaymentApproval";
import CCAvenue from "../../components/Payment/CCAvenue";

function PaymentDetailsSection() {
  const navigate = useNavigate();
  const { jwtToken } = useSelector((state) => state.users);

  const [otpModal, setOtpModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const config = {
    headers: {
      authorization: `Bearer ${jwtToken}`,
    },
  };

  const [travellerData, setTravellerData] = useState({
    gender: "male",
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    phone: "",
    special_request_text: "",
  });
  const [viewRedeem, setViewRedeem] = useState(false);
  const { countries } = useSelector((state) => state.home);

  const onChange = (e) => {
    setTravellerData({ ...travellerData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError("");
      const tour_order = JSON.parse(localStorage.getItem("tour_order"));
      let order_data;
      if (tour_order) {
        order_data = tour_order.map((item) => {
          return {
            activity: item?._id,
            date: item?.date,
            adultsCount: Number(item?.adult),
            childrenCount: Number(item?.child),
            infantCount: Number(item?.infant),
            transferType: item?.transfer,
          };
        });
      }
      let createOrderData = {
        name: travellerData?.firstname + " " + travellerData?.lastname,
        email: travellerData?.email,
        country: travellerData?.country,
        phoneNumber: travellerData?.phone,
        selectedActivities: order_data,
      };

      const response = await axios.post(
        "/attractions/orders/create",
        {
          ...createOrderData,
          paymentProcessor: "ccavenue",
        },
        config
      );

      const winUrl = URL.createObjectURL(
        new Blob([response.data], { type: "text/html" })
      );

      const win = window.open(winUrl, "win");

      // setResult(response);
      setIsLoading(false);
      // navigate(`/payment/approval/${response.data?._id}`);
    } catch (error) {
      setError(error?.response?.data?.error);
      await Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: error?.response?.data?.error,
      });
    }
  };

  return (
    <>
      <div className="bg-light  w-full p-5 rounded-2xl space-y-5">
        <form className="text-sm" onSubmit={submitHandler}>
          <div className=" cursor-default">
            <h2 className="text-2xl font-semibold text-darktext">
              Lead Passenger Details
            </h2>
          </div>

          <div className="lg:grid grid-cols-12 gap-5 text-darktext space-y-3 lg:space-y-0 lg:py-2">
            <div className="col-span-2">
              <div className="">
                <label className="">Mr/Mrs</label>
              </div>
              <div className="">
                <select
                  type="text"
                  name="gender"
                  value={travellerData.gender}
                  onChange={onChange}
                  className="border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light"
                >
                  <option value={"male"}>Mr.</option>
                  <option value={"female"}>Mrs.</option>
                  <option value={"other"}>Ms.</option>
                </select>
              </div>
            </div>
            <div className="col-span-5">
              <div className="">
                <label className="">First Name</label>
              </div>
              <div className="">
                <input
                  type="text"
                  className="border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light"
                  name="firstname"
                  value={travellerData.firstname}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="col-span-5">
              <div className="">
                <label className="">Last Name</label>
              </div>
              <div className="">
                <input
                  type="text"
                  className="border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light"
                  name="lastname"
                  value={travellerData.lastname}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          <div className="lg:grid grid-cols-12 gap-5 text-darktext space-y-3 lg:space-y-0 lg:py-2">
            <div className="col-span-4">
              <div className="">
                <label className="">Email</label>
              </div>
              <div className="">
                <input
                  type="text"
                  className="border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light"
                  name="email"
                  value={travellerData.email}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className="col-span-4">
              <div className="">
                <label className="">Country</label>
              </div>
              <div className="">
                <select
                  type="text"
                  className="border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light"
                  name="country"
                  required
                  value={travellerData.country}
                  onChange={onChange}
                >
                  <option>Choose Country</option>
                  {countries?.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.countryName}{" "}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-span-4">
              <div className="">
                <label className="">Phone</label>
              </div>
              <div className="">
                <input
                  type="number"
                  className="border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light"
                  name="phone"
                  value={travellerData.phone}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="text-darktext py-1">
            <div className="">
              <label className="">Special Request</label>
            </div>
            <div className="">
              <textarea
                type="text"
                className="border w-full py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light"
                name="special_request_text"
                value={travellerData.special_request_text}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="flex justify-end py-4">
            <button
              className="text-light bg-lightblue px-3 py-2 rounded-lg text whitespace-nowrap w-[300px]"
              type="submit"
            >
              Pay By CCAvenue
            </button>
          </div>
        </form>
      </div>
      <div className="bg-light  w-full px-5 py-10 rounded-2xl lg:my-5">
        <div className="lg:flex items-center lg:space-x-2">
          <span className="">
            <button
              className="border border-lightblue px-3 py-2 text-lightblue space-x-2 flex items-center"
              onClick={() => setViewRedeem(!viewRedeem)}
            >
              <span className="whitespace-nowrap">Use Promo Code</span>
              <span className="">
                <AiOutlineDown />{" "}
              </span>
            </button>
          </span>
          <span className=" cursor-default">
            <p className="text-lightblue text-sm lg:text-base">
              All Coupon code discounts are Applicable on MRP(Retail Price) of
              Tours
            </p>
          </span>
        </div>
        {viewRedeem && (
          <div className="bg-soft p-7 rounded-b-xl rounded-r-xl">
            <div className=" flex space-x-4">
              <input className="border  py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light " />
              <button className="px-3 py-2 bg-lightblue text-light rounded-lg">
                Redeem
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="bg-light my-5 p-7 rounded-2xl lg:flex -z-10 flex flex-col">
        {result && (
          <>
            {/* <PaymentApproval data={result} /> */}
            <CCAvenue data={result} />
          </>
        )}
        {/* <div className='{" "}'>
          <span className="cursor-default ">
            By Clicking Pay Now You agree that you have read and understood our{" "}
          </span>
          <span className="text-lightblue underline cursor-pointer">
            Terms & Conditions
          </span>
        </div>
        <div className="text-center fixed lg:static bottom-0 left-0 right-0 rounded-t-3xl lg:rounded-none py-8 bg-light lg:bg-none px-10 lg:px-0 z-10">
          <button
            className="text-light bg-lightblue px-3 py-2 rounded-lg text whitespace-nowrap w-full"
            onClick={submitHandler}
          >
            Pay Now
          </button>
        </div> */}
      </div>
      {otpModal && <OtpModal setOtpModal={setOtpModal} />}
    </>
  );
}

export default PaymentDetailsSection;
