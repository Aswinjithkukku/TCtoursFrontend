import React, { useState } from "react";
import { GoPlus } from "react-icons/go";

function FaqData({index}) {
   const [viewFaq, setViewFaq] = useState(false);
   return (
      <div className=" shadow-sm p-5 rounded-2xl bg-gray-100/50 mt-2">
         <div
            className="flex justify-between items-center"
            onClick={() => setViewFaq(!viewFaq)}
         >
            <p className="font-medium">{index + 1} . Question about the Hotel?</p>
            <p className="">
               <GoPlus />
            </p>
         </div>
         {viewFaq && (
            <div className="mt-3">
               <p className="text-sm">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
               </p>
            </div>
         )}
      </div>
   );
}

export default FaqData;
