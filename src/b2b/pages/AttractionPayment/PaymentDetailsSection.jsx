import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import OtpModal from "./OtpModal";
import axios from "../../../axios";
import priceConversion from "../../../utils/PriceConversion";
import { BtnLoader } from "../../components";
import { setAlertError } from "../../../redux/slices/homeSlice";
import { BiBlock } from "react-icons/bi";

function PaymentDetailsSection() {
   const dispatch = useDispatch();
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

   const finalPayment =
      agentExcursionCart &&
      agentExcursionCart.reduce((acc, item) => {
         const vatPrice =
            item?.vat && item?.isVat && (item?.price * item?.vat) / 100;
         const sum = vatPrice + item?.price;
         return acc + sum;
      }, 0);

   return (
      <>
         <div className=" w-full py-5 rounded-2xl space-y-5">
            <form className="md:space-y-3">
               <div className=" cursor-default">
                  <h2 className="text-2xl font-semibold text-darktext">
                     Lead Passenger Details
                  </h2>
               </div>

               <div className="md:grid grid-cols-12 gap-4 text-darktext pt-5 space-y-3 md:space-y-0">
                  <div className="col-span-2">
                     <div className="relative w-full h-14 py-2 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                           Mr/Mrs
                        </span>
                        <select
                           type="text"
                           name="gender"
                           value={travellerData.gender}
                           onChange={onChange}
                           className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                        >
                           <option value={"male"}>Mr.</option>
                           <option value={"female"}>Mrs.</option>
                           <option value={"other"}>Ms.</option>
                        </select>
                     </div>
                  </div>
                  <div className="col-span-5">
                     <div className="relative w-full h-14 py-2 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                           First Name
                        </span>
                        <input
                           className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                           type="text"
                           name="firstname"
                           value={travellerData.firstname}
                           onChange={onChange}
                           required
                        />
                     </div>
                  </div>
                  <div className="col-span-5">
                     <div className="relative w-full h-14 py-2 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                           Last Name
                        </span>
                        <input
                           className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                           type="text"
                           name="lastname"
                           value={travellerData.lastname}
                           onChange={onChange}
                           required
                        />
                     </div>
                  </div>
               </div>
               <div className="md:grid grid-cols-3 gap-4 text-darktext space-y-8 md:space-y-0">
                  <div className="relative w-full h-14 py-2 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                     <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                        Email
                     </span>
                     <input
                        className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                        type="text"
                        name="email"
                        value={travellerData.email}
                        onChange={onChange}
                        required
                     />
                  </div>
                  <div className="relative w-full h-14 py-2 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                     <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                        Nationality
                     </span>
                     <select
                        className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                        type="text"
                        name="country"
                        value={travellerData.country}
                        required
                        onChange={onChange}
                     >
                        <option hidden></option>
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

                  <div className=" flex gap-1">
                     <div className="relative w-3/12 h-14 py-2 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                           Code
                        </span>
                        <input
                           className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                           value={country?.map((item) => item?.phonecode) || ""}
                           readOnly
                        />
                     </div>
                     <div className="relative w-9/12 h-14 py-2 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                           Phone Number
                        </span>
                        <input
                           className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium no-spinner"
                           type="number"
                           name="phone"
                           required
                           value={travellerData.phone}
                           onChange={onChange}
                        />
                     </div>
                  </div>
               </div>
               <div className="relative w-full  py-2 px-3 mb-8 border border-gray-400 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                  <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                     Special Request
                  </span>
                  <textarea
                     className="block w-full min-h-20  outline-none bg-transparent text-sm text-gray-400 font-medium no-spinner"
                     type="text"
                     name="special_request_text"
                     value={travellerData.special_request_text}
                     onChange={onChange}
                  />
               </div>
            </form>
         </div>
         <div className="bg-light  w-full px-5 py-5 rounded-xl lg:my-3">
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
                  <p className="text-lightblue text-[10px] sm:text-sm lg:text-base">
                     All Coupon code discounts are Applicable on MRP(Retail
                     Price) of Tours
                  </p>
               </span>
            </div>
            {viewRedeem && (
               <div className="bg-white p-7 rounded-b-xl rounded-r-xl">
                  <div className=" flex space-x-4">
                     <input className="border  py-2 rounded-lg px-2 text-darktext placeholder:text-darktext focus:outline-none focus:border-none focus:ring-1 focus:ring-blue bg-light " />
                     <button className="px-3 py-2 bg-lightblue text-light rounded-lg">
                        Redeem
                     </button>
                  </div>
               </div>
            )}
         </div>
         <div className="my-3 p-7 rounded-2xl lg:flex ">
            <div className='{" "}'>
               <span className="cursor-default ">
                  By Clicking Pay Now You agree that you have read and
                  understood our{" "}
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
            <div className="text-center fixed lg:static bottom-0 left-0 right-0 rounded-t-3xl lg:rounded-none py-8 bg-white lg:bg-soft lg:bg-none px-10 lg:px-0 z-10">
               <button
                  className={`text-light bg-lightblue  py-2 rounded-lg text whitespace-nowrap w-full px-10  ${balance < finalPayment ? " cursor-not-allowed " : " cursor-pointer "}`}
                  onClick={balance > finalPayment && submitHandler}
               >
                  {balance < finalPayment ? (
                     <span className="text-xl">
                        <BiBlock />
                     </span>
                  ) : (
                     "Pay Now"
                  )}
               </button>
            </div>
         </div>
         {otpModal && <OtpModal setOtpModal={setOtpModal} orderId={orderId} />}
      </>
   );
}

export default PaymentDetailsSection;
