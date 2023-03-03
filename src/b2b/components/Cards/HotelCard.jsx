import React, { useRef, useState } from "react";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import { BsCalendar2Date } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useHandleClickOutside } from "../../../hooks";
import DatePicker, { DateObject } from "react-multi-date-picker";

function HotelCard() {
   const navigate = useNavigate();
   const [dropdown, setDropdown] = useState(false);
   const [value, setValue] = useState([new DateObject(), new DateObject()]);
   console.log(value);

   const dropdownWrapperRef = useRef();
   useHandleClickOutside(dropdownWrapperRef, () => setDropdown(false));
   return (
      <div className="md:grid md:grid-cols-12 gap-2 py-7 space-y-4 md:space-y-0">
         <div className="md:col-span-4 flex justify-center items-center ">
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
         <div className="md:col-span-3 flex justify-center items-center ">
            <div className="relative w-full h-14 py-4 px-3  border border-blue-400 hover:border-blue-500 focus-within:border-green-500 rounded-lg ">
               <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-white rounded px-1 bg-blue-600">
                  Checkin - Chekout
               </span>
               <div className="h-full w-full overflow-hidden">
                  <DatePicker
                     value={value}
                     range
                     rangeHover
                     onChange={setValue}
                     inputClass="w-[30em]  bg-transparent border-none outline-none"
                  />
               </div>
            </div>
         </div>
         <div className="md:col-span-1 flex justify-center items-center ">
            <div className="relative w-full h-14 py-4 px-3  border border-blue-400 hover:border-blue-500 focus-within:border-green-500 rounded-lg">
               <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-white rounded px-1 bg-blue-600">
                  Adult
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
         <div className="md:col-span-1 flex justify-center items-center ">
            <div className="relative w-full h-14 py-4 px-3  border border-blue-400 hover:border-blue-500 focus-within:border-green-500 rounded-lg">
               <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-white rounded px-1 bg-blue-600">
                  Children
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
         <div className="md:col-span-1 flex justify-center items-center ">
            <div className="relative w-full h-14 py-4 px-3  border border-blue-400 hover:border-blue-500 focus-within:border-green-500 rounded-lg">
               <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-white rounded px-1 bg-blue-600">
                  Room
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

         <div className="md:col-span-2 flex justify-center items-center">
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
