import React from "react";
import { GoPlus } from "react-icons/go";
import FaqData from "../../components/Hotel/FaqData";

function FaqSection() {
   return (
      <div className="text-darktext">
         <h2 className="text-[20px] font-[700]">FAQ of Hotel Name</h2>
         {[1, 2, 3].map((item, index) => (
            <FaqData key={item} index={index} />
         ))}
      </div>
   );
}

export default FaqSection;
