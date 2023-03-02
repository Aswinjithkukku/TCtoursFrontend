import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { RxShare2 } from "react-icons/rx";
import Rating from "../../../components/Rating/Rating";

function DetailsSection() {
   return (
      <div className="bg-light rounded-2xl p-5 mx-2 my-2 lg:my-0 lg:mx-0 text-darktext">
         <div className="flex justify-between">
            <div className="space-y-3">
               {/* tags */}
               <div className="text-xs text-text   flex space-x-1 items-center">
                  <div className="">
                     <button className="bg-yellow-500  px-2 py-1 text-light rounded-md capitalize">
                        {/* {agentExcursion?.bookingType} */}hmmmm
                     </button>
                  </div>
                  <div className="flex space-x-3 items-center">
                     {/* {agentExcursion?.cancellationType ===
                               "freeCancellation" && ( */}
                     <div className="flex space-x-1 items-center">
                        {/* <span className='text-lightblue'><TiTick /></span> */}
                        <span className="text-green-600 text-sm">
                           Free Cancellation{" "}
                        </span>
                     </div>
                     {/* )} */}
                  </div>
                  {/* <div className="flex space-x-1 items-center">
                            <span className="text-light bg-lightblue px-3 py-1 whitespace-nowrap text-center rounded-md capitalize text-xs">
                               {
                                  agentExcursion?.category
                                     ?.categoryName
                               }{" "}
                            </span>
                            {agentExcursion?.isOffer === true &&
                               agentExcursion?.offerAmountType ===
                                  "flat" && (
                                  <span className="text-light bg-green-600 w-20 py-1 whitespace-nowrap text-center rounded-md capitalize text-xs">
                                     {agentExcursion?.offerAmountType ===
                                     "flat"
                                        ? `$ ${agentExcursion?.offerAmount} OFF`
                                        : ""}{" "}
                                  </span>
                               )}
                            {agentExcursion?.isOffer === true &&
                               agentExcursion?.offerAmountType ===
                                  "percentage" && (
                                  <span className="text-light bg-green-600 w-20 py-1 whitespace-nowrap text-center rounded-md capitalize text-xs">
                                     {agentExcursion?.offerAmountType ===
                                     "percentage"
                                        ? `${agentExcursion?.offerAmount} % OFF`
                                        : ""}{" "}
                                  </span>
                               )}
                         </div> */}
               </div>
               <div className="text-3xl font-bold ">
                  {/* {agentExcursion?.title} */}Title of Hotel
               </div>
               <div className="flex items-center space-x-3 text-sm">
                  <span className=" text-yellow-500 flex space-x-1 ">
                     <Rating
                        value={3}
                        // text={agentExcursion?.totalReviews}
                        color={"#FED049"}
                     />
                  </span>
                  <span className="flex items-center text-blueColor  capitalize">
                     <CiLocationOn />{" "}
                     {/* {agentExcursion?.destination?.name}{" "} */}
                  </span>
               </div>
            </div>
            <div className="flex space-x-2">
               {/* share button */}
               <button
                  className="h-10 w-10 rounded-full bg-soft border border-green-600 flex justify-center items-center text-2xl text-green-600"
                  // onClick={() => setShareModal(!shareModal)}
               >
                  <RxShare2 />
               </button>
               {/* like button */}
               <button className="h-10 w-10 rounded-full bg-soft text-main border-main border flex justify-center items-center text-2xl">
                  {/* {!favourites?.find(
                            (item) => item?._id === id
                         ) ? ( */}
                  <AiOutlineHeart />
                  {/* ) : (
                             <AiFillHeart />
                          )} */}
               </button>
            </div>
         </div>
      </div>
   );
}

export default DetailsSection;
