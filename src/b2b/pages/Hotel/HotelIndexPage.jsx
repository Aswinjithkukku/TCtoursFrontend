import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Rating from "../../../components/Rating/Rating";
import SearchCards from "../../components/Cards/SearchCards";
import { HotelFilters } from "../../data";

function HotelIndexPage() {
   const navigate = useNavigate()
   return (
      <div className="p-2 lg:p-6">
         <SearchCards />
         <div className="">
            <div className="grid grid-cols-12 gap-2">
               <div className="filter__section col-span-3">
                  <div className=" w-full  rounded-xl  p-2">
                     <p className="uppercase font-[700] text-textColor">Filters</p>
                     {HotelFilters?.map((item, index) => (
                        <div
                           className="text-gray-400 shadow-sm mt-2 p-3 bg-gray-100/40 rounded-lg font-light space-y-2"
                           key={index}
                        >
                           <h4 className="text-[12px] font-[700] text-textColor mt-2">
                              {item?.name}
                           </h4>
                           {item?.data?.map((ele, i) => (
                              <div className="flex gap-1">
                                 <span className="">
                                    <input
                                       className="outline-none"
                                       type="checkbox"
                                    />
                                 </span>
                                 <span className="text-[14px]">
                                    {ele?.name}
                                 </span>
                              </div>
                           ))}
                        </div>
                     ))}
                  </div>
               </div>
               <div className="list__section col-span-9">
                  <div className="w-full  ">
                     <div className="flex gap-2 w-full shadow-sm rounded-xl p-3">
                        <div className="w-3/12 h-full rounded-md overflow-hidden">
                           <img
                              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                              alt="img"
                           />
                        </div>
                        <div className="flex justify-between w-full">
                           <div className="left__section text-darktext space-y-1">
                              <h3 className="text-[18px] font-[650] text-darktext">
                                 Santa Maria Hostel Fort Kochi
                              </h3>
                              <div className="flex gap-2 text-[11px] font-[500] text-blue-700">
                                 <p className="">Fort Cochi,Cochin</p>
                                 <p className="underline">show on map</p>
                                 <p className="text-darktext">
                                    3.8 km from town
                                 </p>
                              </div>
                              <div className="text-[11px] flex gap-2">
                                 <span className="">
                                    <p className="">
                                       Travel Sustainable property
                                    </p>
                                 </span>
                                 <span className="">
                                    <p className="">Beachfront</p>
                                 </span>
                              </div>
                              <div className="pt-1">
                                 <p className="font-[600] text-[14px]">
                                    Duelexe Room
                                 </p>
                                 <p className="text-[11px]">1 Bed Room</p>
                              </div>
                              <div className="flex gap-2">
                                 <p className="text-green-800 bg-green-100 text-[8px] uppercase p-1 rounded">
                                    Free Cancellation
                                 </p>
                              </div>
                           </div>
                           <div className="right__section flex justify-end text-darktext">
                              <div className="flex flex-col justify-between">
                                 <div className="flex flex-col items-end">
                                    <Rating value={5} color="rgb(234 179 8)" />
                                    <p className="text-[10px] text-yellow-500">
                                       5.0 from 200 Reviews
                                    </p>
                                 </div>
                                 <div className="flex flex-col items-end space-y-1">
                                    <p className="text-[11px]">
                                       1 Night, 1 Adult
                                    </p>
                                    <p className="font-[750] text-[18px]">
                                       1200 AED
                                    </p>
                                    <p className="text-green-500 text-[10px]">
                                       Currently available
                                    </p>
                                    <button className="px-3 py-1 rounded-md bg-blue-600 flex justify-center items-center gap-2 text-white font-semibold"
                                    onClick={() => navigate('/b2b/hotel/details')}
                                    >
                                       Book Now <AiOutlineRight />
                                    </button>
                                 </div>
                              </div>
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

export default HotelIndexPage;
