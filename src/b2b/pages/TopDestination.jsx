import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function TopDestination() {
   const navigate = useNavigate();

   const { destinations } = useSelector((state) => state.home);
   return (
      <div className="mx-2  ">
         <div className="text-xl md:text-2xl font-semibold text-darktext mb-4">
            Top Destinations
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {destinations?.map((item, index) => (
               <div
                  className="mt-2 relative cursor-pointer"
                  key={index}
                  onClick={() => navigate(`/b2b/attractions/${item?.name}`)}
               >
                  <div className="overflow-hidden rounded-2xl">
                     <img
                        className="hover:scale-110 object-cover rounded-2xl h-[7em] md:h-[13em] w-full  transition-all duration-500 cursor-pointer"
                        src={process.env.REACT_APP_SERVER_URL + item?.image}
                        alt={item?.name}
                     />
                  </div>
                  <div className="absolute bottom-2 left-4  text-light">
                     <div className="font-semibold capitalize">
                        {item?.name}{" "}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default TopDestination;
