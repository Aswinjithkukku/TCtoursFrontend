import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
import { GiSofa } from "react-icons/gi";
import { IoBed, IoBedOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function AvailabilitySection() {
  const navigate = useNavigate()
   return (
      <div className="text-darktext pb-5 ">
         <h2 className="text-[20px] capitalize font-[700]">Availablity</h2>
         <div className="flex gap-2 flex-nowrap">
            <div className="bg-white shadow-sm rounded-2xl p-5 w-[80%]">
               <div className="flex justify-between">
                  <div className="left__section">
                     <h2 className="text-[17px] font-[700]">
                        Palm King Room - Full board and Extraordinary Inclusions
                     </h2>
                     <p className="text-red-800 font-medium text-xs flex gap-1 items-center">
                        <span className="">
                           <CgSandClock />
                        </span>
                        <span className="">Only 2 rooms left on our site</span>
                     </p>
                     <p className="flex gap-1 items-center">
                        <span className="">
                           <IoBed />
                        </span>{" "}
                        1 king bed and{" "}
                        <span className="">
                           <GiSofa />
                        </span>{" "}
                        1 sofa bed{" "}
                     </p>
                     <p className="text-stone-400 text-[12px]">
                        Guests will enjoy the following exclusive benefits worth
                        over 3500 AED:
                     </p>
                  </div>
                  <div className="right__section max-w-[45%] ">
                     <div>
                        <div className="flex gap-2 flex-wrap  justify-end pb-2 border-b">
                           <div className="flex gap-2 items-center">
                              <p className="bg-blue-100/50 text-sky-500 text-sm p-1 rounded-md">
                                 <IoBedOutline />
                              </p>
                              <p className="text-xs">Pool View</p>
                           </div>
                           <div className="flex gap-2 items-center">
                              <p className="bg-blue-100/50 text-sky-500 text-sm p-1 rounded-md">
                                 <IoBedOutline />
                              </p>
                              <p className="text-xs">Pool View</p>
                           </div>
                           <div className="flex gap-2 items-center">
                              <p className="bg-blue-100/50 text-sky-500 text-sm p-1 rounded-md">
                                 <IoBedOutline />
                              </p>
                              <p className="text-xs">Pool View</p>
                           </div>
                           <div className="flex gap-2 items-center">
                              <p className="bg-blue-100/50 text-sky-500 text-sm p-1 rounded-md">
                                 <IoBedOutline />
                              </p>
                              <p className="text-xs">Pool View</p>
                           </div>
                           <div className="flex gap-2 items-center">
                              <p className="bg-blue-100/50 text-sky-500 text-sm p-1 rounded-md">
                                 <IoBedOutline />
                              </p>
                              <p className="text-xs">Pool View</p>
                           </div>
                        </div>
                        <div className="flex gap-2 flex-wrap  justify-end mt-2">
                           <div className="flex gap-2 items-center">
                              <p className="text-sky-500">
                                 <AiOutlineCheckCircle />
                              </p>
                              <p className="text-xs">A/C</p>
                           </div>
                           <div className="flex gap-2 items-center">
                              <p className="text-sky-500">
                                 <AiOutlineCheckCircle />
                              </p>
                              <p className="text-xs">Balcony</p>
                           </div>
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
               </div>
               <div className=" flex justify-between text-darktext border-t mt-2 pt-2">
                  <div className="third__section">
                     <div className="">
                        <ul className="list-disc ml-5 text-[13px]">
                           <li className="text-green-600">
                              Flexible to reschedule if plans change
                           </li>
                           <li>Non-refundable</li>
                           <li>Pay in advance</li>
                           <li>FREE taxi from the airport to this property</li>
                        </ul>
                     </div>

                     <div className="relative w-[20vw] h-10 py-1 mt-5 px-3 border border-gray-300 hover:border-blue-400 focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 rounded px-1 bg-blue-500">
                           Select an apartment
                        </span>
                        <select
                           className="block w-full h-full outline-none bg-transparent text-sm text-gray-400 font-medium"
                           type="text"
                           name="forgotEmail"
                           required
                        >
                           <option hidden></option>
                           <option>Demo</option>
                        </select>
                     </div>
                  </div>
                  <div className="fourth__section">
                     <div className="flex gap-3 justify-center items-center mt-2 text-[13px] uppercase rounded py-1 bg-gray-700 text-gray-200">
                        <p className="font-[650]">Sleeps</p>
                        <p className="flex items-center gap-1">
                           <span className="">
                              <BsPersonFill />
                           </span>
                           <span className="font-[650]">x 6</span>
                        </p>
                     </div>
                     <div className="flex justify-end items-end ">
                        <div>
                           <p className="text-[16px] font-semibold mt-3">
                              Price for 4 Nights
                           </p>

                           <p className="text-[12px] text-red-500">
                              <s>140 AED</s>
                           </p>

                           <p className="font-[650] text-[20px]">120 AED</p>
                           <p className="text-stone-400 text-[12px]">
                              +10 AED taxes and charges
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-[20%] text-darktext">
               <div className="bg-white p-4 py-5 rounded-2xl shadow-sm space-y-2">
                  <p className="flex gap-2 items-end">
                     <span className="text-red-500 text-[12px]">
                        <s>140 AED</s>
                     </span>
                     <span className="font-[650]">140 AED</span>
                  </p>
                  <p className="text-[12px] text-gray-400">for 1 apartment </p>
                  <p className="text-[10px] text-stone-400">
                     + 10 AED taxes and charges
                  </p>
                  <button className="w-full py-2 rounded bg-[#003580] text-gray-100 text-[12px] uppercase "
                  onClick={() => navigate("/b2b/hotel/apply")}
                  >Reserve Now</button>
                  <ul className="ml-5 list-disc text-[11px]">
                     <li>Confirmation is immediate</li>
                     <li>No booking or credit card fees!</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}

export default AvailabilitySection;
