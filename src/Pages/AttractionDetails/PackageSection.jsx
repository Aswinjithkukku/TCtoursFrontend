import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addToCart } from "../../redux/slices/excursionSlice";
import ActivityComponent from "./ActivityComponent";
import ActivityTable from "./ActivityTable";

function PackageSection() {
   const dispatch = useDispatch();
   const [error, setError] = useState("");

   const { recievedActivities, selectedActivities, excursion } = useSelector(
      (state) => state.excursion
   );
   const carting = () => {
      const isDateExist = selectedActivities?.filter((item) => {
         return item?.isChecked === true && item?.date !== "";
      });
      if (isDateExist.length > 0) {
         setError("");
         dispatch(addToCart(selectedActivities));
         Swal.fire({
            icon: "success",
            title: "Added to Cart!",
            text: "The selected item added to cart",
            timer: 1500,
         });
      } else {
         setError("Fill the tour Date");
      }
   };

   return (
      <>
         <div className=" my-2 text-xl text-darktext font-bold tracking-wider">
            Select Tour Options
         </div>
         <div className="rounded-sm overflow-x-auto">
            <div className=" ">
               {/* <table className="w-full">
            <thead>
              <tr className="bg-semisoft text-left">
                <th className="py-2 font-medium pl-2 w-[13em]">Tour</th>
                <th className="py-2 font-medium  ">Date</th>
                <th className="py-2 font-medium ">Transfer</th>
                <th className="py-2 font-medium ">Adult</th>
                <th className="py-2 font-medium ">Child</th>
                <th className="py-2 font-medium ">Infant</th>
                <th className="py-2 font-medium min-w-[4em] pl-5">Price</th>
              </tr>
            </thead>
            <tbody>
              </tbody>
            </table> */}
               {recievedActivities &&
                  recievedActivities?.map((item, index) => (
                     <ActivityComponent
                        item={item}
                        bookingType={recievedActivities?.bookingType}
                        index={index}
                        key={index}
                     />
                  ))}
               <div className="flex justify-end items-center mt-2">
                  {error && <p className="text-main text-xs mr-5">{error}</p>}
                  <button className="button w-[100px]" onClick={carting}>
                     Add to cart
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}

export default PackageSection;
