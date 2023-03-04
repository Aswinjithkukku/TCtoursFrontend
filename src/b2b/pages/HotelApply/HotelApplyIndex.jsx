import React from "react";
import { AiOutlineCheckCircle, AiOutlineLeft } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";
import { Ri24HoursFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import banner from "../../../static/images/banner.jpg";

function HotelApplyIndex() {
   const navigate = useNavigate();
   return (
      <div className="text-darktext">
         <div className="p-2 lg:p-6">
            <div className="lg:flex lg:justify-between p-5 bg-white rounded-md cursor-default space-y-3 sm:space-y-0">
               <div className="lg:space-y-5 font-bold uppercase text-stone-500">
                  <div className="">You've got the best price</div>
                  <div className="">Best Price Guarantee</div>
               </div>
               <div className="lg:space-y-5 space-y-2 font-medium">
                  <div className="font-bold uppercase text-stone-500">
                     Currently, you have 2 item(s) in your cart
                  </div>
                  <div className="">
                     <button
                        className="px-3 py-2 bg-lightblue rounded font-[600] text-[14px] text-white flex items-center space-x-2 hover:border border-lightblue hover:bg-light hover:text-lightblue"
                        onClick={() => navigate(-1)}
                     >
                        <span className="">
                           <AiOutlineLeft />{" "}
                        </span>
                        <span className="uppercase">Continue shopping</span>
                     </button>
                  </div>
               </div>
            </div>
            <div className="mt-5 flex flex-nowrap gap-2">
               <div className="left_part w-[75%]">
                  <div className="flex gap-5 bg-white p-5 rounded-2xl shadow-sm">
                     <div className="w-36 h-36 rounded-2xl overflow-hidden">
                        <img
                           src={banner}
                           alt="im"
                           className="w-full h-full object-cover"
                        />
                     </div>
                     <div className=" space-y-2">
                        <p className="text-[12px]">Apartment</p>
                        <h2 className="font-[700]">
                           Emirates Sports Rooms and Apartments, Dubai Sports
                           City
                        </h2>
                        <p className="text-[14px]">
                           Dubai Sports City, Dubai, United Arab Emirates
                        </p>
                        <div className="flex flex-wrap gap-2">
                           <div className="flex gap-2 items-center">
                              <p className="text-sky-500">
                                 <AiOutlineCheckCircle />
                              </p>
                              <p className="text-xs">ADA Room</p>
                           </div>
                           <div className="flex gap-2 items-center">
                              <p className="text-sky-500">
                                 <AiOutlineCheckCircle />
                              </p>
                              <p className="text-xs">Small Room</p>
                           </div>
                           <div className="flex gap-2 items-center">
                              <p className="text-sky-500">
                                 <AiOutlineCheckCircle />
                              </p>
                              <p className="text-xs">Living Room</p>
                           </div>
                           <div className="flex gap-2 items-center">
                              <p className="text-sky-500">
                                 <AiOutlineCheckCircle />
                              </p>
                              <p className="text-xs">Prvate pool</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="mt-5 bg-white rounded-2xl shadow-sm p-5 space-y-2">
                     <h3 className="font-[650] text-[20px]">
                        Details of Guest
                     </h3>
                     <p className="text-stone-500 text-sm">
                        Are you travlleing for work?
                     </p>
                     <div className="flex gap-3 text-[14px]">
                        <span className="flex gap-2 items-center">
                           <input className="" name="work" type="radio" />
                           <label>yes</label>
                        </span>
                        <span className="flex gap-2 items-center">
                           <input className="" name="work" type="radio" />
                           <label> No</label>
                        </span>
                     </div>
                     <div className="grid grid-cols-2 gap-7 py-3">
                        <div className="relative w-full h-12 py-4 px-3  border border-gray-300 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                           <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
                              First Name
                           </span>
                           <input
                              className="block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                              type="text"
                              required
                           />
                        </div>
                        <div className="relative w-full h-12 py-4 px-3  border border-gray-300 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                           <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
                              Last Name
                           </span>
                           <input
                              className="block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                              type="text"
                              required
                           />
                        </div>
                        <div className="relative w-full h-12 py-4 px-3  border border-gray-300 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                           <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
                              Nationality
                           </span>
                           <input
                              className="block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                              type="text"
                              required
                           />
                        </div>
                        <div className="relative w-full h-12 py-4 px-3  border border-gray-300 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                           <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
                              Phone Number
                           </span>
                           <input
                              className="block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                              type="text"
                              required
                           />
                        </div>
                        <div className="relative w-full h-12 py-4 px-3  border border-gray-300 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                           <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
                              Email Address
                           </span>
                           <input
                              className="block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                              type="text"
                              required
                           />
                        </div>
                     </div>
                     <div className="">
                        <p className="text-stone-500 text-sm">
                           Who are you booking for?
                        </p>
                        <div className=" text-[14px] space-y-1 mt-2">
                           <span className="flex gap-2 items-center">
                              <input className="" name="booking" type="radio" />
                              <label>I'm the main guest</label>
                           </span>
                           <span className="flex gap-2 items-center">
                              <input className="" name="booking" type="radio" />
                              <label> I'm booking for someone else</label>
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="mt-5 bg-white rounded-2xl shadow-sm p-5 space-y-2">
                     <h3 className="font-[650] text-[20px]">
                        Special requests
                     </h3>
                     <p className="text-stone-500 text-sm">
                        pecial requests can't be guaranteed, but the property
                        will do its best to meet your needs. You can always make
                        a special request after your booking is complete.
                     </p>
                     <p className="text-sm">
                        Please write your requests in English or Arabic
                     </p>
                     <textarea className="h-20 w-full outline-none border rounded-md p-3" />
                  </div>
                  <div className="mt-5 bg-white rounded-2xl shadow-sm p-5 space-y-2">
                     <h3 className="font-[650] text-[20px]">
                        Your arrival time
                     </h3>
                     <p className=" flex items-center gap-1">
                        <span className="">
                           <BsClipboardCheck />{" "}
                        </span>
                        <span className="text-sm">
                           Your room will be ready for check-in at 3:00 PM
                        </span>
                     </p>
                     <p className=" flex items-center gap-1 pb-4">
                        <span className="">
                           <Ri24HoursFill />{" "}
                        </span>
                        <span className="text-sm">
                           24-hour front desk – help whenever you need it!
                        </span>
                     </p>
                     <div className="relative w-1/2 h-12 py-4 px-3  border border-gray-300 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-600">
                           Add your estimated arrival time
                        </span>
                        <select
                           className="block w-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                           type="text"
                           required
                        >
                           <option hidden></option>
                           <option>Demonstration</option>
                        </select>
                     </div>
                  </div>
                  <div className="mt-5 bg-white rounded-2xl shadow-sm p-5 space-y-2">
                     <h3 className="font-[650] text-[20px]">
                        Review House Rules
                     </h3>
                     <p className="text-stone-500 text-sm">
                        Your host would like you to agree to the following house
                        rules:
                     </p>
                     <ul className="list-disc ml-5 text-sm">
                        <li>No smoking</li>
                        <li>No parties/events</li>
                     </ul>
                     <p className="text-sm">
                        By continuing to the next step, you agree to these house
                        rules
                     </p>
                  </div>
                  <div className="mt-5 flex justify-end">
                     <button className="px-4 py-2 text-[14px] font-[600] rounded uppercase bg-blue-600 text-white">
                        Move to Payment
                     </button>
                  </div>
               </div>
               <div className="right_part w-[25%]">
                  <div className="flex gap-5 bg-white p-5 rounded-2xl shadow-sm">
                     <div className="w-full space-y-2">
                        <h4 className="font-[600]">Your Booking Details</h4>
                        <div className="flex gap-2 items-center justify-between border-b pb-1">
                           <div className="">
                              <p className="text-[14px]">Check-in</p>
                              <p className="font-[600] text-[17px]">
                                 Wed, Mar 15,2023
                              </p>
                              <p className="text-[14px] text-stone-500">
                                 from 03:00
                              </p>
                           </div>

                           <div className="">
                              <p className="text-[14px]">Check-out</p>
                              <p className="font-[600] text-[17px]">
                                 Wed, Mar 15,2023
                              </p>
                              <p className="text-[14px] text-stone-500">
                                 from 03:00
                              </p>
                           </div>
                        </div>
                        <p className="text-[14px]">Total length of stay:</p>
                        <p className="text-[14px] font-[600]">1 Week</p>
                        <div className="border-t pt-1">
                           <p className="text-[14px] font-[600] pb-2">
                              You selected:
                           </p>
                           <p className="text-[14px]">Palm Queen Room</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex gap-5 bg-white p-5 rounded-2xl shadow-sm mt-5">
                     <div className="w-full space-y-2">
                        <h4 className="font-[600]">Pricing Details</h4>
                        <div className="flex gap-2 items-center justify-between border-b pb-1 text-lg">
                           <div className="">
                              <p className="font-[700]">
                                 Price
                              </p>
                           </div>

                           <div className="">
                              <p className="font-[700] ">
                                 140 AED
                              </p>
                           </div>
                        </div>
                        <div className="">
                           <p className="text-[14px] font-[600] pb-2">
                           Excluded charges
                           </p>
                           <div className="flex justify-between items-center text-[15px]">
                              <p className="">VAT</p>
                              <p className="">10 AED</p>
                           </div>
                           <div className="flex justify-between items-center text-[15px]">
                              <p className="">Tourism fee</p>
                              <p className="">10 AED</p>
                           </div>
                           <div className="flex justify-between items-center text-[15px]">
                              <p className="">Property service charge</p>
                              <p className="">10 AED</p>
                           </div>
                           <div className="flex justify-between items-center text-[15px]">
                              <p className="">Municipality fee</p>
                              <p className="">10 AED</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default HotelApplyIndex;
