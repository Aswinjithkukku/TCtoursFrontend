import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { RxShare2 } from "react-icons/rx";
import Rating from "../../../components/Rating/Rating";
import banner from "../../../static/images/banner.jpg";
import map from "../../../static/images/map.jpg";
import AvailabilitySection from "./AvailabilitySection";
import DetailsSection from "./DetailsSection";
import FacilitySection from "./FacilitySection";
import FaqSection from "./FaqSection";
import HouseRules from "./HouseRules";
import ReviewSection from "./ReviewSection";

function HotelDetailIndex() {
   return (
      <div className="p-2 lg:p-6">
         <div className="image__section grid grid-cols-12 gap-2">
            <div className="col-span-9 grid grid-cols-3 gap-2 ">
               <div className="rounded-2xl overflow-hidden w-full row-span-2 h-full">
                  <img
                     src={banner}
                     className="w-full h-full object-cover"
                     alt="bann"
                  />
               </div>
               <div className="rounded-2xl overflow-hidden col-span-2 w-full h-[20vh]">
                  <img
                     src={banner}
                     className="w-full h-full object-cover"
                     alt="bann"
                  />
               </div>
               <div className="rounded-2xl overflow-hidden w-full h-[20vh]">
                  <img
                     src={banner}
                     className="w-full h-full object-cover"
                     alt="bann"
                  />
               </div>
               <div className="rounded-2xl overflow-hidden w-full h-[20vh]">
                  <img
                     src={banner}
                     className="w-full h-full object-cover"
                     alt="bann"
                  />
               </div>
            </div>
            <div className="col-span-3 w-full">
               <div className="rounded-2xl overflow-hidden w-full h-full">
                  <img
                     src={map}
                     className="w-full h-full object-cover"
                     alt="bann"
                  />
               </div>
            </div>
         </div>
         <div className="Details__section mt-5">
            <DetailsSection />
         </div>
         <div className="Availability__section">
            <AvailabilitySection/>
         </div>
         {/* <div className="review__section mt-5">
            <ReviewSection />
         </div> */}
         <div className="facility__section mt-5">
            <FacilitySection />
         </div>
         <div className="house_rule__section mt-5">
            <HouseRules />
         </div>
         <div className="faq__section mt-5">
            <FaqSection />
         </div>
      </div>
   );
}

export default HotelDetailIndex;
