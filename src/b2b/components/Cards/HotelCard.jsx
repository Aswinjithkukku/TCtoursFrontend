import React, { useRef, useState } from "react";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import { BsCalendar2Date } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useHandleClickOutside } from "../../../hooks";

function HotelCard() {
   const navigate = useNavigate();
   const [dropdown, setDropdown] = useState(false);

   const dropdownWrapperRef = useRef();
   useHandleClickOutside(dropdownWrapperRef, () => setDropdown(false));
   return (
      <div className="md:grid md:grid-cols-12 gap-2 py-7 space-y-4 md:space-y-0">
         <div className="md:col-span-3 flex justify-center items-center ">
            <div className="relative w-full h-14 py-4 px-3  border border-blue-400 hover:border-blue-500 focus-within:border-green-500 rounded-lg">
               <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-white rounded px-1 bg-blue-600">
                  Where do you want to go?
               </span>
               <input
                  type="text"
                  list="Country"
                  // value={value}
                  // onChange={(e) => setValue(e.target.value)}
                  // onFocus={handleFocus}
                  required
                  className="block w-full capitalize outline-none bg-transparent text-sm text-textColor font-medium"
               />
            </div>
         </div>
         <div className="md:col-span-4 flex justify-center items-center ">
            <div className="relative w-full h-14 py-4 px-3  border border-blue-400 hover:border-blue-500 focus-within:border-green-500 rounded-lg">
               <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-white rounded px-1 bg-blue-600">
                  Checkin - Chekout
               </span>
               <input
                  type="text"
                  list="Country"
                  // value={value}
                  // onChange={(e) => setValue(e.target.value)}
                  // onFocus={handleFocus}
                  required
                  className="block w-full capitalize outline-none bg-transparent text-sm text-textColor font-medium"
               />
            </div>
         </div>
         <div className="md:col-span-4 flex justify-center items-center ">
            <div
               ref={dropdownWrapperRef}
               className="relative w-full h-14 py-4 px-3  border border-blue-400 hover:border-blue-500 focus-within:border-green-500 rounded-lg"
            >
               <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-white rounded px-1 bg-blue-600">
                  People & Rooms
               </span>

               <div className="" onClick={() => setDropdown(!dropdown)}>
                  <span className="px-3  w-full h-full rounded-xl text-textColor flex items-center justify-between">
                     Adult: 0 Children: 0 Rooms: 0 <AiOutlineDown />
                  </span>
               </div>
               {/* absolute div */}
               {dropdown && (
                  <div className="absolute bg-soft border-2  md:top-14 right-0 rounded-2xl w-[15em] z-10 shadow-sm">
                     <ul>
                        <li>
                           <div className="flex items-center gap-[12px] text-sm px-6 py-[12px]  transition-all text-darktext justify-between">
                              <span>Adults</span>
                              <span>
                                 <input
                                    type="number"
                                    min={0}
                                    max={10}
                                    className="text-center border placeholder:text-text py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-xl text-darktext"
                                 />
                              </span>
                           </div>
                        </li>
                        <li>
                           <div className="flex items-center gap-[12px] text-sm px-6 py-[12px] transition-all text-darktext justify-between">
                              <span>Children</span>
                              <span>
                                 <input
                                    type="number"
                                    min={0}
                                    max={10}
                                    className="text-center border placeholder:text-text py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-xl text-darktext"
                                 />
                              </span>
                           </div>
                        </li>
                        <li>
                           <div className="flex items-center gap-[12px] text-sm px-6 py-[12px] transition-all text-darktext justify-between">
                              <span>Rooms</span>
                              <span>
                                 <input
                                    type="number"
                                    min={0}
                                    max={10}
                                    className="text-center border placeholder:text-text py-3 focus:outline-none focus:border-none focus:ring-1 focus:ring-blue rounded-xl text-darktext"
                                 />
                              </span>
                           </div>
                        </li>
                     </ul>
                  </div>
               )}
               {/* absolute div */}
            </div>
         </div>
         <div className="md:col-span-1 flex justify-center items-center">
            <div className="w-full">
               <button
                  className="h-14 w-full bg-blueColor rounded-xl text-light text-3xl flex justify-center items-center"
                  onClick={() => navigate("/b2b/hotel")}
               >
                  <AiOutlineSearch />
               </button>
            </div>
         </div>
      </div>
   );
}

export default HotelCard;
