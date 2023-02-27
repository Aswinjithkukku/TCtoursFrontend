import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import OtpModal from "./OtpModal";
import axios from "../../../axios";
import Swal from "sweetalert2";
import priceConversion from "../../../utils/PriceConversion";
import { BtnLoader } from "../../components";
import { setAlertError } from "../../../redux/slices/homeSlice";

function PaymentDetailsSection() {
  const dispatch = useDispatch()
  const [otpModal, setOtpModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

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
  const { agentExcursionCart } = useSelector((state) => state.agentExcursions);
  const { token } = useSelector((state) => state.agents);
  const { selectedCurrency } = useSelector((state) => state.home);
  const { balance, loading } = useSelector((state) => state.wallet);

  const onChange = (e) => {
    setTravellerData({ ...travellerData, [e.target.name]: e.target.value });
  };

  const activity = agentExcursionCart.map((item) => {
    return {
      activity: item?._id,
      date: item?.date,
      adultsCount: item?.adult,
      childrenCount: item?.child,
      infantCount: item?.infant,
      transferType: item?.transfer,
    };
  });

  const submitHandler = async (e) => {
    try {
      e.preventDefault();

      setIsLoading(true);
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        "/b2b/attractions/orders/create",
        {
          selectedActivities: activity,
          country: travellerData?.country,
          name: travellerData?.firstname + " " + travellerData?.lastname,
          email: travellerData?.email,
          phoneNumber: travellerData?.phone,
        },
        config
      );

      setIsLoading(false);
      setOtpModal(true);
      setOrderId(response.data?._id);
    } catch (err) {
      if (err?.response?.data?.error) {
        setError(err?.response?.data?.error);
        // await Swal.fire({
        //   icon: "error",
        //   title: "Something went wrong!",
        //   text: err?.response?.data?.error,
        // });
        dispatch(
          setAlertError({
            status: true,
            title: "Something went wrong!",
            text: err?.response?.data?.error,
          })
        );
        setIsLoading(false);
      }
    }
  };

  const country = countries?.filter(
    (item) => item._id === travellerData?.country
  );

  return (
    <>
      <div className=" w-full p-5 rounded-2xl space-y-5">
        <form className="lg:space-y-3">
          <div className=" cursor-default">
            <h2 className="text-2xl font-semibold text-darktext">
              Lead Passenger Details
            </h2>
          </div>

          <div className="lg:grid grid-cols-12 gap-4 text-darktext space-y-3 lg:space-y-0">
            <div className="col-span-2">
              <div className="">
                <label className="label">Mr/Mrs</label>
              </div>
              <div className="">
                <select
                  type="text"
                  name="gender"
                  value={travellerData.gender}
                  onChange={onChange}
                  className="select w-full "
                >
                  <option value={"male"}>Mr.</option>
                  <option value={"female"}>Mrs.</option>
                  <option value={"other"}>Ms.</option>
                </select>
              </div>
            </div>
            <div className="col-span-5">
              <div className="">
                <label className="label">First Name</label>
              </div>
              <div className="">
                <input
                  type="text"
                  className="input w-full "
                  name="firstname"
                  value={travellerData.firstname}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className="col-span-5">
              <div className="">
                <label className="label">Last Name</label>
              </div>
              <div className="">
                <input
                  type="text"
                  className="input w-full "
                  name="lastname"
                  value={travellerData.lastname}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="lg:grid grid-cols-3 gap-4 text-darktext space-y-3 lg:space-y-0">
            <div className="">
              <div className="">
                <label className="label">Email</label>
              </div>
              <div className="">
                <input
                  type="text"
                  className="input w-full "
                  name="email"
                  value={travellerData.email}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className="">
              <div className="">
                <label className="label">Nationality</label>
              </div>
              <div className="">
                <select
                  type="text"
                  className="select w-full "
                  name="country"
                  value={travellerData.country}
                  required
                  onChange={onChange}
                >
                  <option>Choose Country</option>
                  {countries?.map((item) => (
                    <option
                      className="capitalize"
                      key={item._id}
                      value={item._id}
                    >
                      {item.countryName}{" "}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className=" flex gap-1">
              <div className="w-3/12">
                <label className="label">Code</label>
                <input
                  className="input"
                  value={country?.map((item) => item?.phonecode) || ""}
                  readOnly
                />
              </div>
              <div className="w-9/12">
                <label className="label">Phone Number</label>
                <input
                  className="input no-spinner"
                  type="number"
                  placeholder="Ex: 0000000000"
                  name="phone"
                  required
                  value={travellerData.phone}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          <div className="text-darktext">
            <div className="">
              <label className="label">Special Request</label>
            </div>
            <div className="">
              <textarea
                type="text"
                className="textarea w-full "
                name="special_request_text"
                value={travellerData.special_request_text}
                onChange={onChange}
              />
            </div>
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
      <div className="bg-light my-5 p-7 rounded-2xl lg:flex ">
        <div className='{" "}'>
          <span className="cursor-default ">
            By Clicking Pay Now You agree that you have read and understood our{" "}
          </span>
          <span className="text-lightblue underline cursor-pointer">
            Terms & Conditions
          </span>
          {loading ? (
            <BtnLoader />
          ) : (
            <p className="font-[500] text-darktext">
              Your Wallet Balance is{" "}
              {priceConversion(balance, selectedCurrency, true)}{" "}
            </p>
          )}
        </div>
        <div className="text-center fixed lg:static bottom-0 left-0 right-0 rounded-t-3xl lg:rounded-none py-8 bg-light lg:bg-none px-10 lg:px-0 z-10">
          <button
            className="text-light bg-lightblue px-3 py-2 rounded-lg text whitespace-nowrap w-full"
            onClick={submitHandler}
          >
            Pay Now
          </button>
        </div>
      </div>
      {otpModal && <OtpModal setOtpModal={setOtpModal} orderId={orderId} />}
    </>
  );
}

export default PaymentDetailsSection;
