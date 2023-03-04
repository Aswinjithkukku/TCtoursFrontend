import React from "react";
import { AiOutlineCheckCircle, AiOutlineHeart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { RxShare2 } from "react-icons/rx";
import Rating from "../../../components/Rating/Rating";
import { GiCheckMark } from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";
import { GrSteps } from "react-icons/gr";
import { RxRulerSquare } from "react-icons/rx";
import { BsImageAlt } from "react-icons/bs";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { GoLocation } from "react-icons/go";

function DetailsSection() {
   return (
      <>
         <div className="grid grid-cols-12 gap-4">
            <div className="col-span-9">
               <div className="bg-light rounded-2xl p-5 mx-2 my-2 lg:my-0 lg:mx-0 text-darktext shadow-sm">
                  <div className="flex justify-between">
                     <div className="space-y-3">
                        {/* tags */}
                        <div className="text-xs text-text   flex space-x-1 items-center">
                           <div className="">
                              <button className="bg-yellow-500  px-2 py-1 text-light rounded-md capitalize">
                                 Deluxe Rooms
                              </button>
                           </div>
                           <div className="flex space-x-3 items-center">
                              <div className="flex space-x-1 items-center">
                                 <span className="text-green-600">
                                    <GiCheckMark />
                                 </span>
                                 <span className="text-green-600 text-sm">
                                    Free Cancellation{" "}
                                 </span>
                              </div>
                           </div>
                        </div>
                        <div className="text-3xl font-bold ">
                           Title of Hotel
                        </div>
                        <div className="flex items-center space-x-3 text-sm">
                           <span className=" text-yellow-500 flex items-center space-x-1 ">
                              <Rating
                                 value={3}
                                 text={"12reviews"}
                                 color={"#FED049"}
                              />
                           </span>
                           <span className="flex items-center text-blueColor  capitalize">
                              <CiLocationOn /> Duabi
                           </span>
                        </div>
                     </div>
                     <div className="flex space-x-2">
                        {/* share button */}
                        <button className="h-10 w-10 rounded-full bg-soft border border-green-600 flex justify-center items-center text-2xl text-green-600">
                           <RxShare2 />
                        </button>
                        {/* like button */}
                        <button className="h-10 w-10 rounded-full bg-soft text-main border-main border flex justify-center items-center text-2xl">
                           <AiOutlineHeart />
                        </button>
                     </div>
                  </div>
               </div>
               <div className="text-darktext py-2">
                  <div className="mt-2 space-y-2">
                     <p className="text-sm text-gray-300 uppercase font-[700]">
                        Room 41
                     </p>
                     <span className="flex gap-2 items-center">
                        <h2 className="text-xl font-[650] ">
                           Deluxe King Suite
                        </h2>
                        <p className="bg-green-200 text-green-700 p-1 rounded text-[11px]">
                           Unoccupied
                        </p>
                        <p className="bg-blue-200 text-blue-700 p-1 rounded text-[11px]">
                           Reserved
                        </p>
                     </span>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm overflow-hidden mt-2">
                     <div className="grid grid-cols-6 ">
                        <div className="shadow-sm py-4 flex justify-center items-center gap-2">
                           <span className="p-2 bg-blue-100/50 text-sky-400 rounded text-2xl">
                              <IoBedOutline />
                           </span>
                           <span className="block">
                              <p className="text-gray-300 text-[12px] font-[600]">
                                 Type
                              </p>
                              <p className="">King Suite</p>
                           </span>
                        </div>
                        <div className="shadow-sm py-4 flex justify-center items-center gap-2">
                           <span className="p-2 bg-blue-100/50 text-sky-400 rounded text-2xl">
                              <GrSteps />
                           </span>
                           <span className="block">
                              <p className="text-gray-300 text-[12px] font-[600]">
                                 Floor
                              </p>
                              <p className="">6th Floor</p>
                           </span>
                        </div>
                        <div className="shadow-sm py-4 flex justify-center items-center gap-2">
                           <span className="p-2 bg-blue-100/50 text-sky-400 rounded text-2xl">
                              <BsImageAlt />
                           </span>
                           <span className="block">
                              <p className="text-gray-300 text-[12px] font-[600]">
                                 View
                              </p>
                              <p className="">Ocean View</p>
                           </span>
                        </div>
                        <div className="shadow-sm py-4 flex justify-center items-center gap-2">
                           <span className="p-2 bg-blue-100/50 text-sky-400 rounded text-2xl">
                              <RxRulerSquare />
                           </span>
                           <span className="block">
                              <p className="text-gray-300 text-[12px] font-[600]">
                                 Size
                              </p>
                              <p className="">220 SqFt</p>
                           </span>
                        </div>
                        <div className="shadow-sm py-4 flex justify-center items-center gap-2">
                           <span className="p-2 bg-blue-100/50 text-sky-400 rounded text-2xl">
                              <HiOutlineArrowsExpand />
                           </span>
                           <span className="block">
                              <p className="text-gray-300 text-[12px] font-[600]">
                                 Side
                              </p>
                              <p className="">Left Side</p>
                           </span>
                        </div>
                        <div className="shadow-sm py-4 flex justify-center items-center gap-2">
                           <span className="p-2 bg-blue-100/50 text-sky-400 rounded text-2xl">
                              <HiOutlineArrowsExpand />
                           </span>
                           <span className="block">
                              <p className="text-gray-300 text-[12px] font-[600]">
                                 Side
                              </p>
                              <p className="">Left Side</p>
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               {/* description */}
               <div className="py-5 text-darktext">
                  <h2 className="text-[20px] capitalize font-[700]">
                     Description
                  </h2>
                  <p className="leading-6 text-gray-400 mt-2">
                     simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text
                     ever since the 1500s, when an unknown printer took a galley
                     of type and scrambled it to make a type specimen book. It
                     has survived not only five centuries, but also the leap
                     into electronic typesetting, remaining essentially
                     unchanged. It was popularised in the 1960s with the release
                     of Letraset sheets containing Lorem Ipsum passages, and
                     more recently with desktop publishing software like Aldus
                     PageMaker including versions of Lorem Ipsum. simply dummy
                     text of the printing and typesetting industry. Lorem Ipsum
                     has been the industry's standard dummy text ever since the
                     1500s, when an unknown printer took a galley of type and
                     scrambled it to make a type specimen book. It has survived
                     not only five centuries, but also the leap into electronic
                     typesetting, remaining essentially unchanged. It was
                     popularised in the 1960s with the release of Letraset
                     sheets containing Lorem Ipsum passages, and more recently
                     with desktop publishing software like Aldus PageMaker
                     including versions of Lorem Ipsum.
                  </p>
               </div>
               {/* features and aminities */}
               <div className="pb-5 text-darktext">
                  <h2 className="text-[20px] capitalize font-[700]">
                     Features & Aminities
                  </h2>
                  <div className="grid grid-cols-5 gap-5 mt-2">
                     <div className="flex gap-2 items-center">
                        <p className="text-sky-500 text-xl">
                           <AiOutlineCheckCircle />
                        </p>
                        <p className="">A/C</p>
                     </div>
                     <div className="flex gap-2 items-center">
                        <p className="text-sky-500 text-xl">
                           <AiOutlineCheckCircle />
                        </p>
                        <p className="">Balcony</p>
                     </div>
                     <div className="flex gap-2 items-center">
                        <p className="text-sky-500 text-xl">
                           <AiOutlineCheckCircle />
                        </p>
                        <p className="">ADA Room</p>
                     </div>
                     <div className="flex gap-2 items-center">
                        <p className="text-sky-500 text-xl">
                           <AiOutlineCheckCircle />
                        </p>
                        <p className="">Small Room</p>
                     </div>
                     <div className="flex gap-2 items-center">
                        <p className="text-sky-500 text-xl">
                           <AiOutlineCheckCircle />
                        </p>
                        <p className="">Living Room</p>
                     </div>
                     <div className="flex gap-2 items-center">
                        <p className="text-sky-500 text-xl">
                           <AiOutlineCheckCircle />
                        </p>
                        <p className="">Prvate pool</p>
                     </div>
                     <div className="flex gap-2 items-center">
                        <p className="text-sky-500 text-xl">
                           <AiOutlineCheckCircle />
                        </p>
                        <p className="">Security Safe</p>
                     </div>
                     <div className="flex gap-2 items-center">
                        <p className="text-sky-500 text-xl">
                           <AiOutlineCheckCircle />
                        </p>
                        <p className="">Bath Tub</p>
                     </div>
                     <div className="flex gap-2 items-center">
                        <p className="text-sky-500 text-xl">
                           <AiOutlineCheckCircle />
                        </p>
                        <p className="">Large Closet</p>
                     </div>
                     <div className="flex gap-2 items-center">
                        <p className="text-sky-500 text-xl">
                           <AiOutlineCheckCircle />
                        </p>
                        <p className="">Free-Wifi</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-span-3 text-darktext">
               <div className="bg-white rounded-2xl shadow-sm p-5 text-gray-400 space-y-3">
                  <h2 className="text-gray-400 font-[700] text-lg py-2">
                     Property Highlight
                  </h2>
                  <div className="space-y-2">
                     <h4 className="font-[600] text-stone-500 text-sm">
                        Perfect for 5 day
                     </h4>
                     <div className="flex gap-2 items-center">
                        <p className="bg-blue-100/50 text-sky-500 text-xl p-2 rounded-md">
                           <IoBedOutline />
                        </p>
                        <p className="text-[14px]">
                           Top Location: Highly rated by recent guest
                        </p>
                     </div>
                     <div className="flex gap-2 items-center">
                        <p className="bg-blue-100/50 text-sky-500 text-xl p-2 rounded-md">
                           <GoLocation />
                        </p>
                        <p className="text-[14px]">
                           Want a great night's sleep? This property was highly
                           rated for its very comfy beds
                        </p>
                     </div>
                  </div>
                  <div className="">
                     <h4 className="font-[600] text-stone-500 text-sm">
                        Breakfast Info
                     </h4>
                     <p className="text-[14px]">
                        Continental, Italian, Full English/Irish, Vegetarian,
                        Vegan, Halal, Gluten-free, Asian, American, Buffet
                     </p>
                  </div>
                  <div className="space-y-2 text-[14px]">
                     <h4 className="font-[600] text-stone-500 text-sm">
                        Options With
                     </h4>
                     <div className="flex gap-2 items-center">
                        <p className="bg-blue-100/50 text-sky-500 text-xl p-2 rounded-md">
                           <IoBedOutline />
                        </p>
                        <p className="">Pool View</p>
                     </div>
                     <div className="flex gap-2 items-center">
                        <p className="bg-blue-100/50 text-sky-500 text-xl p-2 rounded-md">
                           <GoLocation />
                        </p>
                        <p className="">City view</p>
                     </div>
                     <div className="flex gap-2 items-center">
                        <p className="bg-blue-100/50 text-sky-500 text-xl p-2 rounded-md">
                           <GoLocation />
                        </p>
                        <p className="">Terrace</p>
                     </div>
                     <div className="flex gap-2 items-center">
                        <p className="bg-blue-100/50 text-sky-500 text-xl p-2 rounded-md">
                           <GoLocation />
                        </p>
                        <p className="">Pool with a view</p>
                     </div>
                  </div>
                  <div className="space-y-2 text-[14px]">
                     <h4 className="font-[600] text-stone-500 text-sm">
                        {" "}
                        Activities
                     </h4>
                     <p className="">Tennis Court</p>
                     <p className="">Fitness Center</p>
                     <p className=""> Golf Course (with 2 miles)</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default DetailsSection;
